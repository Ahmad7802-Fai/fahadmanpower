import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fahad Manpower",
  description:
    "Professional manpower solutions for construction, oil & gas, hospitality, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--bg)] text-[var(--text)]`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}