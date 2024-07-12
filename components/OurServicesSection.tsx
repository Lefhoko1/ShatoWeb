import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/listservices/services";
import { siteConfig } from "@/config/site";
export default function ServiceSection() {
  return (
    <Card className="w-full shadow-none flex flex-col justify-center items-center">
       
      <CardBody className="overflow-visible py-2 flex-grow">
        <div className="w-full   gap-4 grid grid-cols-12 grid-rows-1 px-8">
            <Card isFooterBlurred className="w-full h-[400px] shadow-sm col-span-12 sm:col-span-5">
            <CardBody>
              <div className="inline-block max-w-lg   justify-center">
                
                <h1 className={title()}>Values and principles.&nbsp;</h1>

                <h3 className={subtitle({ class: "mt-4" })}>{siteConfig.principles[1]}</h3>
                <h3 className={subtitle({ class: "mt-4" })}>{siteConfig.principles[2]}</h3>
                <h3 className={subtitle({ class: "mt-4" })}>{siteConfig.principles[3]}</h3>
                <h3 className={subtitle({ class: "mt-4" })}>{siteConfig.principles[4]}</h3>
                
                <h3 className={subtitle({ class: "mt-4" })}>{siteConfig.principles[5]}</h3>
                <h3 className={subtitle({ class: "mt-4" })}>{siteConfig.principles[6]}</h3>
              </div>
            </CardBody>
          </Card>

          <Card isFooterBlurred className="w-full h-[420px] border-none shadow-none col-span-12 sm:col-span-7">
            <CardBody>
              <Services />
            </CardBody>
          </Card>
        </div>
      </CardBody>
    </Card>

  );
}
