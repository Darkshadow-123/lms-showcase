import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EduPro - AI-Powered LMS for Schools & Colleges",
  description: "Transform education with EduPro's AI-powered learning management system. Smart classrooms, analytics, and intelligent learning tools for modern institutions.",
  keywords: "LMS, EdTech, AI Learning, Smart Classroom, School Management, Education Technology",
  openGraph: {
    title: "EduPro - AI-Powered LMS",
    description: "Transform education with AI-powered learning management system",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
