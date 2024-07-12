import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-white"
    style={{ backgroundImage: "url('/images/pinkcorner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
       

          {/* Section 2 */}
          <Card isFooterBlurred className=" shadow-none w-full h-[300px]">
            <div className="flex flex-col items-start p-4">
              <p className="font-medium text-lg mb-4">Services</p>
              <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                <a href="https://example.com"  className="hover:opacity-75">{siteConfig.servicesItems[1]}</a>
                <a href="https://example.com" className="hover:opacity-75">{siteConfig.servicesItems[2]}</a>
                <a href="https://example.com"  className="hover:opacity-75">{siteConfig.servicesItems[3]}</a>
                <a href="https://example.com" className="hover:opacity-75">{siteConfig.servicesItems[4]}</a>
                <a  href="https://example.com" className="hover:opacity-75">{siteConfig.servicesItems[5]}</a>
                <a  href="https://example.com" className="hover:opacity-75">{siteConfig.servicesItems[6]}</a>
              </nav>
            </div>
          </Card>

          {/* Section 3 */}
          <Card isFooterBlurred className="shadow-none w-full h-[300px]">
            <div className="flex flex-col items-start p-6">
              <p className="font-medium text-lg mb-4">Contact</p>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 12a5 5 0 11-10 0 5 5 0 0110 0zM3 19a1 1 0 001 1h2v-2a2 2 0 00-2-2H3v3zm0-8v5h2a3 3 0 01-2.829-4H3zm14-3a1 1 0 00-1-1h-2v2h2a1 1 0 001-1zm-3 3v1.447a3 3 0 00.5.5L15 14h3v-3l-1.5 1.5a2 2 0 01-.5.5z" />
                </svg>
                <p className="text-gray-600">{siteConfig.contactus.adress}</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <a href="tel:+1234567890" className="text-gray-600">{siteConfig.contactus.MOBILE}</a>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <a href="mailto:info@example.com" className="text-gray-600">{siteConfig.contactus.email1}</a>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <a href="mailto:info@example.com" className="text-gray-600">{siteConfig.contactus.email2}</a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
