"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { animateFadeUp, animateSlideLeft } from "@/data/animation";
import { FiArrowDownRight } from "react-icons/fi";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Container from "@/components/container/Container";

import bg1 from "@/public/assets/images/hero-bg-1.jpg";
import bg2 from "@/public/assets/images/hero-bg-2.jpg";
import bg3 from "@/public/assets/images/hero-bg-3.jpg";
import bg4 from "@/public/assets/images/hero-bg-4.jpg";

const Hero = ({ inquireOpen, setInquireOpen }) => {
  const backgrounds = [bg1, bg2, bg3, bg4];
  const [currentBackground, setCurrentBackground] = useState(0);
  const toggleContactModal = () => {
    console.log("working");
    setInquireOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <Container>
      <div
        className="global-padding hero-bg bg-cover bg-center bg-no-repeat h-[100vh] flex justify-center items-center relative z-10"
        style={{
          backgroundImage: `url(${backgrounds[currentBackground].src})`,
        }}
      >
        <div className="absolute top-0 right-0 left-0 w-full h-full flex justify-center items-center bg-black z-20 bg-opacity-70"></div>
        <motion.div className="flex flex-col items-center z-40">
          <motion.h2
            className="text-white flex flex-col justify-center items-center"
            {...animateFadeUp(0.5)}
          >
            <span className="text-red-700 text-center font-bold text-[70px] p-2 max-md:text-[32px]">
              Stay Safe and Connected
            </span>
            <span className="text-white text-center font-bold text-[56px] p-2 max-md:text-[20px] ">
              with Our Cutting-Edge CCTV Installations
            </span>
          </motion.h2>
          <motion.p
            className="text-slate-400 text-center p-2"
            {...animateFadeUp(1)}
          >
            Providing trusted, professional security solutions that ensure the
            safety of your home, the protection of your business, and the peace
            of mind you deserve.
          </motion.p>
          <motion.div
            className="flex gap-4 items-center mt-5"
            {...animateFadeUp(1.2)}
          >
            <Link href="/services">
              <PrimaryButton title="View our Services" />
            </Link>
            <SecondaryButton
              title="Inquire Today!"
              onClick={toggleContactModal}
            />
          </motion.div>
        </motion.div>
        {/* <motion.div
					className="absolute bottom-6 max-md:bottom-8 right-0 z-40"
					{...animateSlideLeft(1.5)}
				>
					<Link
						href="/packages"
						className="bg-deepRed flex items-center gap-2 hover:scale-105 ease-in-out duration-150"
					>
						<div className="bg-black p-2 text-white text-[40px] ">
							<FiArrowDownRight />
						</div>
						<span className="w-[120px] text-white special-font">
							VIEW OUR PACKAGES
						</span>
					</Link>
				</motion.div> */}
      </div>
    </Container>
  );
};

export default Hero;
