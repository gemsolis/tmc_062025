import Title from "@/components/title_sub/Title";
import { animateFadeUp, animateScaleFade } from "@/data/animation";
import { processSteps } from "@/data/services";
import { motion } from "framer-motion";
import Image from "next/image";

const Process = () => {
	return (
		<div>
			<motion.div
				className="flex flex-col items-center max-lg:items-center"
				{...animateFadeUp(0.5)}
			>
				<Title title="Your Security, Step-by-Step" />
				<p className="mobile-center">
					From consultation to ongoing support, here’s how we make
					securing your property simple and effective.
				</p>
			</motion.div>
			<div className="flex flex-col gap-6 mt-20 max-sm:hidden">
				{processSteps.map((process, index) => (
					<motion.div
						key={index}
						className={`flex justify-center items-start gap-4 ${
							index % 2 === 1 ? "flex-row-reverse" : ""
						}`}
						{...animateScaleFade(0.5)}
					>
						<div className="w-[300px] flex flex-wrap flex-col max-sm:items-center">
							<h4 className="text-lightRed text-[18px] max-md:text-[16px]">
								{process.title}
							</h4>
							<p className="text-slate-700 text-[14px]">
								{process.description}
							</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<span className="bg-black text-white p-2 font-bold text-[22px] rounded-full max-md:text-[16px]">
								{process.step}
							</span>
							<span
								className={`flex h-[200px] w-[3px] bg-lightRed ${
									index === 5 ? "hidden" : ""
								} `}
							></span>
						</div>
						<div
							className={`flex justify-start gap-4 w-[300px] max-md:w-[100px] ${
								index % 2 === 1 ? "justify-end" : ""
							}`}
						>
							<Image src={process.image} width={64} />
						</div>
					</motion.div>
				))}
			</div>
			<div className="flex flex-col gap-6 mt-20 sm:hidden">
				{processSteps.map((process, index) => (
					<motion.div
						key={index}
						className={`flex flex-col justify-center items-center gap-4 ${
							index % 2 === 1 ? "flex-row-reverse" : ""
						}`}
						{...animateScaleFade(0.5)}
					>
						<div className="w-[300px] flex flex-wrap flex-col max-sm:items-center gap-2">
							<span className="bg-black text-white p-2 font-bold text-[22px] rounded-full max-md:text-[16px]">
								{process.step}
							</span>
							<div
								className={`flex justify-center gap-4 w-[300px] max-md:w-[100px] ${
									index % 2 === 1 ? "justify-end" : ""
								}`}
							>
								<Image src={process.image} width={64} />
							</div>
							<h4 className="text-lightRed text-[18px] max-md:text-[16px]">
								{process.title}
							</h4>
							<p className="text-slate-700 text-[14px] text-center">
								{process.description}
							</p>
						</div>
						<div>
							<span
								className={`flex h-[100px] w-[3px] bg-lightRed ${
									index === 5 ? "hidden" : ""
								} `}
							></span>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Process;
