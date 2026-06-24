"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import StarRating from "@/components/ui/StarRating";
import SectionCTA from "@/components/ui/SectionCTA";

const avatarColors = [
  "from-primary-400 to-secondary-400",
  "from-secondary-400 to-primary-400",
  "from-primary-500 to-primary-300",
  "from-secondary-500 to-primary-400",
  "from-primary-300 to-secondary-500",
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Patient Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] mt-3 mb-4">
            What Our Patients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real reviews from real patients. Their smiles speak for themselves.
          </p>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-2 bg-white border border-border-light rounded-full px-4 py-2 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm font-semibold">4.9</span>
              <StarRating rating={4.9} size="sm" />
            </div>
            <div className="flex items-center gap-2 bg-white border border-border-light rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-text-secondary">500+ Reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-hover bg-white rounded-2xl border border-border-light p-6"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar with initials */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-bold">{getInitials(testimonial.name)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary text-sm">{testimonial.name}</h4>
                  <div className="flex items-center gap-2">
                    <StarRating rating={testimonial.rating} size="sm" />
                    <span className="text-xs text-text-tertiary">{testimonial.date}</span>
                  </div>
                </div>
                {/* Google icon */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>

              {/* Treatment badge */}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 mb-3">
                {testimonial.treatment}
              </span>

              {/* Review */}
              <p className="text-sm text-text-secondary leading-relaxed">
                &ldquo;{testimonial.review}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 sm:p-12 text-center border border-primary-100"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-primary-600 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-2">
            Watch Patient Testimonials
          </h3>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Hear directly from our patients about their experience at DentCare. Coming soon to our YouTube channel.
          </p>
        </motion.div>

        <SectionCTA subtitle="Join thousands of happy patients. Book your visit today." />
      </div>
    </section>
  );
}
