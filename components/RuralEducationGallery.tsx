"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RuralEducationGallery() {
  const images = [
    { 
      title: "Children Learning", 
      desc: "Rural students accessing digital content", 
      src: "https://www.smilefoundationindia.org/wp-content/uploads/2023/04/6-3-e1682411279977.jpg"
    },
    { 
      title: "Community Classroom", 
      desc: "Group learning sessions in villages", 
      src: "https://www.smilefoundationindia.org/wp-content/uploads/2023/04/10-1.jpg"
    },
    { 
      title: "Digital Learning", 
      desc: "Using technology for education in rural areas", 
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    { 
      title: "Teacher Support", 
      desc: "Volunteers guiding students", 
      src: "https://www.smilefoundationindia.org/wp-content/uploads/2023/04/8-1.jpg"
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
            <span>Gallery</span>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">
            Learning in Rural Communities
          </h3>
          <p className="text-secondary-600 max-w-2xl mx-auto text-lg">
            Bringing quality education to the doorsteps of those who need it most
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all"
              >
                <div className="h-48 md:h-56 relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-heading font-semibold text-sm text-white">{image.title}</h4>
                  <p className="text-xs text-white/80">{image.desc}</p>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
        
        </motion.div>
      </div>
    </section>
  );
}
