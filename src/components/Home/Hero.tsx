

import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-6xl font-bold">
        A pet can make,<br />
          <span className="text-primary">
          your {" "}
          <span className=" text-electric-violet-600 underline ">HAPPINESS</span>!
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-m">
        Giving Love for the unloved and ignored
        </p>
        <div className="flex gap-4 text-sm">
        
        <Button className="">
        <MoveRight className="mr-2 h-4 w-4 " /> Find Your Pet
  </Button>
  <Button variant='outline'>
  <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Learn More
  </Button>
        </div>
      </div>
      <div className="relative  md:block">
        <Image src={'/bg.png'} layout={'fill'} objectFit={'contain'} alt={'df'} />
      </div>
    </section>
  );
}