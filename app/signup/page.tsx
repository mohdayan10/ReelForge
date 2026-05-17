import Link from "next/link";
import { Logo } from "@/components/logo";
import { SignupForm } from "./signup-form";

export const metadata = {
  title: "Sign up | ReelForge",
  description: "Create your ReelForge account.",
};

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        src="/Trees_Swaying_in_Gentle_Breeze.mp4"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 w-full max-w-md px-4 sm:px-6">
        <div className="bg-white/20 backdrop-blur-2xl py-10 px-6 shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-3xl border border-white/40 sm:px-10">
          <div className="flex justify-center mb-8">
            <Link href="/" className="bg-white/40 p-2 rounded-xl backdrop-blur-md shadow-sm">
              <Logo />
            </Link>
          </div>

          <h2 className="text-center text-4xl font-instrument-serif leading-9 text-gray-900 drop-shadow-sm">
            Create your account
          </h2>
          <p className="mt-3 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-black hover:text-gray-800 underline decoration-gray-400 underline-offset-4 transition-colors"
            >
              Log in
            </Link>
          </p>

          <div className="mt-8">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
