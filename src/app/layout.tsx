import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar/index";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Infigion Futures - Career Counselling",
  description:
    "Infigion Futures is a leading career counselling company in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`poppins-regular antialiased flex flex-col h-screen bg-white`}
      >
        <Navbar />
        <div className="flex-grow overflow-y-auto">
          {children} <Footer />
        </div>
      </body>
    </html>
  );
}
