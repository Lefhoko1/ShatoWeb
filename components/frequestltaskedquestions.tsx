import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

export default function FAQ() {
  return (
    <div className="w-full min-h-screen gap-2 grid grid-cols-12 grid-rows-2 px-8"
    style={{ backgroundImage: "url('/images/bluegradient.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Card isFooterBlurred className="shadow-none border-none w-full h-[350px] col-span-12 flex justify-center items-center mb-4">
        <CardBody className="flex justify-center items-center text-center">
          <div className="inline-block max-w-lg">
            <h1 className={title()}>Our&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>legal solutions&nbsp;</h1>
            <br />
            <h2 className={title()}>are tailored to our client’s specific needs!</h2>
            <h3 className={subtitle({ class: "mt-4" })}>Personalized approach to service delivery.</h3>
          </div>
        </CardBody>
      </Card>
      <Accordion variant="splitted" className="col-span-12">
        <AccordionItem key="1" aria-label="Accordion 1" title="What areas of law do you specialize in?">
          We specialize in family law, criminal defense, personal injury, and corporate law.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="What are your consultation fees?">
          Our initial consultation is free. For further legal services, our fees vary based on the complexity of the case.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="How can I schedule an appointment?">
          You can schedule an appointment by calling our office at (123) 456-7890 or by filling out the contact form on our website.
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="What should I bring to my first consultation?">
          Please bring any relevant documents related to your case, including court documents, contracts, and correspondence.
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="Do you offer legal services for businesses?">
          Yes, we offer a range of legal services for businesses, including contract review, corporate governance, and dispute resolution.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
