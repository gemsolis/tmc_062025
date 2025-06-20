"use client";

import { motion } from "framer-motion";
import ImageCarousel from "@/components/sections/AboutUs/ImageCarousel";
import Testimonials from "@/components/sections/Homepage/Testimonials";
import Title from "@/components/title_sub/Title";
import Faqs from "@/components/sections/AboutUs/Faqs";
import {
  animateFadeUp,
  animateScaleToOriginal,
  animateSlideLeft,
  animateSlideRight,
} from "@/data/animation";
import WhyChooseUs from "@/components/sections/Homepage/WhyChooseUs";

const imagesCarousel = [
  { src: "/assets/images/carousel/image_1.jpeg", alt: "Image 1" },
  { src: "/assets/images/carousel/image_2.png", alt: "Image 2" },
  { src: "/assets/images/carousel/image_3.png", alt: "Image 3" },
  { src: "/assets/images/carousel/image_4.png", alt: "Image 4" },
  { src: "/assets/images/carousel/image_5.png", alt: "Image 5" },
  { src: "/assets/images/carousel/image_6.png", alt: "Image 6" },
];

const AboutUs = () => {
  return (
    <div className="header-bg">
      <div className="global-padding pt-[300px]">
        <div className="flex flex-column justify-between items-center">
          <div className="flex flex-col justify-start items-start w-[40%] max-lg:w-[90%] my-10 max-md:gap-5 ">
            <motion.div
              className="flex flex-col items-center text-black"
              {...animateFadeUp(0.5)}
            >
              <Title title="About Our Company" />
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.h2
                className="text-lightRed text-[32px] max-lg:max-md:text-[20px]"
                {...animateSlideRight(0.7)}
              >
                Delivering Reliable Security Solutions for Peace of Mind and
                Protection.
              </motion.h2>
              <motion.p {...animateSlideRight(0.9)}>
                In today's interconnected world, robust security and reliable
                network infrastructure are paramount.{" "}
                <span className="font-semibold text-lightRed pr-2">
                  TMC CCTV and Structured Cabling
                </span>
                offers cutting-edge CCTV surveillance systems designed to
                protect your assets, monitor your premises, and ensure peace of
                mind. Complementing this, our expertise in network structured
                cabling ensures seamless and efficient data transmission
                throughout your operations, providing the backbone for all your
                digital needs. From design and installation to maintenance and
                upgrades, we deliver scalable and dependable solutions tailored
                to your specific requirements.
              </motion.p>
            </div>
          </div>
          <div className="w-[45%] max-lg:w-full">
            <ul>
              <motion.li
                className="flex justify-center items-center w-full gap-3 border-b border-lightRed mb-5"
                {...animateSlideLeft(0.5)}
              >
                <span className="text-black text-[32px] font-extrabold w-[200px]">
                  8
                </span>
                <h4 className="text-lightRed max-md:text-[20px] w-[30%] max-md:w-[40%]">
                  years of experience
                </h4>
              </motion.li>
              <motion.li
                className="flex justify-center items-center w-full   gap-6 border-b border-lightRed mb-5"
                {...animateSlideLeft(0.7)}
              >
                <span className="text-black text-[32px] font-extrabold w-[200px] ">
                  95%
                </span>
                <h4 className="text-lightRed max-md:text-[20px] w-[30%] max-md:w-[40%]">
                  customer satisfaction
                </h4>
              </motion.li>
              <motion.li
                className="flex justify-center items-center w-full gap-6 border-b border-lightRed mb-5"
                {...animateSlideLeft(0.9)}
              >
                <span className="text-black text-[32px] font-extrabold w-[200px] ">
                  120+
                </span>
                <h4 className="text-lightRed max-md:text-[20px] w-[30%] max-md:w-[40%]">
                  projects completed
                </h4>
              </motion.li>
              <motion.li
                className="flex justify-center items-center w-full   gap-6 border-b border-lightRed mb-5"
                {...animateSlideLeft(1.1)}
              >
                <span className="text-black text-[32px] font-extrabold w-[200px] ">
                  300+
                </span>
                <h4 className="text-lightRed max-md:text-[20px] w-[30%] max-md:w-[40%]">
                  satisfied clients
                </h4>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        className="h-[80vh] flex justify-center items-center"
        {...animateScaleToOriginal(2)}
      >
        <ImageCarousel images={imagesCarousel} />
      </motion.div>
      <div className="my-[100px]">
        <WhyChooseUs />
      </div>
      <div className="max-md:w-full mt-[100px]">
        <motion.div className="mt-[100px]" {...animateFadeUp(1)}>
          <Faqs />
        </motion.div>
        <div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
