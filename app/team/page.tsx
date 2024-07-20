"use client";
import { title } from "@/components/primitives";

import ServiceSection from "@/components/OurServicesSection";
import ContactUs from "@/components/contactus";
import AboutSection from "@/components/aboutus";
import FooterWithSocialLinks from "@/components/footer";
import OurTeam from "@/components/ourPeople";
import OurServicesTitle from "@/components/ourservicesTitle";
import TeamTitle from "@/components/ourteamTitle";
import { Divider } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <div>
     
      <motion.div
        id="team-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-green-500"
      >  
        <TeamTitle />
        <OurTeam />
      </motion.div>
    </div>
  );
}
