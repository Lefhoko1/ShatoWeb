import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/listservices/services";
import { siteConfig } from "@/config/site";
export default function ServiceItems() {
  return (
    <Card className="w-full shadow-none flex flex-col justify-center items-center">
       
      <CardBody className="overflow-visible py-2 flex-grow">
        <div className="w-full   gap-4 grid grid-cols-12 grid-rows-2 px-8">
         



        <Card isFooterBlurred className="w-full    col-span-12 sm:col-span-4">
       
            <CardBody>
              <div className="inline-block max-w-lg   justify-center">   
                
              <h3 className={subtitle({ class: "mt-4 font-bold" })}>{siteConfig.servicesItems[1]}</h3> 
                          
                 <p>
                 {siteConfig.descriptions[1]}
                 </p>
              </div>
            </CardBody>
          </Card>
          <Card isFooterBlurred className="w-full     col-span-12 sm:col-span-4">
          <CardBody>
              <div className="inline-block max-w-lg   justify-center">   
                
              <h3 className={subtitle({ class: "mt-4 font-bold" })}>{siteConfig.servicesItems[2]}</h3> 
                   
                 <p>
                 {siteConfig.descriptions[2]}
                 </p>
              </div>
            </CardBody>
          </Card>
          <Card isFooterBlurred className="w-full     col-span-12 sm:col-span-4">
          <CardBody>
              <div className="inline-block max-w-lg   justify-center">   
                
              <h3 className={subtitle({ class: "mt-4 font-bold" })}>{siteConfig.servicesItems[3]}</h3> 
                   
                 <p>
                 {siteConfig.descriptions[3]}
                 </p>
              </div>
            </CardBody>
          </Card>
        <Card isFooterBlurred className="w-full    col-span-12 sm:col-span-4">
        <CardBody>
              <div className="inline-block max-w-lg   justify-center">   
                
              <h3 className={subtitle({ class: "mt-4 font-bold" })}>{siteConfig.servicesItems[4]}</h3> 
                     <p>
                 {siteConfig.descriptions[4]}
                 </p>
              </div>
            </CardBody>
          </Card>
          <Card isFooterBlurred className="w-full     col-span-12 sm:col-span-4">
          <CardBody>
              <div className="inline-block max-w-lg   justify-center">   
                
              <h3 className={subtitle({ class: "mt-4 font-bold" })}>{siteConfig.servicesItems[5]}</h3> 
                   
                 <p>
                 {siteConfig.descriptions[5]}
                 </p>
              </div>
            </CardBody>
          </Card>
          <Card isFooterBlurred className="w-full     col-span-12 sm:col-span-4">
          <CardBody>
              <div className="inline-block max-w-lg   justify-center">   
                
              <h3 className={subtitle({ class: "mt-4 font-bold" })}>{siteConfig.servicesItems[6]}</h3> 
                   
                 <p>
                 {siteConfig.descriptions[6]}
                 </p>
              </div>
            </CardBody>
          </Card>

           
        </div>
      </CardBody>
    </Card>

  );
}
