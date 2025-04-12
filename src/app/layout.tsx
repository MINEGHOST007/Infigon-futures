import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infigion Futures - Career Counselling",
  description: "Infigion Futures is a leading career counselling company in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`poppins-regular antialiased`}>
        {children}
      </body>
    </html>
  );
}
