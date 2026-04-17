"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading mb-4">
            Vision & Mission
          </h2>

          <div className="space-y-4">
            <p className="text-muted">
              <strong>Vision:</strong> To become a leading global manpower
              provider known for reliability and excellence.
            </p>

            <p className="text-muted">
              <strong>Mission:</strong> Deliver high-quality workforce
              solutions and create opportunities for professionals.
            </p>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/asset/about/vision.jpg"
            alt="Vision"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </Section>
  );
}