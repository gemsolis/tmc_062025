"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/data";
import { animateNav } from "@/data/animation";

import NavMobile from "@/components/nav/NavMobile";
import FormModal from "../modals/FormModal";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import tmcLogo from "@/public/assets/images/tmc_logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleContactModal = () => {
    setInquireOpen(!inquireOpen);
  };

  return (
    <div id="home">
      <motion.div
        className="w-full nav-glass px-[20px] max-md:px-[20px] py-3 flex justify-between items-center z-50 fixed top-0 right-0 left-0 shadow-lg"
        {...animateNav(0)}
      >
        <h1 className="text-red-900 font-black text-[50px] ">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image src={tmcLogo} width={100} alt="TMC Logo" />
            <div className="flex flex-col text-white text-[22px] max-sm:text-[16px] max-md:hidden special-font uppercase ">
              <span className="text-[16px] max-sm:text-[14px] font-semibold">
                TMC CCTV and
              </span>
              <span className="text-[16px] max-sm:text-[14px] font-semibold">
                Structured Cabling
              </span>
            </div>
          </Link>
        </h1>
        <div className="max-lg:hidden">
          <ul className="flex text-white gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className={`px-5 py-2 font-semibold rounded duration-500 hover:bg-deepRed ${
                    (
                      link.url === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.url)
                    )
                      ? "bg-deepRed"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <div className="flex gap-2 justify-between items-center">
            <Link
              href="https://www.facebook.com/TMC.CCTV.StructuredCabling"
              target="_blank"
              className="bg-white rounded-full p-3 text-red-900 hover:bg-red-900 hover:text-white"
            >
              <FaFacebookF />
            </Link>
            <div
              className="flex gap-2 justify-center items-center bg-red-900 rounded-full px-2 py-1 text-white hover:bg-white hover:text-red-900 cursor-pointer"
              onClick={toggleContactModal}
            >
              <span className="bg-black font-bold rounded-full p-3 text-white hover:bg-red-900 hover:text-white">
                <FaArrowRight />
              </span>
              <span className="font-bold">Inquire Today!</span>
            </div>
          </div>
        </div>
        <div
          className="text-lightRed text-[32px] lg:hidden cursor-pointer"
          onClick={toggleNav}
        >
          <HiOutlineMenuAlt3 />
        </div>
        <NavMobile
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          setInquireOpen={setInquireOpen}
        />

        <FormModal inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      </motion.div>
    </div>
  );
};

export default Navbar;
