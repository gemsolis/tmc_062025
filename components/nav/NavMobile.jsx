"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/data";
import { FaWindowClose } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import tmcLogo from "@/public/assets/images/tmc_logo.png";

const NavMobile = ({ navOpen, setNavOpen, setInquireOpen }) => {
  const pathname = usePathname();

  const toggleContactModal = () => {
    setInquireOpen(true);
    setNavOpen(false);
  };

  return (
    <div
      className={`fixed top-0 -right-4 w-[50vw] max-md:w-[70vw] h-[100vh] nav-glass shadow-xl transition-transform duration-500 ease-in-out
			${navOpen ? "translate-x-2" : "translate-x-full"}`} // Slide animation
    >
      <div className="flex flex-col gap-10 justify-center items-center pt-10 relative">
        <div
          className="text-white text-[30px] p-2 rounded-lg shadow-lg bg-deepRed absolute -left-4 top-5 cursor-pointer"
          onClick={() => setNavOpen(false)}
        >
          <FaWindowClose />
        </div>
        <div className="text-white flex flex-col justify-center items-center gap-4 p-4 text-center">
          <h1 className="text-red-900 font-black text-[50px] ">
            <Link
              href="/"
              onClick={() => setNavOpen(false)}
              className="flex flex-col gap-6 items-center justify-center "
            >
              <Image src={tmcLogo} width={60} alt="TMC Logo" />
              <div className="flex flex-col text-white text-[22px] special-font uppercase">
                <span className="text-[16px]">TMC CCTV and</span>
                <span className="text-[16px]">Structured Cabling</span>
              </div>
            </Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="w-full flex flex-col text-white">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="flex w-full justify-center py-2 pl-2 border-b border-dashed border-b-deepRed text-[18px]"
            >
              <Link
                href={link.url}
                className={`${
                  pathname === link.url
                    ? "w-full rounded-lg mx-3 bg-deepRed text-white"
                    : ""
                } p-2 w-full hover:mx-3 rounded-lg hover:bg-deepRed hover:text-white duration-500`}
                onClick={() => setNavOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
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
      </div>
    </div>
  );
};

export default NavMobile;
