// ─── Clinic Information ───────────────────────────────────────────────────────

export const CLINIC = {
  name: "DentCare",
  tagline: "Your Smile, Our Passion",
  description:
    "Premium dental care with cutting-edge technology and compassionate expertise. Experience world-class treatments in a comfortable, modern environment.",
  phone: "+91 98765 43210",
  email: "hello@dentcare.clinic",
  address: "123 Smile Avenue, Indiranagar, Bangalore, Karnataka 560038",
  whatsappNumber: "917489923699",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.64!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1",
  workingHours: [
    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/dentcare",
    facebook: "https://facebook.com/dentcare",
    twitter: "https://x.com/dentcare",
    youtube: "https://youtube.com/@dentcare",
  },
} as const;

// ─── Trust Metrics ────────────────────────────────────────────────────────────

export const TRUST_METRICS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 10000, suffix: "+", label: "Happy Patients" },
  { value: 5000, suffix: "+", label: "Successful Treatments" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
] as const;

// ─── Doctor Profile ───────────────────────────────────────────────────────────

export const DOCTOR = {
  name: "Dr. Arjun Mehta",
  title: "BDS, MDS – Prosthodontics & Implantology",
  shortBio:
    "With over 15 years of clinical excellence, Dr. Arjun Mehta combines advanced expertise with a compassionate approach. Trained at some of India's finest institutions, he specializes in dental implants, cosmetic dentistry, and full-mouth rehabilitation.",
  image: "/images/doctor.jpg",
  qualifications: [
    { degree: "BDS", institution: "Manipal College of Dental Sciences", year: "2008" },
    { degree: "MDS – Prosthodontics", institution: "Rajiv Gandhi University", year: "2012" },
    { degree: "Fellowship in Implantology", institution: "Nobel Biocare Institute, Germany", year: "2015" },
  ],
  certifications: [
    "Dental Council of India – Registered Practitioner",
    "International Congress of Oral Implantologists (ICOI) – Fellow",
    "American Academy of Cosmetic Dentistry – Member",
    "Indian Prosthodontic Society – Life Member",
  ],
  awards: [
    "Best Implantologist – Karnataka Dental Association 2022",
    "Excellence in Cosmetic Dentistry – IDA Awards 2020",
    "Young Dentist of the Year – FAMDENT 2018",
  ],
  expertise: [
    { title: "Dental Implants", icon: "implant", description: "Advanced single & full-arch implant solutions" },
    { title: "Cosmetic Dentistry", icon: "cosmetic", description: "Smile design & aesthetic transformations" },
    { title: "Root Canal", icon: "rootcanal", description: "Pain-free endodontic treatments" },
    { title: "Orthodontics", icon: "ortho", description: "Braces & clear aligner therapy" },
    { title: "Teeth Whitening", icon: "whitening", description: "Professional in-office whitening" },
    { title: "Pediatric Dentistry", icon: "pediatric", description: "Gentle care for young smiles" },
  ],
} as const;

// ─── Trust Pillars ────────────────────────────────────────────────────────────

export const TRUST_PILLARS = [
  {
    title: "Latest Technology",
    description: "State-of-the-art digital X-rays, 3D imaging, and CAD/CAM systems for precise treatments.",
    icon: "technology",
  },
  {
    title: "Pain-Free Procedures",
    description: "Advanced anesthesia techniques and gentle care ensure a comfortable experience every time.",
    icon: "painfree",
  },
  {
    title: "Personalized Care",
    description: "Every treatment plan is tailored to your unique needs, goals, and comfort level.",
    icon: "personalized",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. Clear treatment plans with upfront pricing and flexible payment options.",
    icon: "pricing",
  },
  {
    title: "Experienced Specialists",
    description: "Our team of certified specialists brings decades of combined expertise to every procedure.",
    icon: "specialists",
  },
  {
    title: "Emergency Support",
    description: "Dental emergencies don't wait, and neither do we. Same-day appointments available.",
    icon: "emergency",
  },
] as const;

