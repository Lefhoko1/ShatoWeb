import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/listservices/services";

export default function ServiceSection() {
  return (
    <Card className="w-full shadow-none flex flex-col justify-center items-center">
       
      <CardBody className="overflow-visible py-2 flex-grow">
        <div className="w-full   gap-4 grid grid-cols-12 grid-rows-1 px-8">
           

          <Card isFooterBlurred className="w-full h-[400px] shadow-none col-span-12 sm:col-span-5">
            <CardBody>
              <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Our&nbsp;</h1>
                <h1 className={title({ color: "violet" })}>services&nbsp;</h1>
                <br />
                <h1 className={title()}>Values driving our service delivery.&nbsp;</h1>

                <h3 className={subtitle({ class: "mt-4" })}>In-depth legal expertise</h3>
                <h3 className={subtitle({ class: "mt-4" })}>Client-focused approach</h3>
                <h3 className={subtitle({ class: "mt-4" })}>Transparent communication</h3>
                <h3 className={subtitle({ class: "mt-4" })}>Timely and efficient solutions</h3>
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
