"use client";
import Image from "next/image";
import { useState } from "react";
import { packages, featuredPackages } from "@/data/tmcPackages";
import { BsBoxFill } from "react-icons/bs";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import { BiSolidPackage } from "react-icons/bi";
import { motion } from "framer-motion";
import { animateScaleToOriginal } from "@/data/animation";

const FeaturedPackages = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex + 1) % featuredPackages.length
		);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) =>
				(prevIndex - 1 + featuredPackages.length) %
				featuredPackages.length
		);
	};

	return (
		<motion.div
			className="w-full relative flex flex-col items-center justify-center my-[20px]"
			{...animateScaleToOriginal(0.5)}
		>
			<div className="flex w-[80%] gap-4 justify-between items-center mb-2">
				<button
					className=" text-lightRed hover:text-gray-800 z-30"
					onClick={handlePrev}
				>
					<LuChevronLeftCircle className="text-[30px]" />
				</button>
				<div className="flex justify-center z-30 gap-2">
					{featuredPackages.map((_, index) => (
						<span
							key={index}
							className={`w-3 h-3 rounded-full cursor-pointer 
							${index === activeIndex ? "bg-lightRed" : "bg-gray-300"}`}
							onClick={() => setActiveIndex(index)}
						/>
					))}
				</div>
				<button
					className=" text-lightRed hover:text-gray-800 z-30"
					onClick={handleNext}
				>
					<LuChevronRightCircle className="text-[30px]" />
				</button>
			</div>
			<div className="w-[85%] flex flex-col items-center justify-center mt-10 ">
				{featuredPackages.map((pkg, index) => (
					<div
						key={index}
						className={`p-4 bg-white text-black rounded-lg shadow-lg duration-200 ease-in-out 
			${
				index === activeIndex
					? "z-20 opacity-100 w-full"
					: "bg-slate-300 z-10 absolute opacity-50 w-[80%] h-[80%]"
			}`}
						style={{
							transform: `translateY(${
								(index - activeIndex) * 3
							}%)`,
						}}
					>
						{index === activeIndex && (
							<div className="flex flex-column gap-4 items-center justify-center w-full">
								<div className="rounded-md overflow-hidden lg:w-[450px] lg:h-[300px] w-[300px] h-[300px] max-md:hidden">
									<Image
										src={pkg.imageSrc}
										width={500}
										alt={pkg.title}
										layout="responsive"
									/>
								</div>
								<div className="flex flex-col justify-start items-start py-4 w-full">
									<div className="flex flex-column max-md:items-center justify-between items-end w-full">
										<h2 className=" flex gap-2 justify-start text-left max-md:items-center flex-column">
											<span className="text-[24px] text-black">
												<BiSolidPackage />
											</span>
											<span className="text-[22px] max-md:text-[18px] max-md:text-center text-lightRed font-semibold">
												{pkg.title}
											</span>
										</h2>
									</div>
									<p className="text-left py-4 text-darkGray max-md:text-center max-md:text-[12px]">
										{pkg.description}
									</p>

									<ul className="flex gap-2 pb-2">
										{pkg.services.map((service, index) => (
											<li
												key={index}
												className="bg-black text-[12px] rounded-md text-white px-2 py-1 max-md:text-[10px]"
											>
												{service}
											</li>
										))}
									</ul>
									<div>
										<ul className="flex flex-col justify-start items-start">
											{pkg.features.map(
												(feature, index) => (
													<li
														key={index}
														className="flex gap-2 items-center text-[16px]"
													>
														<span className="text-deepRed">
															<BsBoxFill />
														</span>
														{feature}
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default FeaturedPackages;
