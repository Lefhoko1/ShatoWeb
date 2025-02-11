import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { FaArrowDown } from "react-icons/fa";

interface LogosSection1Props {
  scrollToNextSection: (id: string) => void;
}

const LogosSection1: React.FC<LogosSection1Props> = ({ scrollToNextSection }) => {
  return (
    <section className="relative w-full h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/3.png)' }}>
      <Card
        isFooterBlurred
        className="w-full h-full shadow-none border-none flex items-center justify-center"
        style={{ background: 'transparent' }}
      >
        <CardBody className="flex flex-col items-center justify-center h-full w-full bg-white bg-opacity-80 p-8 rounded-lg">
          <div className="text-center text-black">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#6a1b9a' }}>
              WELCOME TO 
            </h1>
            
            <Image
              removeWrapper
              alt="Logo"
              src="/images/logo2.png"
              className="w-full h-auto object-cover"
            />
            <br />
          </div>
        </CardBody>
      </Card>
      <div className="absolute bottom-10 w-full flex justify-center pb-8">
        <FaArrowDown
          onClick={() => scrollToNextSection('about-section')}
          className="cursor-pointer text-2xl text-purple-700"
        />
      </div>
    </section>
  );
};

export default LogosSection1;
