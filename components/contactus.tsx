import React from "react";
import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { EmailTemplate } from "./email-template";
import { siteConfig } from "@/config/site";
import ContactUsForm from "@/components/contactusform";

export default function ContactUs() {
  return (
    <Card>
      <CardBody>
        <div className="w-full min-h-screen gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card isFooterBlurred className="shadow-none border-none w-full   col-span-12 sm:col-span-5 flex justify-center items-center mb-4">
            <CardBody className="flex justify-center items-center text-center">
              <div className="inline-block max-w-lg">
                <h1 className={title()}>We are within&nbsp;</h1>
                <h1 className={title({ color: "violet" })}>your reach&nbsp;</h1>
                
                <p className="text-gray-600">{siteConfig.location[1]}</p>
                 
                  <p className="text-gray-600">{siteConfig.location[2]}</p>
                 
                  <p className="text-gray-600"> {siteConfig.location[3]}</p>
                
                  <p className="text-gray-600">{siteConfig.location[4]}</p>
                  <p className="text-gray-600">{siteConfig.location[5]}</p>

                <br />
            
                  <p className="text-gray-600">{siteConfig.contactus.adress}</p>
                 
                  <p className="text-gray-600">{siteConfig.contactus.MOBILE}</p>
                 
                  <p className="text-gray-600"> {siteConfig.contactus.email1}</p>
                 
                
               
            </div>
          </CardBody>
        </Card>

        <Card isFooterBlurred className="w-full col-span-12 shadow-none sm:col-span-7 mt-4 flex justify-center items-center">
          <CardBody className="flex flex-col items-center">
        
            <ContactUsForm/>
             
          </CardBody>
        </Card>

        <Card isFooterBlurred className="w-full   col-span-12 sm:col-span-12 mt-4">
          <CardBody className="p-0 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861048995047!2d-122.41941508468191!3d37.77492977975857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f5e2bf21%3A0x39c4c3456d1b35b0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1625467762703!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              title="Map Location"
              loading="lazy"
            ></iframe>
          </CardBody>
        </Card>


      </div>
    </CardBody>
    </Card >

  );
}
