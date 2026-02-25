import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Smartboard", href: "/smartboard" },
    { label: "AI Features", href: "/ai-features" },
    { label: "Pricing", href: "/features" },
    { label: "Demo", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Blog", href: "/about" },
    { label: "Press", href: "/about" },
  ],
  resources: [
    { label: "Documentation", href: "/features" },
    { label: "Help Center", href: "/contact" },
    { label: "Community", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
  // legal: [
  //   { label: "Privacy Policy", href: "/contact" },
  //   { label: "Terms of Service", href: "/contact" },
  //   { label: "Cookie Policy", href: "/contact" },
  //   { label: "Security", href: "/contact" },
  // ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-xl text-white">
                Verity<span className="text-primary-light">LMS</span>
              </span>
            </Link>
            <p className="text-secondary-400 mb-6 max-w-sm">
              Transforming education with AI-powered learning management solutions. 
              Empowering schools, colleges, and coaching institutes with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-light" />
                <span>+91 9330241335</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-light" />
                <span>rustin@junkysolution.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h4 className="font-heading font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-500">
            © {new Date().getFullYear()} Verity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <social.icon className="w-4 h-4 text-secondary-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
