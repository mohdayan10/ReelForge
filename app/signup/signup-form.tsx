"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const mismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      e.preventDefault();
      setError("Passwords do not match");
      return;
    }
    setError("");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Full name
        </Label>
        <div className="mt-2">
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="block w-full bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-500 focus:bg-white/60 focus:border-white transition-all shadow-inner"
            placeholder="Jane Doe"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </Label>
        <div className="mt-2">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-500 focus:bg-white/60 focus:border-white transition-all shadow-inner"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
          Password
        </Label>
        <div className="mt-2">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-500 focus:bg-white/60 focus:border-white transition-all shadow-inner"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
          Confirm password
        </Label>
        <div className="mt-2">
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (error) setError("");
            }}
            aria-invalid={mismatch}
            className="block w-full bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-500 focus:bg-white/60 focus:border-white transition-all shadow-inner"
            placeholder="••••••••"
          />
          {(mismatch || error) && (
            <p className="mt-2 text-sm text-red-600">
              {error || "Passwords do not match"}
            </p>
          )}
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={mismatch}
          className="w-full bg-black text-white hover:bg-gray-800 shadow-xl font-semibold text-base py-5 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Create account
        </Button>
      </div>
    </form>
  );
}
