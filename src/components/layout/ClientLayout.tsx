"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />

      {/* 🔥 FLOATING WA (GLOBAL) */}
      <WhatsAppFloat />
    </>
  );
}