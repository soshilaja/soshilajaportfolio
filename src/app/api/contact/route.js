import { NextResponse } from "next/server";

// Add this GET method for testing
export async function GET() {
  return NextResponse.json({ message: "Contact API route is working" });
}

export async function POST(req) {
  console.log("API route called"); // This will show in Vercel logs
     
  try {
    const { name, email, message } = await req.json();

     console.log("Request data:", { name, email, message });

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    console.log("About to call Brevo API");
    console.log("API Key exists:", !!process.env.BREVO_API_KEY);

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

    console.log("Brevo response status:", res.status);

    const data = await res.json();

    if (!res.ok) {
      console.log("Brevo error:", data);
      // Surface Brevo's error for debugging
      return NextResponse.json({ error: data }, { status: res.status });
    }
console.log("Email sent successfully");
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
