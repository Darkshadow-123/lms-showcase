"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Quote } from "lucide-react";

export default function VolunteerTeachers() {
  const teachers = [
    {
      name: "Sunita Devi",
      location: "Madhya Pradesh",
      subject: "Mathematics",
      quote: "Teaching here means giving opportunities to children who deserve a better future.",
      experience: "5 years",
      gradient: "from-primary to-purple-600"
    },
    {
      name: "Ramesh Kumar",
      location: "Bihar",
      subject: "Science",
      quote: "Every child has potential. I'm just helping them discover it.",
      experience: "3 years",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Lakshmi",
      location: "Rajasthan",
      subject: "English",
      quote: "Education is the most powerful weapon we can use to change the world.",
      experience: "4 years",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      name: "Mohammad Khan",
      location: "Uttar Pradesh",
      subject: "Social Studies",
      quote: "Seeing these children grow and learn is the greatest reward.",
      experience: "6 years",
      gradient: "from-amber-500 to-orange-500"
    },
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
            <span>Our Team</span>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">
            Teachers Making a Difference
          </h3>
          <p className="text-secondary-600 max-w-2xl mx-auto text-lg">
            Dedicated volunteers bringing education to underserved communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 border border-secondary-100 text-center hover:shadow-xl hover:shadow-primary-500/10 transition-all group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${teacher.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-heading font-semibold text-secondary-900 mb-1">
                {teacher.name}
              </h4>
              <p className="text-sm text-primary font-medium mb-1">{teacher.subject}</p>
              <p className="text-xs text-secondary-500 mb-4">{teacher.location} • {teacher.experience}</p>
              <div className="relative">
                <Quote className="w-4 h-4 text-secondary-300 absolute -top-1 -left-1" />
                <p className="text-sm text-secondary-600 italic pl-2">
                  "{teacher.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
