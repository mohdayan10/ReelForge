import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, useCase } = await req.json();

  await resend.emails.send({
    from: "ReelForge Waitlist <onboarding@resend.dev>",
    to: "affan@reelforge.com",
    subject: "New Waitlist Signup 🎉",
    html: `
      <h2>New waitlist signup</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Use case:</strong> ${useCase}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
