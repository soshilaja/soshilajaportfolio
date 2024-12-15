"use client"; // Add this at the top of the file

import axios from "axios";

const BREVO_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;
// console.log(BREVO_KEY);
export const sendContactEmail = async (formData) => {
  const options = {
    method: "POST",
    url: "https://api.brevo.com/v3/smtp/email",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": BREVO_KEY,
    },
    data: {
      sender: {
        name: formData.email,
        email: "stephenoshilaja@gmail.com",
      },
      to: [
        {
          email: "stephenoshilaja@gmail.com",
          name: "Stephen Oshilaja",
        },
      ],
      subject: "Contact from Portfolio Website",
      textContent: `Sender Name: ${formData.name}\n\n Message: ${formData.message}`,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
