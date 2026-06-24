"use client";

import { motion } from "framer-motion";
import { TRUST_PILLARS } from "@/lib/constants";
import SectionCTA from "@/components/ui/SectionCTA";

const icons: Record<string, React.ReactNode> = {
  technology: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  painfree: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8v4l2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  personalized: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
    </svg>
  ),
  pricing: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  specialists: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 15l-2 5 2-2 2 2-2-5z" />
      <circle cx="12" cy="9" r="6" />
      <path d="M12 3v2M6.3 5.3l1.4 1.4M3 11h2M6.3 12.7l1.4-1.4" strokeLinecap="round" />
    </svg>
  ),
  emergency: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyTrustUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose DentCare
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] mt-3 mb-4">
            Why Patients <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We go above and beyond to make your dental experience exceptional.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TRUST_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="card-hover bg-white rounded-2xl p-8 border border-border-light group"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:from-primary-100 group-hover:to-secondary-100 group-hover:scale-110 transition-all duration-300">
                {icons[pillar.icon]}
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-3 text-text-primary">
                {pillar.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <SectionCTA subtitle="Experience the DentCare difference. Book a consultation today." />
      </div>
    </section>
  );
}
