"use client";
import React, { useEffect } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/listservices/services";
import { siteConfig } from "@/config/site";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceItems: React.FC = () => {
  const controls: AnimationControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Card className="w-full shadow-none flex flex-col justify-center items-center">
      <CardBody className="overflow-visible py-2 flex-grow">
        <div className="w-full gap-4 grid grid-cols-12 grid-rows-2 px-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="col-span-12 sm:col-span-4"
            >
              <Card isFooterBlurred className="w-full">
                <CardBody>
                  <div className="inline-block max-w-lg justify-center">
                    <h3 className={subtitle({ class: "mt-4 font-bold" })}>
                      {siteConfig.servicesItems[index as keyof typeof siteConfig.servicesItems]}
                    </h3>
                    <p>
                      {siteConfig.descriptions[index as keyof typeof siteConfig.descriptions]}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default ServiceItems;
