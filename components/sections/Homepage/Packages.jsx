"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { packages } from "@/data/data";

import SecondaryButton from "@/components/buttons/SecondaryButton";
import Container from "@/components/container/Container";
import Title from "@/components/title_sub/Title";

import FeaturedPackages from "@/components/cards/FeaturedPackages";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { animateScaleFade } from "@/data/animation";

const Packages = ({ inquireOpen, setInquireOpen }) => {
	const toggleContactModal = () => {
		console.log("working");
		setInquireOpen(true);
	};
	return (
		<Container>
			<div className="global-padding">
				<motion.div
					className="flex flex-col gap-2 justify-center items-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col justify-center items-center">
						<Title title="Choose Your Perfect CCTV Package" />
						<p className="mobile-center">
							Select a package that provides the peace of mind you
							deserve, no matter the size of your property.
						</p>
					</div>
					<motion.div
						className="flex justify-center items-center gap-4 mt-6 mb-4"
						{...animateScaleFade(1)}
					>
						<Link href="/packages" className="flex justify-center">
							<PrimaryButton title="View Packages" />
						</Link>
						<SecondaryButton
							title="Inquire Now"
							onClick={toggleContactModal}
						/>
					</motion.div>
				</motion.div>
				<FeaturedPackages />
			</div>
		</Container>
	);
};

export default Packages;
