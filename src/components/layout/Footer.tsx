"use client";

import { CLINIC } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2C8 2 4 6 4 10c0 3 1.5 5.5 4 7l1 5h6l1-5c2.5-1.5 4-4 4-7 0-4-4-8-8-8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-display)]">
                {CLINIC.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {CLINIC.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { href: CLINIC.socialLinks.instagram, label: "Instagram", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
                { href: CLINIC.socialLinks.facebook, label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { href: CLINIC.socialLinks.twitter, label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { href: CLINIC.socialLinks.youtube, label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Dr. Mehta", href: "#doctor" },
                { label: "Our Services", href: "#specialties" },
                { label: "Patient Results", href: "#success-stories" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Clinic Gallery", href: "#gallery" },
                { label: "Book Appointment", href: "#booking" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Dental Implants",
                "Root Canal Treatment",
                "Braces & Orthodontics",
                "Invisalign",
                "Smile Makeover",
                "Teeth Whitening",
                "Pediatric Dentistry",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#specialties"
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-slate-400 text-sm">{CLINIC.address}</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  {CLINIC.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${CLINIC.email}`} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  {CLINIC.email}
                </a>
              </div>

              {/* Working Hours */}
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-white mb-2">Working Hours</h4>
                <div className="space-y-1">
                  {CLINIC.workingHours.map((wh) => (
                    <div key={wh.day} className="flex justify-between text-sm text-slate-400">
                      <span>{wh.day}</span>
                      <span>{wh.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src={CLINIC.googleMapsEmbed}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} {CLINIC.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
