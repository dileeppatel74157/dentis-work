"use client";

import { motion } from "framer-motion";
import { DOCTOR } from "@/lib/constants";
import SectionCTA from "@/components/ui/SectionCTA";

const expertiseIcons: Record<string, React.ReactNode> = {
  implant: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M12 10v2M12 16v6M8 6h8M9 10h6M10 14h4M10 18h4" strokeLinecap="round" />
    </svg>
  ),
  cosmetic: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c-4.97 0-9 3.58-9 8 0 2.1.84 4.02 2.22 5.5L4 22l3.5-1.5C9.04 21.46 10.48 22 12 22c4.97 0 9-3.58 9-8s-4.03-9-9-11z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  rootcanal: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8 2 5 5 5 9c0 3 2 5 3 7l1 6h6l1-6c1-2 3-4 3-7 0-4-3-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 12v4M14 12v4" strokeLinecap="round" />
    </svg>
  ),
  ortho: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  whitening: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pediatric: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="5" />
      <path d="M3 21c0-4.97 4.03-9 9-9s9 4.03 9 9" strokeLinecap="round" />
      <path d="M10 7.5c.5-.5 1.5-.5 2 0" strokeLinecap="round" />
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Meet Your Doctor</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] mt-3 mb-4">
            Expertise You Can <span className="gradient-text">Trust</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Backed by world-class training and a passion for perfection.
          </p>
        </motion.div>

        {/* Doctor Card */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl rotate-3 scale-[1.02]" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={DOCTOR.image}
                  alt={DOCTOR.name}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-2">
              {DOCTOR.name}
            </h3>
            <p className="text-primary-600 font-medium mb-4">{DOCTOR.title}</p>
            <p className="text-text-secondary leading-relaxed mb-8">{DOCTOR.shortBio}</p>

            {/* Qualifications */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Education & Training</h4>
              <div className="space-y-3">
                {DOCTOR.qualifications.map((q) => (
                  <div key={q.degree} className="flex items-start gap-3 p-3 bg-primary-50/50 rounded-xl">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-text-primary">{q.degree}</p>
                      <p className="text-xs text-text-secondary">{q.institution} • {q.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Awards & Recognition</h4>
              <div className="space-y-2">
                {DOCTOR.awards.map((award) => (
                  <div key={award} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-sm text-text-secondary">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Professional Memberships</h4>
              <div className="flex flex-wrap gap-2">
                {DOCTOR.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center px-3 py-1.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-center mb-10">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {DOCTOR.expertise.map((exp) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="card-hover bg-white border border-border-light rounded-2xl p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:from-primary-100 group-hover:to-secondary-100 transition-all duration-300">
                  {expertiseIcons[exp.icon]}
                </div>
                <h4 className="font-semibold text-text-primary font-[family-name:var(--font-display)] mb-1">
                  {exp.title}
                </h4>
                <p className="text-sm text-text-secondary">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <SectionCTA subtitle="Have questions about your treatment? Get a free consultation." />
      </div>
    </section>
  );
}
