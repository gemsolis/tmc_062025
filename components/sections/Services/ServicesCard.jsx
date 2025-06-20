import Image from "next/image";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import { animateFadeUp } from "@/data/animation";

const ServicesCard = () => {
  return (
    <div
      className="w-full grid gap-4 2xl:gap-10
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-2
                2xl:grid-cols-4
				justify-between"
    >
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          className="w-full h-[450px] md:w-[500px] lg:w-[500px] xl:w-[500px] 2xl:w-[410px] bg-white flex-col items-center justify-center gap-5 pb-2 shadow-sm rounded-md"
          {...animateFadeUp(index * 0.5)}
        >
          <div className="rounded-xl relative w-full h-[250px] overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="w-full px-4 pt-6 flex flex-col gap-5">
            <div>
              <h3 className="text-lightRed text-[18px] max-md:text-[16px]">
                {service.name}
              </h3>
              <p className="text-[14px] max-md:text-[14px] text-darkGray">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCard;
