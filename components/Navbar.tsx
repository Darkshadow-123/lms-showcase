"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/smartboard", label: "Smartboard" },
  { href: "/ai-features", label: "AI Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass shadow-2xl shadow-primary-500/10 py-2 bg-white/90"
          : "bg-white/80 backdrop-blur-xl py-3 border-b border-secondary-100"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
{/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-18 h-18 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-gray-200 group-hover:shadow-gray-300 transition-all border border-gray-100"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Image
                  src="/images/Logo.png"
                  alt="Verity Logo"
                  width={32}
                  height={32}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-heading font-bold text-2xl text-secondary-900">
                Ve
              </span>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                rity
              </span>
            </motion.div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-5 py-2.5 rounded-xl font-medium transition-all relative group overflow-hidden",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-secondary-600 hover:text-primary"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Hover Background */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className={cn(
                      "absolute inset-0 rounded-xl transition-colors",
                      isActive(link.href) ? "bg-primary/10" : "bg-secondary-100"
                    )}
                  />
                  
                  {/* Active Indicator */}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Animated Underline on Hover */}
                  {!isActive(link.href) && (
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "60%" }}
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="group px-6 py-3 rounded-xl font-semibold text-secondary-600 hover:text-primary hover:bg-secondary-50 transition-all relative overflow-hidden"
              >
                <span className="relative z-10">Sign In</span>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-secondary-100"
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="group px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-0.5 transition-all flex items-center gap-2 relative overflow-hidden"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.span>
                <span className="relative z-10">Book a Demo</span>
                
                {/* Shine Effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "200%", opacity: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-3 rounded-xl hover:bg-secondary-100 transition-colors"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-secondary-900" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-900" />
              )}
            </motion.div>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden glass border-t border-secondary-100 overflow-hidden"
          >
            <motion.div 
              className="container mx-auto px-4 py-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.03 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-4 px-5 rounded-xl font-medium transition-all relative",
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-secondary-700 hover:bg-secondary-50"
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="mobile-navbar-indicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-primary"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 space-y-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 text-center rounded-xl font-semibold text-secondary-700 hover:bg-secondary-50 transition-colors border border-secondary-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 text-center rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white transition-colors"
                >
                  Book a Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
