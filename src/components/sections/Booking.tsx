"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SERVICES, CLINIC, getBookingWhatsAppLink } from "@/lib/constants";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    date: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Please enter a valid phone number";
    if (!form.treatment) newErrors.treatment = "Please select a treatment";
    if (!form.date) newErrors.date = "Please select a preferred date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const url = getBookingWhatsAppLink(form);
    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Book Your Visit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] mt-3 mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Smile?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Fill in the form and we&apos;ll connect with you on WhatsApp instantly.
              It takes less than 30 seconds.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                { icon: "⚡", text: "Instant WhatsApp confirmation" },
                { icon: "🔒", text: "Your information is secure & private" },
                { icon: "📞", text: `Or call us directly: ${CLINIC.phone}` },
                { icon: "🕐", text: "Same-day appointments available" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-text-secondary text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-primary-600/5 border border-border-light"
            >
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-6">
                Book an Appointment
              </h3>

              {/* Name */}
              <div className="mb-5">
                <label htmlFor="booking-name" className="block text-sm font-medium text-text-primary mb-1.5">
                  Full Name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? "border-red-300 bg-red-50/50" : "border-border bg-white"
                  } focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label htmlFor="booking-phone" className="block text-sm font-medium text-text-primary mb-1.5">
                  Mobile Number
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone ? "border-red-300 bg-red-50/50" : "border-border bg-white"
                  } focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Treatment */}
              <div className="mb-5">
                <label htmlFor="booking-treatment" className="block text-sm font-medium text-text-primary mb-1.5">
                  Treatment Needed
                </label>
                <select
                  id="booking-treatment"
                  value={form.treatment}
                  onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.treatment ? "border-red-300 bg-red-50/50" : "border-border bg-white"
                  } focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm appearance-none cursor-pointer`}
                >
                  <option value="">Select a treatment</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Checkup">General Checkup</option>
                  <option value="Other">Other</option>
                </select>
                {errors.treatment && <p className="mt-1 text-xs text-red-500">{errors.treatment}</p>}
              </div>

              {/* Date */}
              <div className="mb-8">
                <label htmlFor="booking-date" className="block text-sm font-medium text-text-primary mb-1.5">
                  Preferred Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.date ? "border-red-300 bg-red-50/50" : "border-border bg-white"
                  } focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm cursor-pointer`}
                />
                {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
              </div>

              {/* Submit */}
              <Button
                variant="whatsapp"
                size="lg"
                type="submit"
                className="w-full"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                }
              >
                Book via WhatsApp
              </Button>

              <p className="text-xs text-text-tertiary text-center mt-4">
                By booking, you agree to our privacy policy. We&apos;ll only contact you regarding your appointment.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
