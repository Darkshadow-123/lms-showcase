"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  GraduationCap, 
  Video, 
  Users, 
  BarChart3, 
  BookMarked, 
  FileText, 
  MessageSquare,
  CreditCard,
  Library,
  ClipboardList,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning Engine",
    description: "Our adaptive learning algorithm analyzes student performance and creates personalized learning paths that adapt to each student's unique pace and learning style.",
    benefits: ["Personalized curriculum", "Real-time adjustments", "Progress tracking"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Smartboard Integration",
    description: "Transform traditional classrooms with interactive smartboard technology. Share screens, annotate in real-time, and engage students like never before.",
    benefits: ["Screen sharing", "Interactive whiteboard", "Recording capabilities"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Video,
    title: "Live Class Management",
    description: "Host seamless virtual classrooms with HD video, breakout rooms, polls, quizzes, and comprehensive attendance tracking.",
    benefits: ["HD video conferencing", "Breakout rooms", "Live polls"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Automated Attendance",
    description: "Mark attendance automatically with facial recognition, geofencing, or manual entry. Get instant alerts for irregular attendance patterns.",
    benefits: ["Facial recognition", "Geofencing", "Instant alerts"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Comprehensive dashboards with real-time insights into student progress, teacher performance, and institutional metrics.",
    benefits: ["Real-time dashboards", "Custom reports", "Export options"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BookMarked,
    title: "Content Management System",
    description: "Create, organize, and distribute digital content with our powerful CMS. Support for videos, PDFs, quizzes, and interactive content.",
    benefits: ["Multi-format support", "Version control", "Easy sharing"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FileText,
    title: "Online Assessments",
    description: "Create and administer online exams with anti-cheating measures, automated grading, and detailed performance analysis.",
    benefits: ["Anti-cheating tools", "Auto-grading", "Detailed analytics"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication Portal",
    description: "Keep parents informed with real-time updates on attendance, homework, grades, and important announcements.",
    benefits: ["Real-time updates", "Two-way communication", "App notifications"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Streamline fee collection with online payments, automated reminders, invoice generation, and financial reporting.",
    benefits: ["Online payments", "Automated reminders", "Financial reports"],
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Library,
    title: "Library Management",
    description: "Digital library management with book tracking, e-books, issue/return management, and reading recommendations.",
    benefits: ["E-book support", "Book tracking", "Recommendations"],
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: ClipboardList,
    title: "Exam Management",
    description: "Complete exam management from schedule creation to result publication. Support for both online and offline exams.",
    benefits: ["Schedule management", "Online & offline", "Result automation"],
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: ClipboardCheck,
    title: "Homework & Assignments",
    description: "Create, assign, and track homework with automatic grading for objective questions and plagiarism detection.",
    benefits: ["Auto-grading", "Plagiarism check", "Submission tracking"],
    color: "from-violet-500 to-purple-500",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,900",
    period: "/month",
    description: "Perfect for small schools",
    features: [
      "Up to 500 students",
      "Core LMS features",
      "5 Teacher accounts",
      "Basic analytics",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹19,900",
    period: "/month",
    description: "Best for growing institutions",
    features: [
      "Up to 2,000 students",
      "All LMS features",
      "25 Teacher accounts",
      "Advanced analytics",
      "Priority support",
      "Parent portal",
      "Fee management",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large institutions",
    features: [
      "Unlimited students",
      "Custom integrations",
      "Unlimited accounts",
      "AI analytics",
      "Dedicated support",
      "Custom branding",
      "API access",
    ],
    highlighted: false,
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232563EB%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[120px] opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary-600 font-semibold text-sm mb-6 border border-primary/20"
            >
              <Sparkles className="w-4 h-4" />
              12+ Powerful Features
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
              Powerful Features for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-500">
                Modern Education
              </span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive suite of tools designed to streamline operations, 
              enhance learning, and empower educators with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-secondary-100/50 hover:shadow-xl hover:shadow-primary-500/10 border border-secondary-100 transition-all"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br", feature.color)}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-secondary-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Everything in One Place
            </h2>
            <p className="text-lg text-secondary-600">
              Our intuitive dashboard gives you complete control over all aspects of your institution
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl shadow-primary-500/10 border border-secondary-100 overflow-hidden"
          >
            <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-secondary-500 ml-2">EduPro Dashboard</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-secondary-600">Students</span>
                <span className="text-secondary-900 font-medium">Teachers</span>
                <span className="text-secondary-600">Courses</span>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-4">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-primary">2,547</div>
                    <div className="text-sm text-secondary-500 font-medium">Total Students</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-secondary-500 font-medium">Avg. Attendance</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-secondary-500 font-medium">Active Courses</div>
                  </div>
                </div>
                <div className="md:col-span-3 bg-secondary-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-secondary-900 mb-4">Performance Overview</h4>
                  <div className="space-y-4">
                    {[
                      { name: "Class 10-A", progress: 85, students: 45 },
                      { name: "Class 10-B", progress: 72, students: 42 },
                      { name: "Class 9-A", progress: 78, students: 48 },
                      { name: "Class 11-Science", progress: 88, students: 50 },
                    ].map((cls) => (
                      <div key={cls.name}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold text-secondary-700">{cls.name}</span>
                          <span className="text-secondary-500">{cls.progress}% • {cls.students} students</span>
                        </div>
                        <div className="h-2.5 bg-secondary-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" 
                            style={{ width: `${cls.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-secondary-600">
              Choose the plan that fits your institution's needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary to-purple-600 text-white shadow-xl shadow-primary-500/30 scale-105"
                    : "bg-white border-2 border-secondary-100 shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-green-500 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                    <Zap className="w-4 h-4" /> Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-heading font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-secondary-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-secondary-900"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-white/70" : "text-secondary-500"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.highlighted ? "text-white/70" : "text-secondary-500"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${plan.highlighted ? "text-white" : "text-green-500"}`} />
                      <span className={plan.highlighted ? "text-white/90" : "text-secondary-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3.5 text-center rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-secondary-100"
                      : "bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary-500/25"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join 500+ institutions already transforming education with EduPro. Start your free trial today.
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
