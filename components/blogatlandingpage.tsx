import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows- px-8">
    
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4">
       
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4">      
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-5.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4">
       
       <Image
         removeWrapper
         alt="Card example background"
         className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
         src="https://nextui.org/images/card-example-6.jpeg"
       />
       <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
         <div>
           <p className="text-black text-tiny">Available soon.</p>
           <p className="text-black text-tiny">Get notified.</p>
         </div>
         <Button className="text-tiny" color="primary" radius="full" size="sm">
           Notify Me
         </Button>
       </CardFooter>
     </Card>
      
  </div>
  );
}
