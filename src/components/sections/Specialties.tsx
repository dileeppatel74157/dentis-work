"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, getWhatsAppLink } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionCTA from "@/components/ui/SectionCTA";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Specialties() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="specialties" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] mt-3 mb-4">
            Treatments We <span className="gradient-text">Excel In</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive dental solutions using the latest techniques and technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              layout
              className="card-hover bg-white rounded-2xl border border-border-light overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold font-[family-name:var(--font-display)]">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                <AnimatePresence>
                  {expanded === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary text-sm mb-4">{service.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-text-primary mb-2">Benefits</h4>
                        <ul className="space-y-1.5">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-sm text-text-secondary">
                              <svg className="w-4 h-4 text-primary-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-text-primary mb-1">Recovery</h4>
                        <p className="text-xs text-text-secondary">{service.recovery}</p>
                      </div>

                      <Button
                        variant="whatsapp"
                        size="sm"
                        href={getWhatsAppLink(`Hi, I'm interested in ${service.title}. Can you please provide more information?`)}
                        className="w-full"
                        icon={
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        }
                      >
                        Enquire on WhatsApp
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                  className="mt-3 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {expanded === service.id ? "Show Less" : "Learn More"}
                  <motion.svg
                    animate={{ rotate: expanded === service.id ? 180 : 0 }}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <SectionCTA subtitle="Not sure which treatment is right for you? Let us help you decide." />
      </div>
    </section>
  );
}
