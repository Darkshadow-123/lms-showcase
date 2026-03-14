"use client";

import { motion } from "framer-motion";
import { User, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function StudentStories() {
  const students = [
    {
      name: "Ravi",
      location: "Rural Madhya Pradesh",
      class: "Class 8 Student",
      story: "Before accessing this platform, Ravi had limited access to textbooks. Now he learns Mathematics and Science online and has improved his grades by 40%.",
      before: "Limited access to educational resources",
      after: "Top performer in Mathematics",
      gradient: "from-blue-400 to-primary"
    },
    {
      name: "Priya",
      location: "Bihar Village",
      class: "Class 6 Student",
      story: "Priya's village had no proper school. Through our digital platform, she now receives quality education and dreams of becoming a doctor.",
      before: "No school in her village",
      after: "Excelling in all subjects",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "Amit",
      location: "Rural Rajasthan",
      class: "Class 9 Student",
      story: "Coming from a farming family, Amit couldn't afford tuitions. Our free platform helped him crack competitive exams and secure a scholarship.",
      before: "Could not afford additional education",
      after: "Secured scholarship for higher studies",
      gradient: "from-teal-400 to-cyan-500"
    },
  ];

  return (
    <section className="py-24 bg-secondary-50">
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
            <span>Success Stories</span>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">
            Student Success Stories
          </h3>
          <p className="text-secondary-600 max-w-2xl mx-auto text-lg">
            Real stories of transformation from our learners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-secondary-100/50 border border-secondary-100 hover:shadow-xl hover:shadow-primary-500/10 transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-primary-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${student.gradient} opacity-90`} />
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                  {student.class}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-heading font-bold text-secondary-900 mb-1">
                  {student.name}
                </h4>
                <p className="text-sm text-secondary-500 font-medium mb-4">{student.location}</p>
                <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
                  "{student.story}"
                </p>
                <div className="flex flex-col gap-2 pt-4 border-t border-secondary-100">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-secondary-400 line-through">✗ {student.before}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{student.after}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
