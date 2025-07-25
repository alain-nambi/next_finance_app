import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTrack | Smart Finance Management for Your Future",
  description:
    "Track expenses, manage investments, and grow your wealth securely with FinTrack. Your all-in-one financial dashboard.",
  icons: {
    icon: "/logo.svg", // Points to your logo in the public folder
  },
  openGraph: {
    title: "FinTrack – Take Control of Your Finances",
    description:
      "Securely manage your budget, investments, and financial goals with real-time insights.",
    url: "https://finitrack.com",
    siteName: "FinTrack",
    images: [
      {
        url: "/og-image.jpg", // Optional: Add an OG image in public/
        width: 1200,
        height: 630,
        alt: "FinTrack – Financial Dashboard Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTrack – Smarter Money Management",
    description:
      "Join thousands of users tracking spending and growing wealth with confidence.",
    images: ["/twitter-image.jpg"], // Optional
  },
  metadataBase: new URL("https://finitrack.com"), // Replace with your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
