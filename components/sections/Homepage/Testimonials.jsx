"use client";

import Title from "@/components/title_sub/Title";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { animateFadeUp, animateScaleFade } from "@/data/animation";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import FormModal from "@/components/modals/FormModal";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const reviews = [
  {
    rating: 4,
    review:
      "Ang galing ng service nila! TMC installed a CCTV system sa business namin, sobrang linaw ng footage. Bilis din ng installation at super helpful ng support nila. Highly recommended!",
    author: "— Maria Santos, Business Owner",
  },
  {
    rating: 5,
    review:
      "Sobrang sulit! We needed a customized security setup for our bahay, and TMC delivered. Professional, mabilis, at very affordable ang service nila.",
    author: "— Carlo Reyes, Homeowner",
  },
  {
    rating: 5,
    review:
      "Super thankful ako sa TMC! Inasikaso nila lahat from start to finish. Ang ganda ng quality ng CCTV, at ngayon, mas panatag na loob ko sa bahay.",
    author: "— Jenny Mercado, Entrepreneur",
  },
  {
    rating: 4,
    review:
      "Happy ako sa naging service! Very friendly sila and they made sure na naiintindihan ko paano gamitin yung system. Nagkaproblema lang konti sa app, pero mabilis silang tumulong.",
    author: "— Angela Lopez, Homeowner",
  },
  {
    rating: 5,
    review:
      "Grabe, ang pulido ng trabaho nila! From installation to setup, alagang-alaga kami. Hindi sila umalis hangga’t hindi perfect ang lahat.",
    author: "— Robert Mendoza, CEO",
  },
  {
    rating: 4,
    review:
      "Maganda yung naging experience ko. Professional yung team, and very maayos silang magtrabaho. CCTV system ko works perfectly hanggang ngayon.",
    author: "— Emily Garcia, Small Business Owner",
  },
  {
    rating: 5,
    review:
      "Best investment para sa bahay namin! Ang bilis ng installation, at ang CCTV cameras, ang linaw! Laking peace of mind talaga.",
    author: "— Olivia Cruz, Mother of Two",
  },
  {
    rating: 4,
    review:
      "Solid experience overall! Ang dali i-monitor ng cameras gamit ang app. Nagkaroon lang ng konting setup issue pero inayos agad ng team.",
    author: "— Sophia Ramos, Business Manager",
  },
  {
    rating: 5,
    review:
      "Wala akong masabi, ang galing nila! Detailed yung explanation nila at ang CCTV quality, superb! Plus, napakabait pa ng after-sales support nila.",
    author: "— James Navarro, Restaurant Owner",
  },
];

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [fade, setFade] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);

  const toggleContactModal = () => {
    console.log("working");
    setInquireOpen(true);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentReview(index);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [reviews.length]);

  return (
    <div>
      <div className="py-[80px] flex flex-col justify-center items-center">
        <motion.div
          className="flex flex-col items-center text-black"
          {...animateFadeUp(1)}
        >
          <Title title="What Our Clients Say About Us?" />
          <p className="text-black">
            Hear from satisfied customers who trust our service.
          </p>
        </motion.div>
        <motion.div
          className={`w-[50%] max-md:w-[80%] p-10 shadow-lg bg-white rounded-xl mt-10 flex flex-col gap-6 items-center transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          {...animateScaleFade(1)}
        >
          <div className="flex gap-3 text-yellow-400 justify-center items-center">
            {renderStars(reviews[currentReview].rating)}
          </div>
          <p className="text-darkGray text-center">
            {reviews[currentReview].review}
          </p>
          <div>
            <h4 className="text-lightRed text-center">
              {reviews[currentReview].author}
            </h4>
          </div>
        </motion.div>
        <div className="flex gap-3 m-10">
          <button className="text-lightRed" onClick={handlePrev}>
            <LuChevronLeftCircle className="text-[30px]" />
          </button>
          <div className="dot-indicator flex gap-3 text-lightGray justify-center items-center">
            {reviews.map((_, index) => (
              <GoDotFill
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer ${
                  index === currentReview ? "text-lightRed" : ""
                }`}
              />
            ))}
          </div>
          <button className="text-lightRed" onClick={handleNext}>
            <LuChevronRightCircle className="text-[30px]" />
          </button>
        </div>
        <motion.div
          className="mt-4 text-center w-3/4 border-[#b3b3b3] border py-6 px-4 rounded-md bg-black"
          {...animateFadeUp(2)}
        >
          <h3 className="text-2xl text-lightRed font-bold ">
            Ready to Secure Your Property?
          </h3>
          <p className="text-slate-200 mt-2">
            Let us help you take the next step in enhancing your security. Reach
            out today to get started!
          </p>
          <motion.div className="my-5 flex justify-center">
            <PrimaryButton title="Inquire Now" onClick={toggleContactModal} />
          </motion.div>
        </motion.div>
        <FormModal inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      </div>
    </div>
  );
};

export default Testimonials;
