"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  BookOpen,
  FileQuestion,
  Users,
  BarChart3,
  GraduationCap,
  Lightbulb
} from "lucide-react";

const aiFeatures = [
  // {
  //   icon: Brain,
  //   title: "AI Homework Assistant",
  //   description: "Intelligent homework help that provides step-by-step explanations and hints without giving away answers. Available 24/7 for students.",
  //   color: "from-purple-500 to-pink-500",
  //   benefits: ["Step-by-step guidance", "Instant feedback", "All subjects covered"],
  // },
  {
    icon: FileQuestion,
    title: "AI Quiz Generator",
    description: "Automatically generate quizzes and assessments from lesson content. Multiple question types with varying difficulty levels.",
    color: "from-blue-500 to-cyan-500",
    benefits: ["Auto-generation", "Difficulty levels", "Answer key included"],
  },
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description: "AI analyzes each student's strengths and weaknesses to create customized learning journeys that adapt in real-time.",
    color: "from-green-500 to-emerald-500",
    benefits: ["Custom curriculum", "Adaptive difficulty", "Progress tracking"],
  },
  {
    icon: TrendingUp,
    title: "AI Performance Insights",
    description: "Deep analytics into student performance with predictive insights and early warning systems for at-risk students.",
    color: "from-orange-500 to-red-500",
    benefits: ["Predictive analytics", "Early warnings", "Actionable insights"],
  },
  {
    icon: BarChart3,
    title: "Predictive Student Analytics",
    description: "Forecast student success and identify potential issues before they happen using historical data and machine learning.",
    color: "from-indigo-500 to-purple-500",
    benefits: ["Success prediction", "Risk identification", "Intervention suggestions"],
  },
  {
    icon: CheckCircle2,
    title: "Smart Grading",
    description: "AI-powered assessment grading for objective questions with instant feedback. Save hours of teacher time every week.",
    color: "from-teal-500 to-green-500",
    benefits: ["Instant grading", "Consistent evaluation", "Detailed feedback"],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Data Collection",
    description: "AI gathers data from student interactions, assessments, and learning activities to build comprehensive profiles.",
    icon: BookOpen,
  },
  {
    step: "02",
    title: "Reports and Learning Analysis",
    description: "Machine learning algorithms analyze patterns to identify strengths, weaknesses, and learning preferences.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Personalization",
    description: "Students receive customized content, recommendations, and learning paths based on their unique needs.",
    icon: Sparkles,
  },
];

const stats = [
  { value: "85%", label: "Improved Learning Outcomes" },
  { value: "60%", label: "Reduced Teacher Workload" },
  { value: "40%", label: "Faster Student Progress" },
  { value: "24/7", label: "AI Assistance Available" },
];

export default function AIFeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-secondary-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 font-medium text-sm mb-6 border border-purple-500/30">
                <Sparkles className="w-4 h-4" />
                Powered by Advanced AI
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                The Future of Learning is{" "}
                <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Here
                </span>
              </h1>
              
              <p className="text-xl text-secondary-300 mb-8">
                Harness the power of artificial intelligence to deliver personalized education 
                at scale. Our AI engine adapts to every student's unique learning needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                >
                  Explore Features
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI Learning Assistant</div>
                    <div className="text-secondary-400 text-sm">Online • Ready to help</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-secondary-400 text-sm mb-2">Student</div>
                    <div className="text-white">Can you help me understand quadratic equations?</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 border border-purple-500/30">
                    <div className="text-purple-300 text-sm mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> AI Assistant
                    </div>
                    <div className="text-white leading-relaxed">
                      Of course! Let me break it down for you. A quadratic equation is an equation of the form ax² + bx + c = 0...
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-secondary-400 text-sm">
                      Ask a follow-up question...
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <Lightbulb className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-900 border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section id="features" className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-purple-900/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Powerful AI Capabilities for{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Every Need
              </span>
            </h2>
            <p className="text-lg text-secondary-400">
              Advanced artificial intelligence features designed to enhance learning outcomes 
              and reduce teacher workload
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-dark rounded-2xl p-8 hover:bg-secondary-800/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-secondary-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              How Our AI Works
            </h2>
            <p className="text-lg text-secondary-400">
              A simple three-step process that delivers personalized learning experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-dark rounded-2xl p-8 h-full">
                  <div className="text-6xl font-heading font-bold text-white/10 mb-4">
                    {step.step}
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-secondary-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                Experience AI-Powered Learning
              </h2>
              <p className="text-lg text-secondary-400">
                Try our AI features right now - no signup required
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-white/80 text-sm">Verity AI Tutor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-sm">Online</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-secondary-500 mb-1">AI Tutor says:</div>
                    <div className="bg-purple-50 rounded-xl p-4 text-secondary-700">
                      Hello! I'm your AI learning assistant. I can help you with:
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FileQuestion, label: "Quiz Generator" },
                    { icon: BookOpen, label: "Homework Help" },
                    { icon: Target, label: "Learning Paths" },
                    { icon: TrendingUp, label: "Performance Insights" },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary-50 hover:bg-primary-50 transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-secondary-700">{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask me anything about your studies..."
                    className="flex-1 px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary focus:outline-none"
                  />
                  <button className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
                    Ask
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Start Your AI-Powered Journey
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get access to all AI features with a free trial. No credit card required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-purple-600 hover:bg-secondary-100 shadow-lg transition-all hover:-translate-y-1"
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
