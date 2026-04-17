import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fahadmanpower.com"),

  title: {
    default: "Fahad Manpower",
    template: "%s | Fahad Manpower",
  },

  description:
    "Professional manpower solutions for construction, oil & gas, hospitality, and global workforce recruitment.",

  keywords: [
    "manpower agency",
    "recruitment agency",
    "oil and gas workers",
    "construction workers",
    "hospitality staff",
  ],

  authors: [{ name: "Fahad Manpower" }],

  openGraph: {
    title: "Fahad Manpower",
    description:
      "Providing skilled workforce solutions across industries worldwide.",
    url: "https://fahadmanpower.com",
    siteName: "Fahad Manpower",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fahad Manpower",
    description:
      "Professional manpower solutions for global industries.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--bg)] text-[var(--text)]`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}