"use client";

import WhyCard from "@/components/cards/WhyCard";
import Container from "@/components/container/Container";
import Title from "@/components/title_sub/Title";
import { animateFadeUp, animateFlip } from "@/data/animation";
import { cardData } from "@/data/data";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <Container className="global-padding">
      <motion.div
        className="flex flex-col items-center global-padding"
        {...animateFadeUp(1)}
      >
        <Title title="Why Choose Us?" />
        <p className="mobile-center">
          Discover why our clients trust us for reliable, customized, and
          top-quality security solutions.
        </p>
      </motion.div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mx-auto justify-center items-center mt-10">
        {cardData.map((card, index) => (
          <WhyCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            {...animateFlip(index * 0.2)}
          />
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
