"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AdditonalServices = ({
	image,
	title,
	description,
	...animationProps
}) => {
	return (
		<motion.div
			className="w-[300px] max-md:w-[auto] max-lg:w-[90%] lg:w-[400px] h-[300px] max-lg:h-[auto] border border-[#b3b3b3] p-10 flex-col justify-center items-center gap-3"
			{...animationProps}
		>
			<div className=" h-[50px]">
				<Image src={image} alt={title} width={30} />
			</div>
			<h3 className="text-lightRed special-font">{title}</h3>
			<p className="text-[14px] text-gray-500 mt-2">{description}</p>
		</motion.div>
	);
};

export default AdditonalServices;
