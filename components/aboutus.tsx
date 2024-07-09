import React from "react";
import { Card, CardBody, Image, Divider } from "@nextui-org/react"; 

const AboutSection = () => {
  return (
    <section className="py-5">
      <div className="gap-2 grid grid-cols-12 px-8 w-full">
        <Card isFooterBlurred className="w-full h-auto col-span-12 shadow-none sm:col-span-8 flex items-center justify-center">
          <CardBody className="text-center mt-5 mt-md-0">
            <p className="text-muted">Our Story</p>
            <h2 className="font-bold">About Us</h2>
            
            <p className="text-lg">
              At [Law Firm Name], we pride ourselves on delivering unparalleled legal services to our clients. With decades of combined experience, our team of expert attorneys is dedicated to providing personalized solutions that cater to the unique needs of each client.
            </p>
            <p className="text-lg">
              Our values drive our service delivery, ensuring that every case is handled with the utmost professionalism and care.
            </p>
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
              src="https://freefrontend.dev/assets/square.png"
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
