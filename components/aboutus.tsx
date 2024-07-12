import React from "react";
import { Card, CardBody, Image, Divider } from "@nextui-org/react"; 
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

const AboutSection = () => {
  return (
    <section className="py-5">
      <div className="gap-2 grid grid-cols-12 px-8 w-full">
        <Card isFooterBlurred className="w-full h-auto col-span-12 shadow-none sm:col-span-8 flex items-center justify-center">
          <CardBody className=" mt-5 mt-md-0">
          <h1 className={title()}>About Us&nbsp;</h1>
            <p className="text-lg">
              {siteConfig.text1} 
              <br/>
                </p>
                <br/>
            <p className="text-lg">
               {siteConfig.text2}  </p>
               <br/>
            <p className="text-lg">
              Whether you are facing a complex legal challenge or need straightforward advice, we are here to help you navigate the legal landscape with confidence and clarity.
            </p>
          </CardBody>
        </Card>
        <Card isFooterBlurred className="w-full h-auto shadow-none col-span-12 sm:col-span-4">
          <CardBody>
            <Image
              removeWrapper
              alt="About Us Image"
              className="z-0 w-full h-full object-cover rounded-3"
              src="/images/law1.jfif"
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
