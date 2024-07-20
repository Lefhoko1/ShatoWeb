"use client";

import ServiceSection from "@/components/OurServicesSection";
import ContactUs from "@/components/contactus";
import AboutSection from "@/components/aboutus";
import FooterWithSocialLinks from "@/components/footer";
import PracticeAreas from "@/components/OurServicesSection";
import OurServicesTitle from "@/components/ourservicesTitle";
import LogosSection1 from "@/components/LogosSection1";
import { Divider } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/bookApp";

const Home: React.FC = () => {
  const scrollToNextSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full">
      <motion.div
        id="logo-section1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-full flex flex-col items-center justify-center"
      >
        <LogosSection1 scrollToNextSection={scrollToNextSection} />
      </motion.div>

      <motion.div
        id="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-green-500"
      >
        <AboutSection />
        <ConsultationForm/>
      </motion.div>

      <Divider orientation="horizontal" className="bg-purple-300" />
      <motion.div
        id="services-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OurServicesTitle />
       
        <PracticeAreas />
      </motion.div>

      <Divider orientation="horizontal" className="bg-purple-300" />
      <motion.div
        id="contact-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactUs />
      </motion.div>

      <FooterWithSocialLinks />
    </section>
  );
};

export default Home;
