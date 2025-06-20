"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Container from "@/components/container/Container";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Title from "@/components/title_sub/Title";

import { services } from "@/data/data";
import { animateFadeUp, animateScaleFade } from "@/data/animation";

import servicesImg from "@/public/assets/images/service-img.png";

const Services = ({ inquireOpen, setInquireOpen }) => {
  const toggleContactModal = () => {
    console.log("working");
    setInquireOpen(true);
  };

  return (
    <Container>
      <div className="global-padding section-bg bg-no-repeat bg-center bg-cover bg-fixed flex flex-column justify-between gap-5 py-20">
        <div className="flex flex-col w-[80%] items-center gap-5">
          <motion.div {...animateScaleFade(0.5)}>
            <Image src={servicesImg} alt="services" width={400} />
          </motion.div>
          <motion.div
            className="flex gap-2 justify-center"
            {...animateScaleFade(1)}
          >
            <Link href="/services">
              <PrimaryButton title="View our Services" />
            </Link>
            <SecondaryButton title="Inquire Now" onClick={toggleContactModal} />
          </motion.div>
        </div>
        <div className="px-6 flex flex-col gap-6 max-md:mt-10">
          <motion.div {...animateFadeUp(0.3)}>
            <div className=" text-white">
              <h2 className="text-[32px] max-lg:text-[26px] max-md:text-[20px] border-b-4 border-lightRed mx-auto text-left mb-4">
                CCTV Solutions Made to Fit
              </h2>
            </div>
            <p className="text-slate-100">
              We provide tailored solutions for both residential and commercial
              security, ensuring every property—be it a cozy home or a bustling
              business—receives top-level protection with our expertly designed
              CCTV systems.
            </p>
          </motion.div>
          <ul>
            {services.map((service, index) => (
              <motion.li
                key={index}
                className="flex gap-1 flex-col border-dashed border-b-lightRed border-b mb-4"
                {...animateFadeUp(index * 0.5)}
              >
                <h4 className="text-lightRed text-[24px] max-md:text-[18px]">
                  {service.title}
                </h4>
                <p className="text-lightGray pb-4">{service.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Services;
