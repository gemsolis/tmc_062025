"use client";
import Link from "next/link";

import Container from "@/components/container/Container";
import Form from "@/components/forms/Form";
import Title from "@/components/title_sub/Title";
import {
	animateFadeUp,
	animateScaleFade,
	animateScaleToOriginal,
} from "@/data/animation";
import { contactInfo } from "@/data/data";
import { motion } from "framer-motion";

const ContactUs = () => {
	return (
		<Container>
			<div className="global-padding flex flex-col pt-[250px] header-bg">
				<motion.div
					className="flex flex-col items-center text-black"
					{...animateFadeUp(0.5)}
				>
					<Title title="Looking for Security Solution? Contact us." />
					<p className="text-darkGray mobile-center">
						Reach us by phone, email, or visit our office for all
						your security needs.
					</p>
				</motion.div>

				<div className="flex flex-col justify-center items-center mt-10 mb-6">
					<ul className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(2,minmax(0,1fr))]">
						{contactInfo.map((item, index) => (
							<motion.li
								key={index}
								className="flex justify-start items-start p-4 bg-white rounded-lg shadow-lg gap-4"
								{...animateScaleFade(index * 0.5)}
							>
								<span className="text-lightRed bg-black rounded-lg p-4 text-[24px]">
									{item.icon}
								</span>
								<div>
									<p className="text-black">{item.title}</p>
									<Link
										href={item.link}
										target="_blank"
										className="text-lightRed font-semibold"
									>
										{item.info}
									</Link>
								</div>
							</motion.li>
						))}
					</ul>
				</div>
				<motion.div {...animateScaleToOriginal(0.5)}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.93125345774!2d120.89828631145187!3d14.488635885926085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cdb570bff27d%3A0xe3b703d5d7a2dc6c!2sKLJG%20ENTERPRISE%20Powered%20By%3A%20TMC%20COMPUTER%20SALES%20%26%20SERVICES!5e0!3m2!1sen!2sph!4v1729175794756!5m2!1sen!2sph"
						width="auto"
						height="500"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full rounded-lg my-10 shadow-lg"
					></iframe>
				</motion.div>
				<Form />
			</div>
		</Container>
	);
};

export default ContactUs;
