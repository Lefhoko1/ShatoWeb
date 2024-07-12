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


import { Divider } from "@nextui-org/react";
import React from "react";
import { Card, Image, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

export default function Home() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      
      >
      {/* Header Section */}
      <div className="max-w-[1200px] gap-4 grid grid-cols-12 grid-rows-2 px-8" 
       >
        <Card isFooterBlurred className="w-full h-[350px] shadow-none border-none col-span-12 sm:col-span-7">
          <CardBody>
            <div className="inline-block max-w-lg text-center justify-center">
              <h1 className={title()}>Our&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>legal solutions&nbsp;</h1>
              <br />
              <h2 className={title()}>are tailored to our client’s specific needs!</h2>
              <h3 className={subtitle({ class: "mt-4" })}>Personalized approach to service delivery.</h3>
            </div>
          </CardBody>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Want to</p>
              <p className="text-black text-tiny">know more?</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Contact Us
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your justice your way</p>
            <h4 className="text-white/90 font-medium text-xl">Have a lawyer for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/1.jpg"
          />
        </Card>

        {/* Our Blog Section */}
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center p-8">
          <h1 className="text-3xl font-bold text-center">Whats at us?</h1>
        </div>
        <Card className="col-span-12 md:col-span-8" >
          <CardBody>
            <div className="max-w-lg mx-auto text-center">
              <h1 className={title()}>Our&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>blog&nbsp;</h1>
              <br />
              <h3 className={subtitle({ class: "mt-4" })}>Check out our blog to see articles.</h3>
              <BlogAtAlanding />
            </div>
          </CardBody>
        </Card>
      </div>

      <Divider orientation="horizontal" />
      <AboutSection />
      <Divider orientation="horizontal" />
       
      <OurSer5vicesTile/>
      <ServiceItems/>
      <ServiceSection />
      
      <Divider orientation="horizontal" />
       <OurTeamTitle/>
      <OurTeam />
      
      <Divider orientation="horizontal" />
      <FaqTitle/>
      <AskedQuestions />
      <ContactUs />
      <FooterWithSocialLinks />
    </section>
  );
}
