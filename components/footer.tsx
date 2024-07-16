import React from "react";
import { Card } from "@nextui-org/react";

const Footer: React.FC = () => {
  const contactus = {
    email1: "info@nlebgwalaw.co.bw",
    email2: "shatho@nlebgwalaw.co.bw",
    MOBILE: "(+267) 72-293-292",
    address: "P O Box 10008 Palapye"
  };

  const location = {
    1: "Plot 54358",
    2: "WESTERN COMMERCIAL ROAD GROUND",
    3: "AND FIRST FLOOR",
    4: "THE HUB, iTOWER, CBD",
    5: "GABORONE, BOTSWANA"
  };

  return (
    <footer
      className="w-full bg-white"
      style={{
        backgroundImage: "url('/images/pinkcorner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <Card isFooterBlurred className="shadow-none w-full lg:w-1/2">
            <div className="flex flex-col items-start p-4">
              <p className="font-medium text-lg mb-4">Contact Us</p>
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <a href="tel:+26772293292" className="text-gray-600">{contactus.MOBILE}</a>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <a href="mailto:info@nlebgwalaw.co.bw" className="text-gray-600">{contactus.email1}</a>
              </div>
             
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <p className="text-gray-600">{contactus.address}</p>
              </div>
            </div>
          </Card>

          <Card isFooterBlurred className="shadow-none w-full lg:w-1/2">
            <div className="flex flex-col items-start p-4">
              <p className="font-medium text-lg mb-4">Location</p>
              <div className="text-gray-600 space-y-2">
                {Object.values(location).map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
