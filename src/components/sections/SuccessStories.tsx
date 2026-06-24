"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionCTA from "@/components/ui/SectionCTA";
import { SUCCESS_STORIES } from "@/lib/constants";

function BeforeAfterCard({ story, index }: { story: typeof SUCCESS_STORIES[number]; index: number }) {
  const [position, setPosition] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-white rounded-2xl border border-border-light overflow-hidden card-hover"
    >
      {/* Before/After Visual */}
      <div className="relative h-64 overflow-hidden cursor-ew-resize select-none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPosition(((e.clientX - rect.left) / rect.width) * 100);
        }}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPosition(((e.touches[0].clientX - rect.left) / rect.width) * 100);
        }}
      >
        {/* After side (full background) */}
        <div className="absolute inset-0">
          <Image
            src={story.afterImage}
            alt={`${story.title} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Before side - clips from left */}
        <div className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={story.beforeImage}
            alt={`${story.title} - Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3L2 8L5 13" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 3L14 8L11 13" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/50 text-white px-2.5 py-0.5 rounded-full text-xs font-medium z-20">Before</div>
        <div className="absolute top-3 right-3 bg-black/50 text-white px-2.5 py-0.5 rounded-full text-xs font-medium z-20">After</div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-1">
          {story.title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
            {story.treatment}
          </span>
          <span className="text-xs text-text-tertiary">• {story.duration}</span>
        </div>
        <p className="text-sm text-text-secondary">{story.description}</p>
      </div>
    </motion.div>
  );
}

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] mt-3 mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See the transformations that changed our patients&apos; lives. Drag the slider to compare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story, index) => (
            <BeforeAfterCard key={story.id} story={story} index={index} />
          ))}
        </div>

        <SectionCTA subtitle="Want results like these? Start your transformation today." />
      </div>
    </section>
  );
}
