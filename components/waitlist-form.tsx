"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Step = "email" | "usecase" | "done";

export default function WaitlistForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setStep("usecase");
  };

  const handleUseCaseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!useCase.trim()) {
      setError("Please tell us how ReelForge can help you.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        useCase: useCase.trim(),
        createdAt: serverTimestamp(),
      });

      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, useCase: useCase.trim() }),
      });

      setStep("done");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (step === "done") {
    return (
      <div className="text-center py-4 flex flex-col gap-3">
        <div className="text-2xl">🎉</div>
        <p className="font-instrument-serif text-lg font-medium">You&apos;re on the list!</p>
        <p className="text-sm text-muted-foreground font-instrument-serif">
          We&apos;ll be in touch soon. Questions?{" "}
          <a
            href="mailto:affan@reelforge.com"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            affan@reelforge.com
          </a>
        </p>
      </div>
    );
  }

  if (step === "usecase") {
    const options = [
      "Audio-only Podcaster",
      "Video and Audio Podcaster",
      "Radio Show",
      "Thought leader venturing into audio podcasting",
    ];
    const isOther = useCase !== "" && !options.includes(useCase);

    return (
      <form onSubmit={handleUseCaseSubmit} className="flex flex-col gap-4">
        <p className="font-instrument-serif text-base text-muted-foreground text-center">
          One quick thing — what best describes you?
        </p>
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setUseCase(option)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-instrument-serif transition-all cursor-pointer shadow-sm ${
                useCase === option
                  ? "border-pink-500 bg-pink-100 text-pink-700 font-semibold shadow-pink-200"
                  : "border-pink-200 bg-pink-50 text-pink-900 hover:border-pink-400 hover:bg-pink-100 hover:shadow-pink-100"
              }`}
            >
              {option}
            </button>
          ))}
          <button
            type="button"
            onClick={() => { if (!isOther) setUseCase(" "); }}
            className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-instrument-serif transition-all cursor-pointer shadow-sm ${
              isOther
                ? "border-pink-500 bg-pink-100 text-pink-700 font-semibold shadow-pink-200"
                : "border-pink-200 bg-pink-50 text-pink-900 hover:border-pink-400 hover:bg-pink-100 hover:shadow-pink-100"
            }`}
          >
            Other
          </button>
          {isOther && (
            <Input
              placeholder="Tell us what you do..."
              value={useCase.trim()}
              onChange={(e) => setUseCase(e.target.value)}
              className="font-instrument-serif border-pink-300 focus:border-pink-500"
              autoFocus
            />
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full text-base py-5" disabled={loading || !useCase.trim()}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
        <button
          type="button"
          onClick={() => { setStep("email"); setError(""); setUseCase(""); }}
          className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          ← Back
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="font-instrument-serif text-base"
        autoFocus
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" className="w-full text-base py-5">
        Join the Waitlist
      </Button>
    </form>
  );
}
