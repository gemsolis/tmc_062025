"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { faqsData } from "@/data/faqs";
import Title from "@/components/title_sub/Title";
import { animateFadeUp } from "@/data/animation";

const Faqs = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="global-padding w-full flex flex-col justify-center items-center gap-6">
			<motion.div
				className="flex flex-col items-center text-black text-center"
				{...animateFadeUp(0.4)}
			>
				<Title title="Frequently Asked Questions" />
				<p className="text-darkGray mobile-center">
					Have questions? We’ve got answers! Discover more about our
					services and support.
				</p>
			</motion.div>

			<motion.div
				className="w-[70%] max-md:w-full mb-20"
				{...animateFadeUp(0.5)}
			>
				{faqsData.map((faq, index) => (
					<div key={index} className="w-full border rounded-md">
						<div
							className="flex justify-between items-center bg-slate-100 p-4 cursor-pointer hover:bg-deepRed hover:text-white w-full"
							onClick={() => toggleFAQ(index)}
						>
							<h3 className="font-medium">{faq.question}</h3>
							<span className="text-lg">
								{openIndex === index ? "-" : "+"}
							</span>
						</div>
						<div
							className={`transition-all duration-300 ease-in-out ${
								openIndex === index
									? "max-h-40 p-4 bg-white"
									: "max-h-0 overflow-hidden"
							}`}
						>
							<p>{faq.answer}</p>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Faqs;
