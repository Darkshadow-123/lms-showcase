"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function MissionStatement() {
  return (
    <section className="py-16 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/background.webp)' }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Our Mission</span>
            <Heart className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Over 250 million children worldwide lack access to quality education. 
            Our LMS platform bridges the gap by providing accessible digital learning for underprivileged communities.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/80 mt-5 font-medium"
          >
            Quality Education Should Not Depend on Privilege.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
