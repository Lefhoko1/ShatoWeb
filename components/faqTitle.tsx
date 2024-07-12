import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function FaqTitle() {
    return (
        <Card className="w-full shadow-none flex flex-col justify-center items-center">
            <CardBody className="overflow-visible py-2 flex-grow flex justify-center items-center">
                <div className="w-full gap-4 grid grid-cols-12 grid-rows-1 px-12">
                    <Card isFooterBlurred className="w-full shadow-none col-span-12 sm:col-span-12">
                        <CardBody>
                            <div className="w-full text-center">
                                <h1 className={title()}>Frequently asked&nbsp;</h1>
                                <h1 className={title({ color: "violet" })}>Questions&nbsp;</h1>
                                <br /> <br />
                                <p>
                                    {siteConfig.faqText}
                                </p> <br />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </CardBody>
        </Card>
    );
}
