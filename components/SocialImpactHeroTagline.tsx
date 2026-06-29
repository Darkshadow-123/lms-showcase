"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SocialImpactHeroTagline() {
  return (
    <section className="py-8 md:py-10 bg-gradient-to-r from-primary via-purple-600 to-pink-500 border-b border-secondary-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
         
          <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-white italic">
            "Education for Every Child, Regardless of Background."
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mt-2 md:mt-3">
            Empowering Underprivileged Students Through Digital Learning
          </p>
        </motion.div>
      </div>
    </section>
  );
}
