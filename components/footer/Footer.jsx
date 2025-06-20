"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { footerLinks, navLinks } from "@/data/data";
import tmcLogo from "@/public/assets/images/tmc_logo.png";
import { FaAngleDoubleUp } from "react-icons/fa";
import { animateFadeUp } from "@/data/animation";

const Footer = () => {
  return (
    <>
      <div className="global-padding bg-black py-10 flex justify-between max-lg:flex-col max-lg:items-start max-lg:gap-4 relative">
        <div>
          <Link href="#">
            <motion.h1
              className="text-red-900 font-black text-[50px] flex  items-center gap-2"
              {...animateFadeUp(0.5)}
            >
              <Image
                src={tmcLogo}
                width={80}
                alt="TMC CCTV and Structured Cabling"
              />
              <div className="flex flex-col  text-white  special-font uppercase">
                <span className="text-[18px] max-md:text-[20px]">
                  TMC CCTV AND
                </span>
                <span className="text-[18px] max-md:text-[20px]">
                  Structured Cabling
                </span>
              </div>
            </motion.h1>
          </Link>
          <div className="text-gray-400 mt-2">
            <motion.p {...animateFadeUp(0.6)}>
              kljg.enterprise@gmail.com
            </motion.p>
            <motion.p {...animateFadeUp(0.7)}>
              St Barangay, 349 M. Gregorio
            </motion.p>
            <motion.p {...animateFadeUp(0.8)}>
              San Antonio, Cavite City, 4100 Cavite
            </motion.p>
          </div>
        </div>
        <div>
          <div>
            <motion.h5
              className="text-lightRed text-[18px] special-font"
              {...animateFadeUp(0.3)}
            >
              Sitelink
            </motion.h5>
            <ul className="flex flex-col text-white gap-1">
              {navLinks.map((link, index) => (
                <motion.li key={index} {...animateFadeUp(index * 0.3)}>
                  <Link href={link.url} className="hover:text-lightRed">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <motion.h5
              className="text-lightRed text-[18px] special-font"
              {...animateFadeUp(0.3)}
            >
              Policies & Information
            </motion.h5>
            <ul className="flex flex-col text-white gap-1 ">
              {footerLinks.map((link, index) => (
                <motion.li key={index} {...animateFadeUp(index * 0.3)}>
                  <Link href={link.url} className="hover:text-lightRed">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-lightGray">
          <motion.p {...animateFadeUp(0.5)}>
            © 2025 TMC CCTV and Structured Cabling
          </motion.p>
          <motion.p {...animateFadeUp(0.7)}>All Rights Reserved.</motion.p>
        </div>
        <div className="bg-deepRed px-2 py-1 text-[30px] rounded-lg inline-block absolute -top-6 right-[100px] max-lg:right-5">
          <Link href="#home" className="text-white inline-block">
            <FaAngleDoubleUp />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
