// A cancellable active-time clock: paused/hidden time never skips a stage.
export class PipelineTimeline {
  constructor(signal, reducedMotion = false) {
    this.signal = signal;
    this.reducedMotion = reducedMotion;
    this.paused = false;
    this.elapsed = 0;
  }
  wait(duration) {
    return new Promise((resolve, reject) => {
      if (this.signal.aborted)
        return reject(new DOMException("Cancelled", "AbortError"));
      let remaining = this.reducedMotion ? Math.min(duration, 60) : duration;
      let previous = performance.now();
      let timer;
      const resetPrevious = () => {
        previous = performance.now();
      };
      const cleanup = () => {
        this.signal.removeEventListener("abort", cancel);
        document.removeEventListener("visibilitychange", resetPrevious);
      };
      const cancel = () => {
        clearTimeout(timer);
        cleanup();
        reject(new DOMException("Cancelled", "AbortError"));
      };
      const tick = () => {
        const now = performance.now();
        if (!this.paused && !document.hidden) {
          const advance = Math.min(remaining, Math.max(0, now - previous));
          remaining -= advance;
          this.elapsed += advance;
        }
        previous = now;
        if (remaining <= 0) {
          cleanup();
          resolve();
        } else timer = setTimeout(tick, this.reducedMotion ? 20 : 32);
      };
      this.signal.addEventListener("abort", cancel, { once: true });
      document.addEventListener("visibilitychange", resetPrevious);
      timer = setTimeout(tick, 0);
    });
  }
}
