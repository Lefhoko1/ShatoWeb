import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/listservices/services";
import { siteConfig } from "@/config/site";
export default function ServiceItems() {
    return (
        <Card className="w-full shadow-none flex flex-col justify-center items-center">

            <CardBody className="overflow-visible py-2 flex-grow">
                <div className="w-full   gap-4 grid grid-cols-12 grid-rows-1 px-12">
  
                    <Card isFooterBlurred className="w-full  shadow-none   col-span-12 sm:col-span-12">
                        <CardBody>
                            <div className="inline-block max-w-lg   justify-center">

                            <h1 className={title()}>Our&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>Services&nbsp;</h1>
              <br />
                                
                            </div>
                        </CardBody>
                    </Card>


                </div>
            </CardBody>
        </Card>

    );
}
