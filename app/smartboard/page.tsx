"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Monitor, 
  PenTool, 
  Users, 
  Brain, 
  Library, 
  Share2,
  Play,
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles,
  Zap,
  MonitorPlay
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Digital Whiteboard",
    description: "Interactive whiteboard with drawing tools, shapes, text, and multimedia support. Save and share boards instantly.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PenTool,
    title: "Screen Sharing",
    description: "Share your screen or specific windows with students. Annotate over any application in real-time.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Students can participate directly from their devices. Collaborative whiteboard sessions for group activities.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "AI Teaching Assistant",
    description: "AI-powered suggestions, auto-generated quizzes, and smart content recommendations during lessons.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Library,
    title: "Resource Library",
    description: "Access thousands of pre-made lesson plans, worksheets, and educational resources from our cloud library.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share recordings, boards, and materials with students, parents, and colleagues instantly via link or email.",
    color: "from-teal-500 to-green-500",
  },
];

const benefits = [
  {
    title: "Increase Engagement",
    description: "Interactive lessons keep students focused and participating actively",
    stat: "45%",
    label: "More Engagement",
  },
  {
    title: "Save Time",
    description: "Automated grading and instant feedback reduce teacher workload",
    stat: "60%",
    label: "Less Workload",
  },
  {
    title: "Better Outcomes",
    description: "Visual and interactive learning improves knowledge retention",
    stat: "3x",
    label: "Better Retention",
  },
  {
    title: "Easy Integration",
    description: "Works with existing classroom equipment and LMS systems",
    stat: "100%",
    label: "Compatibility",
  },
];

const testimonials = [
  {
    quote: "The smartboard has transformed our classroom dynamics. Students who were previously disengaged are now eager to participate in every lesson.",
    author: "Mrs. Anjali Sharma",
    role: "Science Teacher",
    institution: "Springdales School",
    rating: 5,
  },
  {
    quote: "Recording lessons with the smartboard has been a game-changer. Students can review concepts at their own pace, and parents can support their children's learning at home.",
    author: "Mr. Vikram Singh",
    role: "Mathematics HOD",
    institution: "Delhi Public School",
    rating: 5,
  },
];

export default function SmartboardPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232563EB%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[120px] opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-semibold text-sm mb-6 border border-blue-500/20"
              >
                <MonitorPlay className="w-4 h-4" />
                Smart Classroom Solution
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
                Revolutionize Your Classroom with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
                  Smartboards
                </span>
              </h1>
              
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                Transform traditional classrooms into interactive digital learning environments. 
                Engage students like never before with our cutting-edge smartboard technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white text-secondary-700 border-2 border-secondary-200 hover:border-primary hover:text-primary transition-all"
                >
                  <Play className="w-5 h-5" />
                  See It In Action
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-primary-500/10 border border-secondary-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    Verity Smartboard
                  </div>
                  <div className="w-16" />
                </div>
                <div className="p-6 bg-secondary-50 min-h-[300px]">
                  <div className="bg-white rounded-2xl p-5 h-full border border-secondary-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex gap-2">
                        <button className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                          <PenTool className="w-4 h-4 text-blue-600" />
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-secondary-100 flex items-center justify-center">
                          <span className="text-sm font-bold text-secondary-600">T</span>
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-secondary-100 flex items-center justify-center">
                          <span className="text-sm text-secondary-600">□</span>
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-secondary-100 flex items-center justify-center">
                          <Users className="w-4 h-4 text-secondary-600" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-secondary-900">Understanding Photosynthesis</div>
                      <div className="flex gap-4">
                        <div className="flex-1 bg-green-100 rounded-xl p-4">
                          <div className="text-green-700 font-semibold">CO₂ + H₂O + Light</div>
                          <div className="text-xs text-green-600 font-medium">Reactants</div>
                        </div>
                        <div className="text-2xl text-secondary-400 flex items-center">→</div>
                        <div className="flex-1 bg-green-200 rounded-xl p-4">
                          <div className="text-green-800 font-semibold">C₆H₁₂O₆ + O₂</div>
                          <div className="text-xs text-green-700 font-medium">Products</div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <div className="w-20 h-16 bg-blue-200 rounded-xl flex items-center justify-center">
                          <span className="text-xs text-blue-700 font-semibold">Sun</span>
                        </div>
                        <div className="w-20 h-16 bg-green-200 rounded-xl flex items-center justify-center">
                          <span className="text-xs text-green-700 font-semibold">Plant</span>
                        </div>
                        <div className="w-20 h-16 bg-yellow-200 rounded-xl flex items-center justify-center">
                          <span className="text-xs text-yellow-700 font-semibold">O₂</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-2xl p-4 border border-secondary-100"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Everything You Need for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Interactive Teaching
              </span>
            </h2>
            <p className="text-lg text-secondary-600">
              Powerful features designed to enhance classroom engagement and simplify lesson delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-secondary-100/50 hover:shadow-xl border border-secondary-100 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Proven Results for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Educational Excellence
              </span>
            </h2>
            <p className="text-lg text-secondary-400">
              See how Verity Smartboard transforms learning outcomes across institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-heading font-bold text-white mb-2">
                  {benefit.stat}
                </div>
                <div className="text-blue-400 font-semibold mb-2">{benefit.label}</div>
                <div className="text-secondary-400 text-sm">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-secondary-600">
              Watch how teachers and students use Verity Smartboard in real classrooms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-gradient-to-br from-secondary-800 to-secondary-900 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors group">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-semibold text-lg">Watch Demo: Interactive Math Lesson</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Loved by Teachers
            </h2>
            <p className="text-lg text-secondary-600">
              See what educators are saying about Verity Smartboard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-50 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                    <div className="text-sm text-secondary-500">{testimonial.role}, {testimonial.institution}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Transform Your Classroom Today
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get a free demonstration of Verity Smartboard at your institution. No commitment required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white text-primary hover:bg-secondary-100 shadow-lg transition-all hover:-translate-y-1"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
