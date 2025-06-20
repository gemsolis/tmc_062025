"use client";

import Container from "@/components/container/Container";
import Form from "@/components/forms/Form";
import Title from "@/components/title_sub/Title";
import { animateFadeUp, animateScaleFade } from "@/data/animation";
import { contactInfo } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";

const Contacts = () => {
	return (
		<Container>
			<div className="global-padding  flex flex-col mt-[100px]">
				<motion.div
					className="flex flex-col items-center text-black"
					{...animateFadeUp(0.5)}
				>
					<Title title="Contact Information" />
					<p className="text-darkGray mobile-center">
						Reach us by phone, email, or visit our office for all
						your security needs.
					</p>
				</motion.div>

				<div className="flex flex-col justify-center items-center mt-10">
					<ul className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(2,minmax(0,1fr))]">
						{contactInfo.map((item, index) => (
							<motion.li
								key={index}
								className="flex justify-start items-start p-5 bg-white rounded-lg shadow-md gap-5"
								{...animateScaleFade(index * 0.5)}
							>
								<span className="text-lightRed bg-black rounded-lg p-4 text-[24px]">
									{item.icon}
								</span>
								<div>
									<p className="text-black">{item.title}</p>
									<Link
										href={item.link}
										className="text-lightRed font-semibold"
										target="_blank"
									>
										{item.info}
									</Link>
								</div>
							</motion.li>
						))}
					</ul>
				</div>
				<Form />
			</div>
		</Container>
	);
};

export default Contacts;
