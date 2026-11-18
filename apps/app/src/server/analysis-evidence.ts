import { z } from "zod";

const score = z.object({ label: z.string(), confidence: z.number().min(0).max(1) });
type Score = z.infer<typeof score>;
const topScore = (values: Score[]) => values.reduce<Score | undefined>((best, current) =>
  !best || current.confidence > best.confidence ? current : best, undefined);
const segment = z.object({
  start_time: z.number().min(0),
  end_time: z.number().min(0),
  text: z.string(),
  emotions: z.array(score).default([]),
  sentiments: z.array(score).default([]),
});
const common = new Set("a an and are as at be by can could did do does for from had has have how i in is it me of on or please say show tell that the their them then they this to up us was were what when where which who why will with would you about video clip speaker segment transcript".split(" "));
const time = (seconds: number) => {
  const value = Math.floor(seconds);
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
};

function terms(text: string) {
  return (text.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []).filter(word => !common.has(word));
}

export function answerFromEvidence(analysis: unknown, question: string) {
  const parsed = z.object({
    status: z.string().optional(),
    reason_code: z.string().optional(),
    utterances: z.array(z.unknown()),
  }).safeParse(analysis);
  if (!parsed.success) return "The saved analysis has no readable transcript or scores.";
  const segments = parsed.data.utterances.flatMap(value => {
    const result = segment.safeParse(value);
    return result.success && result.data.end_time >= result.data.start_time ? [result.data] : [];
  });
  if (!segments.length) {
    const reason = parsed.data.reason_code ?? parsed.data.status;
    return "The pipeline returned no usable segments for this video." +
      (reason ? " Reported outcome: " + reason.replaceAll("_", " ") + "." : "");
  }

  const describe = (item: z.infer<typeof segment>) => {
    const labels = [item.sentiments, item.emotions].flatMap(values => {
      const first = topScore(values);
      return first ? [`${first.label} (${Math.round(first.confidence * 100)}% model score)`] : [];
    });
    return `[${time(item.start_time)}–${time(item.end_time)}] ${item.text.trim() || "No spoken text"}` +
      (labels.length ? " · " + labels.join(", ") : "");
  };

  const timestamp = /\b(\d+):([0-5]\d)\b/.exec(question);
  if (timestamp) {
    const seconds = Number(timestamp[1]) * 60 + Number(timestamp[2]);
    const match = segments.find(item => item.start_time <= seconds && seconds < item.end_time);
    return match ? describe(match) : "No analyzed segment covers " + time(seconds) + ".";
  }

  const query = new Set(terms(question));
  const matches = segments.map(item => {
    const evidence = new Set(terms([item.text, ...item.emotions.map(value => value.label),
      ...item.sentiments.map(value => value.label)].join(" ")));
    return { item, relevance: [...query].filter(word => evidence.has(word)).length };
  }).filter(match => match.relevance > 0).sort((a, b) => b.relevance - a.relevance).slice(0, 5);
  if (matches.length) {
    return "Matching segments from the saved analysis:\n\n" + matches.map(({ item }) => describe(item)).join("\n\n");
  }
  if (/\b(summary|summarize|overview|overall|sentiment|emotions?|score|scores)\b/i.test(question)) {
    const summary = (field: "sentiments" | "emotions") => {
      const counts = new Map<string, number>();
      for (const item of segments) {
        const top = topScore(item[field]);
        if (top) counts.set(top.label, (counts.get(top.label) ?? 0) + 1);
      }
      return [...counts].sort((a, b) => b[1] - a[1]).map(([label, count]) => `${label}: ${count}`).join(", ");
    };
    return [
      `The pipeline analyzed ${segments.length} segments. Counts below are the top model label within each segment.`,
      "Sentiment · " + (summary("sentiments") || "No labels returned"),
      "Emotion · " + (summary("emotions") || "No labels returned"),
      ...segments.slice(0, 3).map(describe),
    ].join("\n\n");
  }
  return "The saved transcript and scores had no matching words. Try a phrase from the video, an emotion label, or a timestamp such as 1:23.";
}
