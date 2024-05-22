import Image from "next/image";
import Hero from "@/components/Hero";
import OurOffering from "@/components/OurOffering";
import AboutUs from "@/components/AboutUs";
import TestimonialSlider from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Hero />
        <OurOffering/>
        <div id="about">
        <AboutUs/>
        </div>
        <div className="flex-grow bg-black " id="testimonial">
        <TestimonialSlider/>
        </div>
        <div className="overflow-x-hidden" id="pricing">
        <Pricing/>
        </div>
        <div id="faq">
        <Faq/>
        </div>
        {/* <Skills />
        <Encryption />
        <Projects /> */}
      </div>
    </main>
  );
}