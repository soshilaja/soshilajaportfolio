import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY, // server-side only
      },
      body: JSON.stringify({
        sender: {
          // Use a verified sender or authenticated domain email
          name: email,
          email: "stephenoshilaja@redmelon-consulting.com",
        },
        to: [
          {
            email: "stephenoshilaja@gmail.com",
            name: "Stephen Oshilaja",
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: "Contact from Portfolio Website",
        textContent: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Surface Brevo's error for debugging
      return NextResponse.json({ error: data }, { status: res.status });
    }

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