// ─── Services / Specialties ───────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent, natural-looking tooth replacement solutions.",
    description:
      "Our advanced implant procedures use premium titanium fixtures and 3D-guided surgery for predictable, long-lasting results. From single tooth replacement to full-arch rehabilitation.",
    benefits: ["Looks & feels like natural teeth", "Preserves jawbone", "Lifetime durability", "No adhesives needed"],
    recovery: "3-6 months for full osseointegration. Most patients return to normal activities within 24-48 hours.",
    image: "/images/services/implants.jpg",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    shortDescription: "Save your natural tooth with painless endodontic therapy.",
    description:
      "Using rotary endodontic technology and advanced apex locators, we perform virtually painless root canal treatments that preserve your natural tooth structure.",
    benefits: ["Virtually painless", "Saves natural tooth", "Single sitting available", "High success rate"],
    recovery: "Most patients feel normal within 1-2 days. A crown is placed 1-2 weeks after treatment.",
    image: "/images/services/rootcanal.jpg",
  },
  {
    id: "braces",
    title: "Braces & Orthodontics",
    shortDescription: "Achieve perfectly aligned teeth with modern orthodontics.",
    description:
      "From traditional metal braces to ceramic and self-ligating options, we offer comprehensive orthodontic solutions for all ages.",
    benefits: ["Improved bite alignment", "Better oral health", "Enhanced confidence", "Multiple options available"],
    recovery: "Treatment duration: 12-24 months. Monthly adjustments with minimal discomfort.",
    image: "/images/services/braces.jpg",
  },
  {
    id: "invisalign",
    title: "Invisalign",
    shortDescription: "Straighten teeth invisibly with clear aligner technology.",
    description:
      "Custom-made clear aligners that are virtually invisible. Eat what you want, remove when needed, and achieve a perfect smile discreetly.",
    benefits: ["Nearly invisible", "Removable for eating", "Comfortable fit", "Predictable results with 3D planning"],
    recovery: "Treatment duration: 6-18 months. Aligners changed every 1-2 weeks.",
    image: "/images/services/invisalign.jpg",
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    shortDescription: "Complete smile transformation with cosmetic dentistry.",
    description:
      "A comprehensive approach combining veneers, bonding, whitening, and gum contouring to create your dream smile. Digitally designed before treatment begins.",
    benefits: ["Complete transformation", "Digital smile preview", "Natural-looking results", "Boosted confidence"],
    recovery: "2-4 appointments over 2-3 weeks. Minimal downtime between sessions.",
    image: "/images/services/smile-makeover.jpg",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Professional whitening for a brilliantly bright smile.",
    description:
      "In-office Zoom whitening delivers up to 8 shades brighter in just one session. Safe, fast, and with long-lasting results.",
    benefits: ["Up to 8 shades brighter", "Single session", "Safe for enamel", "Long-lasting results"],
    recovery: "Immediate results. Avoid staining foods for 48 hours post-treatment.",
    image: "/images/services/whitening.jpg",
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    shortDescription: "Gentle, painless tooth removal when necessary.",
    description:
      "Using atraumatic extraction techniques and advanced anesthesia, we ensure the most comfortable experience. Wisdom tooth removal and surgical extractions performed with precision.",
    benefits: ["Minimally invasive", "Quick recovery", "Pain management included", "Replacement options discussed"],
    recovery: "Most patients heal within 3-5 days. Post-op care instructions provided.",
    image: "/images/services/extraction.jpg",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription: "Gentle, fun dental care designed for children.",
    description:
      "A child-friendly environment with specially trained staff. From first checkups to preventive sealants, we make dental visits enjoyable for your little ones.",
    benefits: ["Child-friendly environment", "Preventive focus", "Gentle approach", "Education & habit building"],
    recovery: "Most treatments are quick with no downtime. Regular 6-month checkups recommended.",
    image: "/images/services/pediatric.jpg",
  },
  {
    id: "gum-treatment",
    title: "Gum Treatment",
    shortDescription: "Advanced periodontal care for healthy gums.",
    description:
      "From deep cleaning (scaling & root planing) to laser gum therapy, we treat all stages of gum disease with modern, minimally invasive techniques.",
    benefits: ["Prevents tooth loss", "Laser therapy available", "Minimally invasive", "Improves overall health"],
    recovery: "1-2 weeks for full healing. Follow-up appointments to monitor progress.",
    image: "/images/services/gum-treatment.jpg",
  },
] as const;

// ─── Success Stories (Before/After) ───────────────────────────────────────────

