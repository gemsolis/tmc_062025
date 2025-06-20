"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { additionalService } from "@/data/services";
import Title from "@/components/title_sub/Title";
import ServicesCard from "@/components/sections/Services/ServicesCard";
import AdditionalServices from "@/components/cards/AdditionalServices";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Process from "@/components/sections/Services/Process";
import FormModal from "@/components/modals/FormModal";
import {
  animateSlideRight,
  animateSlideLeft,
  animateScaleFade,
  animateFadeUp,
} from "@/data/animation";

const Services = () => {
  const [inquireOpen, setInquireOpen] = useState(false);

  const toggleContactModal = () => {
    console.log("working");
    setInquireOpen(true);
  };
  return (
    <>
      <div className="w-full header-bg global-padding">
        <div className="pt-[320px] flex">
          <div className="w-full flex max-md:flex-col items-start justify-between text-black max-md:items-start">
            <motion.div {...animateSlideRight(0.5)}>
              <Title title="Our Services" />
            </motion.div>
            <motion.p
              className="w-[60vw] text-black font-light text-[20px] max-md:text-[16px] pr-4 max-md:w-full"
              {...animateSlideLeft(0.9)}
            >
              Explore our wide range of comprehensive security solutions
              designed specifically for both residential and commercial
              properties. Our expert team is dedicated to providing tailored
              CCTV installations, ensuring that your unique security needs are
              met with the highest standards of quality and professionalism.
            </motion.p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-10">
          <div className="flex w-full items-center justify-center mt-10">
            <ServicesCard />
          </div>
          <div className="flex flex-col gap-4 justify-between items-center mt-20">
            <div className="w-full flex flex-col justify-center items-center text-black mt-10 max-md:w-full mb-10">
              <motion.div
                className="flex flex-col justify-start items-start max-lg:items-center"
                {...animateScaleFade(0.5)}
              >
                <Title title="Additional Services We Offer" />
                <p className="mobile-center">
                  Discover our additional services to elevate your protection.
                </p>
              </motion.div>
            </div>
            <div className="w-full flex-col justify-center items-center">
              <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 justify-center items-center">
                {additionalService.map((card, index) => (
                  <AdditionalServices
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    {...animateFadeUp(index * 0.2)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[200px] max-md:mt-[100px] mb-[50px]">
            <div>
              <Process />
            </div>
          </div>
        </div>
        <motion.div
          className="w-full mt-10 my-[100px] text-center border-[#b3b3b3] border py-6 px-4 rounded-md"
          {...animateFadeUp(2)}
        >
          <h3 className="text-2xl text-lightRed font-bold ">
            Ready to Secure Your Property?
          </h3>
          <p className="text-slate-700 mt-2">
            Let us help you take the next step in enhancing your security. Reach
            out today to get started!
          </p>
          <motion.div className="my-5 flex justify-center">
            <SecondaryButton title="Inquire Now" onClick={toggleContactModal} />
          </motion.div>
        </motion.div>
        <FormModal inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      </div>
    </>
  );
};

export default Services;
