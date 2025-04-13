import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar/index";

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
      <body className={`poppins-regular antialiased flex flex-col h-screen`}>
        <Navbar />
        <div className="flex-grow overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
