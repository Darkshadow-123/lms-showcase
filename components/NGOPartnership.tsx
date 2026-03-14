"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, School, UsersRound, Globe, GraduationCap, ArrowRight, Sparkles } from "lucide-react";

export default function NGOPartnership() {
  const partners = [
    { name: "Rural Schools", icon: School, color: "from-primary to-purple-600" },
    { name: "NGO Partners", icon: Heart, color: "from-rose-500 to-pink-500" },
    { name: "Volunteers", icon: UsersRound, color: "from-teal-500 to-cyan-500" },
    { name: "Community Centers", icon: Globe, color: "from-purple-500 to-indigo-500" },
    { name: "Education Initiatives", icon: GraduationCap, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary-600 font-semibold text-sm mb-4 border border-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Partnerships</span>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">
            Working Together to Transform Education
          </h3>
          <p className="text-secondary-600 max-w-2xl mx-auto text-lg">
            Partnering with NGOs, schools, and volunteers to bring quality education to every child
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-secondary-50 rounded-2xl p-5 text-center border border-secondary-100 hover:border-primary hover:shadow-md hover:shadow-primary-500/10 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <partner.icon className="w-7 h-7 text-white" />
              </div>
              <p className="font-semibold text-secondary-700 group-hover:text-primary transition-colors">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
