import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephen Oshilaja Portfolio",
  description: "I’m Stephen Oshilaja, a passionate and versatile web developer with a focus on creating intuitive, visually compelling, and performance-optimized digital experiences. With a strong foundation in Reactjs, Nextjs, Nodejs, Tailwind CSS, SQL, WordPress, Wix, MongoDB, Google Cloud Platform, etc, I transform ideas into beautifully functional websites and applications that make a lasting impact. In this portfolio, you’ll find a collection of my most recent work, showcasing my expertise in React, Nextjs, Tailwind CSS, WordPress, etc. Each project reflects my commitment to quality, creativity, and a user-first approach. Whether you’re looking for a sleek and modern website, a powerful web application, or a standout design, I’m here to help bring your vision to life. Explore my work, and feel free to reach out to discuss how we can collaborate on your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
