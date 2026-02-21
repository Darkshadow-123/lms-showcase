"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Heart
} from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Foundation",
    description: "EduPro was founded with a mission to transform education through technology",
    completed: true,
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Launched AI-powered learning engine with personalized learning paths",
    completed: true,
  },
  {
    year: "2026",
    title: "Smartboard Launch",
    description: "Introduced interactive smartboard solutions for classrooms",
    completed: true,
  },
  {
    year: "2027",
    title: "Global Expansion",
    description: "Plans to expand to 50+ countries with multi-language support",
    completed: false,
  },
];

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Former IIT professor with 20+ years in EdTech",
    image: "RK",
    color: "from-primary to-purple-500",
  },
  {
    name: "Priya Sharma",
    role: "Chief Product Officer",
    bio: "Ex-Teachmint, 15 years in product management",
    image: "PS",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Amit Singh",
    role: "Head of AI",
    bio: "PhD in Machine Learning from Stanford",
    image: "AS",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Sneha Patel",
    role: "Head of Education",
    bio: "Former school principal, curriculum expert",
    image: "SP",
    color: "from-rose-500 to-orange-500",
  },
];

const stats = [
  { value: "2024", label: "Founded", icon: Calendar },
  { value: "500+", label: "Partner Schools", icon: Globe },
  { value: "2M+", label: "Students Impacted", icon: Users },
  { value: "50+", label: "Team Members", icon: Award },
];

export default function AboutPage() {
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 font-semibold text-sm mb-6 border border-purple-500/20"
            >
              <Heart className="w-4 h-4" />
              About EduPro
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
              Empowering Education Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-500">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
              We believe that every student deserves access to quality education. 
              Our mission is to make learning more personalized, engaging, and effective through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
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
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-white/80" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-primary/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-4">
                Our Mission
              </h2>
              <p className="text-secondary-600 leading-relaxed text-lg">
                To democratize quality education by providing schools, colleges, and coaching 
                institutes with cutting-edge AI-powered tools that enhance learning outcomes, 
                streamline operations, and empower educators to focus on what they do best - teaching.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-4">
                Our Vision
              </h2>
              <p className="text-secondary-600 leading-relaxed text-lg">
                To become the global leader in educational technology, creating a world where 
                every student has access to personalized learning experiences that unlock their 
                full potential, regardless of geographic or socioeconomic barriers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-secondary-600">
              From a startup idea to a leading EdTech platform - here's how we've grown
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {index < timeline.length - 1 && (
                  <div className="absolute left-5 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500" />
                )}
                <div className={`absolute left-0 top-2 w-10 h-10 rounded-2xl flex items-center justify-center ${
                  item.completed 
                    ? "bg-gradient-to-br from-green-500 to-emerald-500" 
                    : "bg-secondary-200"
                }`}>
                  {item.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <Zap className="w-5 h-5 text-secondary-400" />
                  )}
                </div>
                <div className="ml-4">
                  <div className={`text-sm font-bold mb-1 ${
                    item.completed ? "text-green-600" : "text-secondary-400"
                  }`}>
                    {item.year}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-secondary-600">
              A passionate group of educators, technologists, and innovators working together to transform education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl font-heading font-bold text-white">
                    {member.image}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold mb-2">{member.role}</div>
                <p className="text-secondary-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Student-Centric",
                description: "Every decision we make is guided by what's best for students",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from product to service",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "We continuously innovate to stay ahead and deliver the best solutions",
                color: "from-orange-500 to-red-500",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">{value.description}</p>
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
              Join Us in Transforming Education
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Whether you're a school looking to modernize or an educator seeking better tools, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white text-primary hover:bg-secondary-100 shadow-lg transition-all hover:-translate-y-1"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
