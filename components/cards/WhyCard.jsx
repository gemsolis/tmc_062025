import Image from "next/image";
import { motion } from "framer-motion";

const WhyCard = ({ icon, title, description, ...animationProps }) => {
  return (
    <motion.div
      className="w-[320px] h-[300px] border border-[#b3b3b3] p-10 flex flex-col gap-3 rounded-md"
      {...animationProps}
    >
      <div className="h-[50px]">
        <Image src={icon} alt={title} width={30} />
      </div>
      <h3 className="text-lightRed special-font">{title}</h3>
      <p className="text-[14px] text-gray-500 mt-2">{description}</p>
    </motion.div>
  );
};

export default WhyCard;
