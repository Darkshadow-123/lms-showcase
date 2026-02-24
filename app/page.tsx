"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  Brain, 
  BarChart3, 
  Video, 
  Users, 
  BookMarked,
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  ChevronRight,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "10+", label: "Schools" },
  { value: "200+", label: "Students" },
  { value: "50+", label: "Teachers" },
  { value: "10+", label: "Classes" },
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths with adaptive algorithms that understand each student's unique needs.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Smart Classrooms",
    description: "Transform traditional classrooms into interactive digital learning environments.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights into student performance, attendance, and engagement metrics.",
    color: "from-green-500 to-emerald-500",
  },
  // {
  //   icon: Video,
  //   title: "Live Classes",
  //   description: "Seamless virtual classroom experience with screen sharing, whiteboard, and breakout rooms.",
  //   color: "from-orange-500 to-red-500",
  // },
  {
    icon: Users,
    title: "Attendance Tracking",
    description: "Automated attendance management with facial recognition and geofencing options.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BookMarked,
    title: "Content Management",
    description: "Comprehensive digital content library with multimedia support and version control.",
    color: "from-cyan-500 to-blue-500",
  },
];

const testimonials = [
  {
    quote: "Verity has transformed how our teachers deliver lessons. The AI-powered analytics help us identify struggling students early and provide targeted support.",
    author: "Dr. Sarah Mitchell",
    role: "Principal",
    institution: "Delhi International School",
    rating: 5,
  },
  {
    quote: "The smartboard integration is phenomenal. Our classrooms are now more engaging than ever, and students are more participative in lessons.",
    author: "Mr. Rahul Sharma",
    role: "Director",
    institution: "National Public School",
    rating: 5,
  },
  {
    quote: "Parent communication has never been easier. Real-time updates on homework, attendance, and performance keep everyone informed.",
    author: "Mrs. Priya Patel",
    role: "Administrator",
    institution: "Ahmedabad Global School",
    rating: 5,
  },
];

const trustedBy = [
  "Arunachal pradesh",
"Assam",
"Bihar",
"Manipur", 
"Mizoram",
"Meghalaya",
"Nagaland",
"Sikkim",
"Tripura",
"West Bengal"
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232563EB%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[120px] opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary-600 font-semibold text-sm mb-6 border border-primary/20"
              >
                
                Trusted in  5+ States
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 leading-[1.1] mb-6">
                Transform Education with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-500">
                  AI-Powered LMS
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-xl leading-relaxed">
                Complete school management solution with smart classrooms, advanced analytics, 
                and intelligent learning tools designed for modern educational institutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white text-secondary-700 border-2 border-secondary-200 hover:border-primary hover:text-primary transition-all"
                >
                  <Play className="w-5 h-5" />
                  Watch Video
                </Link>
              </div>
              
              {/* <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-secondary-600 font-medium">No Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-secondary-600 font-medium">24/7 Support</span>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-primary-500/10 border border-secondary-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-purple-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    Verity Dashboard
                  </div>
                  <div className="w-16" />
                </div>
                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-5">
                      <div className="text-3xl font-bold text-primary">2,547</div>
                      <div className="text-sm text-secondary-500 font-medium">Active Students</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5">
                      <div className="text-3xl font-bold text-green-600">94%</div>
                      <div className="text-sm text-secondary-500 font-medium">Attendance</div>
                    </div>
                  </div>
                  <div className="bg-secondary-50 rounded-2xl p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-secondary-700">Class Performance</span>
                      <span className="text-sm text-green-600 font-semibold">+12%</span>
                    </div>
                    <div className="h-3 bg-secondary-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                      <Brain className="w-7 h-7 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-secondary-700">AI Insights</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                      <Video className="w-7 h-7 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-secondary-700">Live Classes</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                      <BarChart3 className="w-7 h-7 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-secondary-700">Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-28 h-28 bg-white rounded-2xl shadow-2xl p-4 border border-secondary-100"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-2xl p-3 border border-secondary-100"
              >
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white border-y border-secondary-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-center text-secondary-500 font-medium mb-8">
            Trusted by leading educational institutions across many States
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {trustedBy.map((school) => (
              <div key={school} className="text-lg font-heading font-bold text-secondary-400 hover:text-primary transition-colors cursor-default">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
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
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Transform Education
              </span>
            </h2>
            <p className="text-lg text-secondary-600">
              Comprehensive tools designed to streamline operations, enhance learning outcomes, 
              and empower educators with data-driven insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-secondary-100/50 hover:shadow-xl hover:shadow-primary-500/10 border border-secondary-100 transition-all"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br", feature.color)}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
                Powerful Dashboard for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Every Stakeholder
                </span>
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Get comprehensive insights with our intuitive dashboard. Monitor student progress, manage courses, and generate reports - all from one place.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time student performance tracking",
                  "AI-powered learning recommendations",
                  "Seamless integration with smartboards and virtual classrooms",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-primary-500/10 border border-secondary-100 overflow-hidden">
                <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-100">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="text-sm text-secondary-500 ml-2">Admin Dashboard</span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Total Students", value: "2,547", color: "from-primary to-purple-500" },
                      { label: "Active Courses", value: "156", color: "from-purple-500 to-pink-500" },
                      { label: "Teachers", value: "124", color: "from-green-500 to-emerald-500" },
                    ].map((item) => (
                      <div key={item.label} className="bg-secondary-50 rounded-2xl p-4 text-center">
                        <div className={cn("w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-gradient-to-br", item.color)}>
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-secondary-900">{item.value}</div>
                        <div className="text-xs text-secondary-500 font-medium">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary-50 rounded-2xl p-5">
                    <h4 className="text-sm font-semibold text-secondary-700 mb-4">Performance Overview</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Mathematics", progress: 85 },
                        { name: "Science", progress: 72 },
                        { name: "English", progress: 78 },
                        { name: "History", progress: 65 },
                      ].map((subject) => (
                        <div key={subject.name}>
                          <div className="flex justify-between text-sm mb-1.5">
                            <span className="text-secondary-600 font-medium">{subject.name}</span>
                            <span className="font-semibold text-secondary-900">{subject.progress}%</span>
                          </div>
                          <div className="h-2.5 bg-secondary-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" 
                              style={{ width: `${subject.progress}%` }}
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
        </div>
      </section>

      {/* AI Features Teaser */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-secondary-900 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Experience the Power of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-lg text-secondary-300">
              Our AI engine analyzes student performance, identifies learning gaps, and 
              provides personalized recommendations to improve outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Grading",
                description: "AI-powered assessment grading with instant feedback",
                icon: Brain,
              },
              {
                title: "Learning Paths",
                description: "Personalized curriculum based on each student's pace",
                icon: BookMarked,
              },
              {
                title: "Predictive Analytics",
                description: "Identify at-risk students before they fall behind",
                icon: BarChart3,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark rounded-2xl p-8 hover:bg-secondary-800/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/ai-features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white text-secondary-900 hover:bg-secondary-100 transition-all hover:-translate-y-1"
            >
              Explore AI Features
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Loved by Educators{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Worldwide
              </span>
            </h2>
            <p className="text-lg text-secondary-600">
              See what school administrators, teachers, and parents are saying about Verity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-secondary-100/50 border border-secondary-100"
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-lg">
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
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-secondary-600 mb-10 max-w-2xl mx-auto">
              Join 500+ educational institutions already using Verity to deliver 
              world-class education with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-secondary-100 text-secondary-700 hover:bg-secondary-200 transition-all"
              >
                View Pricing
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
