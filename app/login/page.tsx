import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";

export const metadata = {
  title: "Log in | ReelForge",
  description: "Log in to your ReelForge account.",
};

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/Trees_Swaying_in_Gentle_Breeze.mp4"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Very subtle light overlay to soften the video slightly without making it dark */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Login Card (Bright Frosted Glass) */}
      <div className="relative z-10 w-full max-w-md px-4 sm:px-6">
        <div className="bg-white/20 backdrop-blur-2xl py-10 px-6 shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-3xl border border-white/40 sm:px-10">
          <div className="flex justify-center mb-8">
            <Link href="/" className="bg-white/40 p-2 rounded-xl backdrop-blur-md shadow-sm">
              <Logo />
            </Link>
          </div>
          
          <h2 className="text-center text-4xl font-instrument-serif leading-9 text-gray-900 drop-shadow-sm">
            Welcome back
          </h2>
          <p className="mt-3 text-center text-sm text-gray-700">
            Or{" "}
            <Link
              href="/signup"
              className="font-medium text-black hover:text-gray-800 underline decoration-gray-400 underline-offset-4 transition-colors"
            >
              create a new account
            </Link>
          </p>

          <div className="mt-8">
            <form className="space-y-6" action="#" method="POST">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </Label>
                  <div className="text-sm leading-6">
                    <a href="#" className="font-semibold text-gray-900 hover:text-black transition-colors">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-500 focus:bg-white/60 focus:border-white transition-all shadow-inner"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 shadow-xl font-semibold text-base py-5 rounded-xl">
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
