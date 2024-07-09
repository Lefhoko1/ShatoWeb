import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import   Workera  from "@/components/workera";
export default function OurTeam() {
    return (
        <div className="w-full min-h-screen gap-2 grid grid-cols-12 grid-rows-2 px-8">
            <Card isFooterBlurred className="shadow-none border-none w-full col-span-12 sm:col-span-12">
                <CardBody>
                    <div className="inline-block max-w-lg text-center justify-center">
                        <h1 className={title()}>Our&nbsp;</h1>
                        <h1 className={title({ color: "violet" })}>Team&nbsp;</h1>
                        <br />
                        <h2 className={title()}>are tailored to our client’s specific needs!</h2>
                        <h3 className={subtitle({ class: "mt-4" })}>Personalized approach to service delivery.</h3>
                        
                    </div>
                </CardBody>
            </Card>
            <Card isFooterBlurred className="shadow-none border-none w-full h-[350px] col-span-12 sm:col-span-4">
                <CardBody>
                   <Workera/>
                </CardBody>
            </Card>

            <Card isFooterBlurred className="shadow-none border-none w-full h-[350px] col-span-12 sm:col-span-4">
                <CardBody>
                <Workera/>
                </CardBody>
            </Card>

            <Card isFooterBlurred className="shadow-none border-none w-full h-[350px] col-span-12 sm:col-span-4">
                <CardBody>
                <Workera/>
                </CardBody>
            </Card>

        </div>
    );
}
