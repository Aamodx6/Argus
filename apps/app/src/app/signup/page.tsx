"use client";

import { marketingHome } from "~/lib/brand";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "~/actions/auth";
import { signupSchema, type SignupSchema } from "~/schemas/auth";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: SignupSchema) {
    try {
      setLoading(true);
      setError("");

      const result = await registerUser(data);

      if (result.error) {
        setError(result.error);
        return;
      }

      // Sign in after registration
      const signInResult = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (!signInResult?.error) {
        router.push("/");
      } else {
        setError("Account created, please sign in.");
        setTimeout(() => router.push("/login"), 1000);
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#111111] font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <nav className="flex h-20 items-center justify-between border-b border-black/[0.06] px-6 sm:px-12 max-w-7xl mx-auto">
        <Link href={marketingHome} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center text-white font-semibold text-xs tracking-wider">
            NU
          </div>
          <span className="text-xl font-bold tracking-tight text-[#111111]">Nuance</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-xs uppercase tracking-widest font-mono text-black/60 hover:text-black transition-colors"
          >
            Sign In →
          </Link>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 py-12 lg:py-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-sm bg-orange-500 inline-block"></span>
              <span className="text-xs uppercase tracking-widest font-mono text-black/60 font-semibold">
                New Workspace
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Deploy your video sentiment workspace.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-sm sm:text-base text-black/65 leading-relaxed">
              Instant access to multimodal neural models, batch S3 video processing, and interactive sentiment timelines.
            </p>
          </div>
        </div>

        {/* Content Section: Form on Left, Side Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="lg:col-span-8 bg-[#eae8e1]/70 border border-black/10 rounded-[28px] p-8 sm:p-12 shadow-sm">
            {error && (
              <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="text-[11px] font-mono tracking-widest text-black/60 uppercase mb-2 block font-semibold">
                  Username
                </label>
                <input
                  {...form.register("name")}
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full rounded-2xl bg-[#f4f3ef] border border-black/10 px-4 py-3.5 text-sm text-black placeholder:text-black/40 focus:border-black/30 focus:outline-none transition-all"
                />
                {form.formState.errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-mono tracking-widest text-black/60 uppercase mb-2 block font-semibold">
                  Email address
                </label>
                <input
                  {...form.register("email")}
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl bg-[#f4f3ef] border border-black/10 px-4 py-3.5 text-sm text-black placeholder:text-black/40 focus:border-black/30 focus:outline-none transition-all"
                />
                {form.formState.errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-mono tracking-widest text-black/60 uppercase mb-2 block font-semibold">
                  Password
                </label>
                <input
                  {...form.register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl bg-[#f4f3ef] border border-black/10 px-4 py-3.5 text-sm text-black placeholder:text-black/40 focus:border-black/30 focus:outline-none transition-all"
                />
                {form.formState.errors.password && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-mono tracking-widest text-black/60 uppercase mb-2 block font-semibold">
                  Confirm password
                </label>
                <input
                  {...form.register("confirmPassword")}
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl bg-[#f4f3ef] border border-black/10 px-4 py-3.5 text-sm text-black placeholder:text-black/40 focus:border-black/30 focus:outline-none transition-all"
                />
                {form.formState.errors.confirmPassword && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {form.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Stacked Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-full bg-[#111111] hover:bg-black text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
                >
                  <span>{loading ? "Deploying workspace..." : "Deploy workspace"}</span>
                  <span className="text-orange-500 font-semibold">→</span>
                </button>

                <Link
                  href="/login"
                  className="w-full h-12 rounded-full border border-black/15 bg-white/85 hover:bg-white text-[#111111] font-medium text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>Sign in to existing workspace</span>
                  <span className="text-orange-500 font-semibold">→</span>
                </Link>

                <p className="text-[11px] font-mono tracking-wider text-black/45 uppercase text-center pt-2">
                  Instant API key provisioned upon workspace deployment
                </p>
              </div>
            </form>
          </div>

          {/* Side Cards Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: Sales */}
            <div className="bg-[#111111] text-white rounded-[24px] p-6 border border-white/10 shadow-sm">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-semibold block mb-2">
                Sales
              </span>
              <h3 className="text-lg font-bold tracking-tight text-white mb-1">
                hello@warpyn.example
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Demos, pricing and procurement.
              </p>
            </div>

            {/* Card 2: Support */}
            <div className="bg-[#eae8e1]/70 border border-black/10 rounded-[24px] p-6 shadow-sm">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-semibold block mb-2">
                Support
              </span>
              <h3 className="text-lg font-bold tracking-tight text-[#111111] mb-1">
                help@warpyn.example
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Existing workspaces, answered in one working day.
              </p>
            </div>

            {/* Card 3: Security */}
            <div className="bg-[#eae8e1]/70 border border-black/10 rounded-[24px] p-6 shadow-sm">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-semibold block mb-2">
                Security
              </span>
              <h3 className="text-lg font-bold tracking-tight text-[#111111] mb-1">
                security@warpyn.example
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Reviews, questionnaires and our SOC 2 report.
              </p>
            </div>

            {/* Card 4: Press */}
            <div className="bg-[#eae8e1]/70 border border-black/10 rounded-[24px] p-6 shadow-sm">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-semibold block mb-2">
                Press
              </span>
              <h3 className="text-lg font-bold tracking-tight text-[#111111] mb-1">
                press@warpyn.example
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Interviews and the brand kit.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
