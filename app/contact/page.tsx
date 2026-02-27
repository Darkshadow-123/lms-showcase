"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Send,
  Sparkles,
  MessageSquare,
  HeadphonesIcon,
  Zap
} from "lucide-react";

const faqs = [
  {
    question: "What is Verity LMS?",
    answer: "Verity is a comprehensive learning management system designed for schools, colleges, and coaching institutes. It combines AI-powered learning tools, smart classroom solutions, and administrative features to transform educational institutions.",
  },

  {
    question: "Can I customize the platform for my institution?",
    answer: "Yes! Our Professional and Enterprise plans include custom branding options, custom integrations, and configurable features to match your institution's specific needs.",
  },
  {
    question: "Is there a limit on the number of users?",
    answer: "The Starter plan supports up to 500 students and 5 teachers. Professional supports up to 2,000 students and 25 teachers. Enterprise plans have unlimited users.",
  },
  {
    question: "Do you offer training and support?",
    answer: "Yes, we provide comprehensive onboarding training for all institutions. Professional and Enterprise plans include priority support with dedicated account managers.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade security with data encryption, regular backups, and compliance with educational data privacy regulations.",
  },
  {
    question: "Can Parents access the Platform?",
    answer: "Yes, our parent portal allows parents to track their child's attendance, homework, grades, and communicate with teachers. A customized report regarding the child performance will be sent via email for regular analysis.",
  }

];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
  });
  const [demoData, setDemoData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    students: "",
  });
  
  const messageFormRef = useRef<HTMLFormElement>(null);
  const demoFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_MESSAGE;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        messageFormRef.current!,
        publicKey
      );
      setSubmitStatus("success");
      messageFormRef.current?.reset();
      setFormData({ name: "", email: "", phone: "", institution: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDemoSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_DEMO;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      alert("Configuration error. Please try again later.");
      setIsDemoSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        demoFormRef.current!,
        publicKey
      );
      alert("Thank you for your interest! Our team will contact you to schedule your demo.");
      demoFormRef.current?.reset();
      setDemoData({ name: "", email: "", phone: "", institution: "", students: "" });
    } catch (error) {
      console.error("EmailJS Demo Error:", error);
      alert("Failed to send request. Please try again later.");
    } finally {
      setIsDemoSubmitting(false);
    }
  };

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
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
              We'd Love to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-500">
                Hear From You
              </span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about Verity? We'd love to hear from you. Send us a message 
              or schedule a demo to see our platform in action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Demo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-6">
                Send us a Message
              </h2>
              <form ref={messageFormRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Email Address *
                    </label>
<input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@school.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Phone Number
                    </label>
<input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Institution Name
                    </label>
<input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Delhi Public School"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Message *
                  </label>
<textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
<button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Demo Request Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">
                    Request a Demo
                  </h2>
                </div>
                <p className="text-white/80 mb-6 text-lg">
                  See Verity in action with a personalized demo tailored to your institution's needs.
                </p>
                <ul className="space-y-3">
                  {[
                    "Free 1-on-1 demonstration",
                    "Q&A with our product experts",
                    "Customized for your needs",
                    "No commitment required",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <form ref={demoFormRef} onSubmit={handleDemoSubmit} className="space-y-6 bg-secondary-50 p-8 rounded-3xl">
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                  Schedule Your Demo
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Full Name *
                    </label>
<input
                      type="text"
                      name="name"
                      required
                      value={demoData.name}
                      onChange={(e) => setDemoData({ ...demoData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Email Address *
                    </label>
<input
                      type="email"
                      name="email"
                      required
                      value={demoData.email}
                      onChange={(e) => setDemoData({ ...demoData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Phone Number *
                    </label>
<input
                      type="tel"
                      name="phone"
                      required
                      value={demoData.phone}
                      onChange={(e) => setDemoData({ ...demoData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Number of Students
                    </label>
<select
                      name="students"
                      value={demoData.students}
                      onChange={(e) => setDemoData({ ...demoData, students: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select range</option>
                      <option value="0-500">0-500</option>
                      <option value="500-2000">500-2,000</option>
                      <option value="2000-5000">2,000-5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Institution Name *
                  </label>
<input
                      type="text"
                      name="institution"
                      required
                      value={demoData.institution}
                    onChange={(e) => setDemoData({ ...demoData, institution: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-100 focus:border-primary focus:outline-none transition-colors bg-white"
                    placeholder="Your school/college name"
                  />
                </div>
<button
                  type="submit"
                  disabled={isDemoSubmitting}
                  className="w-full py-5 rounded-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDemoSubmitting ? "Sending..." : "Schedule Demo"}
                  <Zap className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Other Ways to Reach Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Phone",
                details: " +91 9330241335",
                subtitle: "Mon-Fri, 9AM-7PM",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Mail,
                title: "Email",
                details: "rustin@junkysolution.com",
                subtitle: "We'll respond within 48 hours",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: MapPin,
                title: "Office",
                details: "Bengaluru, Karnataka, India",
                subtitle: "Visit us during business hours",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <div className="text-primary font-semibold mb-1">{item.details}</div>
                <div className="text-secondary-500 text-sm">{item.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
              <p className="text-secondary-500 text-lg">Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600">
              Have questions? We've got answers. If you can't find what you're looking for, 
              feel free to contact us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-secondary-900 pr-4 text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-secondary-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-secondary-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