export const SUCCESS_STORIES = [
  {
    id: 1,
    title: "Complete Smile Transformation",
    treatment: "Smile Makeover with Veneers",
    description: "A full smile redesign using 8 porcelain veneers. The patient gained confidence with a natural, radiant smile.",
    beforeImage: "/images/stories/before-1.png",
    afterImage: "/images/stories/after-1.png",
    duration: "3 weeks",
  },
  {
    id: 2,
    title: "Full Arch Implant Rehabilitation",
    treatment: "All-on-4 Dental Implants",
    description: "Complete upper arch restoration using the All-on-4 technique. Fixed teeth in just one day.",
    beforeImage: "/images/stories/before-2.png",
    afterImage: "/images/stories/after-2.png",
    duration: "1 day (immediate loading)",
  },
  {
    id: 3,
    title: "Teeth Alignment Correction",
    treatment: "Invisalign Clear Aligners",
    description: "Corrected crowding and spacing issues with 14 months of Invisalign treatment. No visible braces needed.",
    beforeImage: "/images/stories/before-3.png",
    afterImage: "/images/stories/after-3.png",
    duration: "14 months",
  },
] as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "/images/testimonials/patient-1.jpg",
    rating: 5,
    treatment: "Dental Implants",
    review:
      "I was terrified of getting implants, but Dr. Mehta made the entire process completely painless. The results are incredible — my new teeth look and feel completely natural. I can eat anything again!",
    date: "2 months ago",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    image: "/images/testimonials/patient-2.jpg",
    rating: 5,
    treatment: "Root Canal",
    review:
      "I had been putting off my root canal for months out of fear. Dr. Mehta completed it in a single sitting, and I felt absolutely nothing. The clinic is spotlessly clean and the staff is incredibly warm.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Ananya Desai",
    image: "/images/testimonials/patient-3.jpg",
    rating: 5,
    treatment: "Invisalign",
    review:
      "My Invisalign journey at DentCare was perfect. The digital planning showed me exactly what my smile would look like before I even started. 14 months later, I have the smile I always dreamed of.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Mohammed Irfan",
    image: "/images/testimonials/patient-4.jpg",
    rating: 5,
    treatment: "Smile Makeover",
    review:
      "The smile makeover completely changed my life. From the consultation to the final result, every step was professional and caring. I couldn't stop smiling after the veneers were placed!",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Sneha Rao",
    image: "/images/testimonials/patient-5.jpg",
    rating: 5,
    treatment: "Teeth Whitening",
    review:
      "Just one session of Zoom whitening and my teeth went 6 shades brighter! The results were instant and the staff made me feel so comfortable throughout. Highly recommend DentCare.",
    date: "5 days ago",
  },
] as const;

// ─── Satisfaction Metrics ─────────────────────────────────────────────────────

export const SATISFACTION_METRICS = [
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "heart" },
  { value: 4.9, suffix: "", label: "Average Rating", icon: "star", decimals: 1 },
  { value: 95, suffix: "%", label: "Referral Rate", icon: "users" },
  { value: 10000, suffix: "+", label: "Patients Served", icon: "check" },
] as const;

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_DATA = [
  {
    question: "Is the treatment painful?",
    answer:
      "Not at all. We use advanced anesthesia techniques and the latest technology to ensure virtually pain-free treatments. Most of our patients are surprised at how comfortable the experience is. We also offer sedation options for anxious patients.",
  },
  {
    question: "Do you offer emergency appointments?",
    answer:
      "Yes, absolutely. We understand dental emergencies can't wait. We offer same-day emergency appointments and extended hours to accommodate urgent cases. Simply call us or message on WhatsApp for immediate assistance.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "Treatment duration varies depending on the procedure. Simple treatments like whitening take about an hour, while comprehensive treatments like implants may span a few months. During your consultation, Dr. Mehta will provide a detailed timeline for your specific treatment plan.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Our team will help you understand your coverage and maximize your benefits. We also offer cashless insurance processing for select providers.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept cash, all major credit/debit cards, UPI, net banking, and offer EMI options for treatments above ₹10,000. We believe cost should never be a barrier to quality dental care.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend a dental checkup and cleaning every 6 months. Regular visits help detect problems early, maintain oral health, and keep your smile looking its best. We'll send you friendly reminders when your next visit is due.",
  },
  {
    question: "Is teeth whitening safe for my enamel?",
    answer:
      "Yes, professional in-office whitening is completely safe for your enamel when performed by qualified dentists. We use FDA-approved products and carefully calibrated procedures to ensure both safety and effectiveness.",
  },
] as const;

// ─── Gallery Categories ───────────────────────────────────────────────────────

export const GALLERY_IMAGES = [
  { src: "/images/gallery/reception.jpg", alt: "Modern reception area", category: "Reception" },
  { src: "/images/gallery/treatment-room-1.jpg", alt: "Advanced treatment room", category: "Treatment Rooms" },
  { src: "/images/gallery/treatment-room-2.jpg", alt: "Private treatment suite", category: "Treatment Rooms" },
  { src: "/images/gallery/equipment.jpg", alt: "Latest dental equipment", category: "Equipment" },
  { src: "/images/gallery/sterilization.jpg", alt: "Sterilization area", category: "Hygiene" },
  { src: "/images/gallery/team.jpg", alt: "Our dental team", category: "Our Team" },
] as const;

// ─── WhatsApp Helper ──────────────────────────────────────────────────────────

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${CLINIC.whatsappNumber}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getBookingWhatsAppLink(data: {
  name: string;
  phone: string;
  treatment: string;
  date: string;
}): string {
  const message = `Hello,\nI would like to book an appointment.\n\nName: ${data.name}\nPhone: ${data.phone}\nTreatment: ${data.treatment}\nPreferred Date: ${data.date}\n\nPlease contact me. Thank you.`;
  return getWhatsAppLink(message);
}
