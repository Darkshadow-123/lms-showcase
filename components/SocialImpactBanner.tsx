"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, CheckCircle2, Globe, TrendingUp, BookOpen, Heart, ArrowRight, Sparkles } from "lucide-react";

export default function SocialImpactBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary-800 via-secondary-900 to-secondary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary-light font-semibold text-sm mb-4 border border-primary/20"
            >
              <Sparkles className="w-4 h-4" />
              Bridging the Digital Education Divide
            </motion.div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Education for All, Everywhere
            </h3>
            <p className="text-secondary-300 text-lg leading-relaxed mb-6">
              Our LMS is designed to reach students in rural and underserved communities who lack access to quality educational resources. We believe every child deserves the opportunity to learn and succeed.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-secondary-300">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Free access for underprivileged students</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-300">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Works in low-bandwidth areas</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-300">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Available in multiple local languages</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all"
            >
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 hover:bg-white/15 transition-all"
            >
              <Globe className="w-10 h-10 text-primary-light mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-secondary-400 text-sm">Villages Reached</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 hover:bg-white/15 transition-all"
            >
              <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">85%</div>
              <div className="text-secondary-400 text-sm">Improvement in Grades</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 hover:bg-white/15 transition-all"
            >
              <BookOpen className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-secondary-400 text-sm">Courses Available</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 hover:bg-white/15 transition-all"
            >
              <Heart className="w-10 h-10 text-rose-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-secondary-400 text-sm">Free for Needy</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
