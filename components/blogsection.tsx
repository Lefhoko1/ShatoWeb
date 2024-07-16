"use client";
import { title, subtitle } from "@/components/primitives";
import BlogAtAlanding from "@/components/blogatlandingpage";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function BlogSection() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div className="w-full gap-4 grid grid-cols-12 grid-rows-1 px-4 md:px-8">      

      {/* Our Blog Section */}
      <div className="col-span-12 md:col-span-4 flex flex-col justify-center p-8 text-black bg-opacity-70">
        <h1 className="text-3xl font-bold text-center">Knoledge Bank</h1>
      </div>
      <Card className="col-span-12 md:col-span-8 bg-white bg-opacity-70">
        <CardBody>
          <div className="max-w-lg mx-auto text-center">
            <h1 className={`${title()} text-black bg-opacity-70`}>Our&nbsp;</h1>
            <h1 className={`${title({ color: "green" })} text-black bg-opacity-70`}>blog&nbsp;</h1>
            <br />
            <h3 className={`${subtitle({ class: "mt-4" })} text-black bg-opacity-70`}>Check out our blog to see articles.</h3>
            <BlogAtAlanding />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
