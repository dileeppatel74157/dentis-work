"use client";

import Navbar from "@/components/layout/Navbar";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import DoctorProfile from "@/components/sections/DoctorProfile";
import WhyTrustUs from "@/components/sections/WhyTrustUs";
import Specialties from "@/components/sections/Specialties";
import SuccessStories from "@/components/sections/SuccessStories";
import Testimonials from "@/components/sections/Testimonials";
import Satisfaction from "@/components/sections/Satisfaction";
import Gallery from "@/components/sections/Gallery";
import Booking from "@/components/sections/Booking";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DoctorProfile />
        <WhyTrustUs />
        <Specialties />
        <SuccessStories />
        <Testimonials />
        <Satisfaction />
        <Gallery />
        <Booking />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
