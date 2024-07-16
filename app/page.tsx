"use client";
import { title, subtitle } from "@/components/primitives";
import ServiceSection from "@/components/OurServicesSection";
import AskedQuestions from "@/components/frequestltaskedquestions";
import OurTeam from "@/components/ourPeople";
import ContactUs from "@/components/contactus";
import AboutSection from "@/components/aboutus";
import BlogAtAlanding from "@/components/blogatlandingpage";
import FooterWithSocialLinks from "@/components/footer";
import ServiceItems from "@/components/servicesItems";
import OurSer5vicesTile from "@/components/ourservicesTitle";
import OurTeamTitle from "@/components/ourteamTitle";
import FaqTitle from "@/components/faqTitle";
import BlogSection from "@/components/blogsection";
import LogosSection from "@/components/logosSection";
import LogosSection1 from "@/components/LogosSection1";

import { Divider } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

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

      <Divider orientation="horizontal" className="bg-purple-300" />

      <motion.div
        id="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-green-500"
      >
        <AboutSection />
      </motion.div>
 
  {/* Still Image Section */}
  <div className="w-full h-[300px] flex items-center justify-center">
        <img src="/images/2.jpg" alt="Still" className="w-full h-full object-cover" />
      </div>
      <motion.div
        id="services-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OurSer5vicesTile />
        <ServiceItems />
        <ServiceSection />
      </motion.div>

    

      {/* Knowledge Bank Section */}
      <div 
        id="knowledge-bank"
        className="w-full h-[300px] flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: "url('/images/2.jpg')", // Update with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold text-white">Knowledge Bank</h1>
        </div>
      </div>

      <BlogSection />

      <Divider orientation="horizontal" className="bg-purple-300" />

      <motion.div
        id="team-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-green-500"
      >
        <OurTeamTitle />
        <OurTeam />
      </motion.div>

      
      <Divider orientation="horizontal" className="bg-purple-300" />

      <motion.div
        id="faq-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-green-500"
      >
        <FaqTitle />
        <AskedQuestions />
      </motion.div>

      <Divider orientation="horizontal" className="bg-purple-300" />
      <ContactUs />
      <FooterWithSocialLinks />
    </section>
  );
};

export default Home;
