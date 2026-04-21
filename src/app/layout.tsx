import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Trinetra Foundation | Gandharividye Training",
    template: "%s | Trinetra Foundation",
  },
  description:
    "Trinetra Foundation offers authentic Gandharividye training — awakening the third eye, enhancing focus, intuition, and inner vision through ancient Vedic wisdom. Online and offline classes for children aged 6–16.",
  keywords: ["Gandharividye", "third eye", "midbrain activation", "spiritual training", "children education", "Trinetra Foundation", "Manvi"],
  openGraph: {
    title: "Trinetra Foundation | Gandharividye Training",
    description: "Awaken your child's inner vision through authentic Gandharividye training.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
