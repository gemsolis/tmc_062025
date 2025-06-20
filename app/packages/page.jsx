"use client";

import { motion } from "framer-motion";
import { useState } from "react"; // Import useState
import Image from "next/image";
import Container from "@/components/container/Container";
import Title from "@/components/title_sub/Title";
import FormModal from "@/components/modals/FormModal";
import { packages } from "@/data/tmcPackages";
import { BsBoxFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import {
	animateFadeUp,
	animateSlideLeft,
	animateSlideRight,
} from "@/data/animation";

const Packages = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortOption, setSortOption] = useState("lowest");
	const [inquireOpen, setInquireOpen] = useState(false); // State for modal visibility

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	const handleSortOptionChange = (option) => {
		setSortOption(option);
	};

	const filteredPackages =
		selectedCategory === "All"
			? packages
			: packages.filter((pkg) => pkg.category === selectedCategory);

	// Sort packages based on selected sort option
	const sortedPackages = [...filteredPackages].sort((a, b) => {
		if (sortOption === "lowest") {
			return (
				parseFloat(a.price.replace(/[₱,]/g, "")) -
				parseFloat(b.price.replace(/[₱,]/g, ""))
			);
		} else if (sortOption === "highest") {
			return (
				parseFloat(b.price.replace(/[₱,]/g, "")) -
				parseFloat(a.price.replace(/[₱,]/g, ""))
			);
		} else if (sortOption === "ascending") {
			return a.title.localeCompare(b.title);
		} else {
			return b.title.localeCompare(a.title);
		}
	});

	const handleInquireNowClick = () => {
		setInquireOpen((prev) => !prev); // Toggle modal visibility
	};

	return (
		<Container>
			<div>
				<div className="flex flex-col items-center text-black text-center pt-[300px] mb-10 global-padding header-bg">
					<motion.div {...animateFadeUp(0.5)}>
						<Title title="Find the Right CCTV Package for You" />
						<p className="text-darkGray mobile-center">
							Explore our range of CCTV packages designed to meet
							your security needs.
						</p>
					</motion.div>
					<div className="mt-[100px] flex flex-col items-center w-full">
						{/* Filter Options */}
						<motion.div
							className="flex gap-4 self-end mb-4 items-center sticky top-0  z-10 max-sm:self-center"
							{...animateSlideLeft(0.5)}
						>
							{/* Category Filter */}
							<select
								className="p-2 rounded px-4 md:hidden text-[12px] shadow-lg"
								onChange={(e) =>
									handleCategoryChange(e.target.value)
								}
							>
								<option value="All">All Categories</option>
								<option value="Residential">Residential</option>
								<option value="Commercial">Commercial</option>
								<option value="Others">Others</option>
							</select>

							{/* Sort Options */}
							<select
								className="p-2 rounded text-[12px] shadow-lg"
								onChange={(e) =>
									handleSortOptionChange(e.target.value)
								}
							>
								<option value="ascending">
									Sort by Title: Ascending
								</option>
								<option value="descending">
									Sort by Title: Descending
								</option>
							</select>
						</motion.div>

						{/* Display Packages */}
						<div className="w-full py-4 flex gap-3 justify-between items-start">
							<motion.div
								className="flex flex-col items-start justify-start w-[30%] max-md:hidden sticky top-[100px] bg-white  p-4 rounded-md shadow-md"
								{...animateSlideRight(0.7)}
							>
								<h3 className="w-full flex justify-start text-lightRed font-bold text-[18px] py-4 border-b border-slate-500 mb-2">
									Categories
								</h3>
								<ul className="w-full flex flex-col items-start justify-start gap-4">
									<li
										className={`p-2 cursor-pointer w-full text-left hover:bg-black duration-200 hover:text-white rounded-md  ${
											selectedCategory === "All"
												? "bg-black text-white rounded-md hover:bg-black"
												: ""
										}`}
										onClick={() =>
											handleCategoryChange("All")
										}
									>
										All Categories
									</li>
									<li
										className={`p-2 cursor-pointer w-full text-left hover:bg-black duration-200 hover:text-white rounded-md  ${
											selectedCategory === "Residential"
												? "bg-black text-white rounded-md hover:bg-black"
												: ""
										}`}
										onClick={() =>
											handleCategoryChange("Residential")
										}
									>
										Residential
									</li>
									<li
										className={`p-2 cursor-pointer w-full text-left hover:bg-black duration-200 hover:text-white rounded-md ${
											selectedCategory === "Commercial"
												? "bg-black text-white rounded-md hover:bg-black"
												: ""
										}`}
										onClick={() =>
											handleCategoryChange("Commercial")
										}
									>
										Commercial
									</li>
									<li
										className={`p-2 cursor-pointer w-full text-left hover:bg-black duration-200 hover:text-white rounded-md  ${
											selectedCategory === "Others"
												? "bg-black text-white rounded-md hover:bg-black"
												: ""
										}`}
										onClick={() =>
											handleCategoryChange("Others")
										}
									>
										Others
									</li>
								</ul>
							</motion.div>
							<div className="w-[80%] max-md:w-full">
								{sortedPackages.map((pkg, index) => (
									<motion.div
										key={pkg.id}
										className="w-full flex flex-column gap-10 bg-white rounded-lg pr-4 mb-4 max-md:p-4"
										{...animateSlideLeft(index * 0.4)}
									>
										<div className="rounded-md overflow-hidden">
											<Image
												src={pkg.imageSrc}
												width={500}
												alt={pkg.title}
											/>
										</div>
										<div className="flex flex-col justify-start items-start py-4 w-full">
											<div className="max-md:self-center">
												<h2 className="text-[22px] max-md:text-[20px] text-lightRed flex gap-2 justify-start text-left">
													<span className="text-[24px] text-black">
														<BiSolidPackage />
													</span>
													{pkg.title}
												</h2>
											</div>
											<p className="text-left py-4 text-darkGray max-md:text-center">
												{pkg.description}
											</p>
											<ul className="flex gap-2 pb-2">
												{pkg.services.map(
													(service, index) => (
														<li
															key={index}
															className="bg-black rounded-md text-white px-2 py-1 max-md:text-[14px]"
														>
															{service}
														</li>
													)
												)}
											</ul>
											<div>
												<ul className="flex flex-col justify-start items-start">
													{pkg.features.map(
														(feature, index) => (
															<li
																key={index}
																className="flex gap-2 items-center"
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
											<button
												className="flex gap-2 justify-center items-center bg-lightRed hover:bg-black duration-200 text-white px-4 py-2 mt-4 rounded-md text-[22px] self-end"
												onClick={handleInquireNowClick}
											>
												<span className="text-[16px] uppercase font-bold">
													INQUIRE NOW
												</span>
												<FaChevronRight />
											</button>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<FormModal
				inquireOpen={inquireOpen}
				setInquireOpen={setInquireOpen}
			/>
		</Container>
	);
};

export default Packages;
