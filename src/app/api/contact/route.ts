import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, position, email, phone } = body;

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      );
    }

    // FormSubmit.co endpoint
    const res = await fetch("https://formsubmit.co/ajax/edwardw@mvne.co.za", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Bitexen MVNO — Working session request from ${name}`,
        Name: name,
        Company: company,
        Position: position,
        Email: email,
        Phone: phone,
        _template: "table",
      }),
    });

    if (!res.ok) {
      throw new Error("Form submission service returned an error.");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send. Please try the email link instead." },
      { status: 500 }
    );
  }
}
