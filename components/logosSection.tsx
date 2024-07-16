"use client";
import { title, subtitle } from "@/components/primitives";

import React from "react";
import { Card, Image, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

export default function LogosSection() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (


        <div className="w-full gap-4 grid grid-cols-12 grid-rows-1 px-4 md:px-8">
            <Card isFooterBlurred className="w-full h-[350px] shadow-none border-none col-span-12 sm:col-span-7">
                <CardBody>
                    <div className="inline-block max-w-lg text-center justify-center">
                        <h1 className={title()}>Our&nbsp;</h1>
                        <h1 className={title({ color: "violet" })}>legal solutions&nbsp;</h1>
                        <br />
                        <h2 className={title()}>are tailored to our client’s specific needs!</h2>
                        <h3 className={subtitle({ class: "mt-4" })}>Personalized approach to service delivery.</h3>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                        Contact Us
                    </Button>
                    </div>
                </CardBody>
                
            </Card>
            <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Your justice your way</p>
                    <h4 className="text-white/90 font-medium text-xl">Have a lawyer for better sleep</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="/images/1.jpg"
                />
            </Card>

        </div>

    );
}
