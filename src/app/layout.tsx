import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masila Cars | Premium Used Cars in Kuwait",
  description:
    "Explore quality used cars, SUVs and luxury vehicles at Masila Cars Kuwait. Easy financing, trade-in options and trusted dealership service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-body min-h-screen bg-masila-black text-masila-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
