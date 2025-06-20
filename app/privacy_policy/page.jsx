import Container from "@/components/container/Container";
import Title from "@/components/title_sub/Title";
import { privacyPolicy, tableOfContents } from "@/data/privacyPolicy";

const PrivacyPolicy = () => {
	return (
		<Container className="pt-[100px]">
			<div className="flex flex-col items-center text-black text-center pt-[200px] mb-10 global-padding">
				<Title title="Privacy Policy" />
				<p className="text-darkGray mobile-center">
					Your privacy is important to us. This Privacy Policy
					explains how we collect, use, and safeguard your information
					when you visit our website.
				</p>
			</div>
			<div className="flex flex-column flex-row-reverse global-padding mt-10">
				<div className="w-1/4 p-4 border-l sticky top-[100px] max-md:static max-md:w-full max-md:border self-start">
					<h2 className="font-bold text-lg mb-4">
						Table of Contents
					</h2>
					<ul className="space-y-2">
						{tableOfContents.map((item) => (
							<li key={item.id}>
								<a
									href={`#${item.id}`}
									className="text-lightRed hover:underline"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className="w-3/4 p-4 max-md:w-full">
					{privacyPolicy.map((section, index) => (
						<div key={index}>
							<h3
								id={section.id}
								className="text-lightRed text-[22px] pt-4"
								style={{ scrollMarginTop: "80px" }}
							>
								{section.title}
							</h3>
							<p className="my-2 text-[16px] ">
								{section.content}
							</p>
							{section.list && (
								<ul>
									{section.list.map((item, idx) => (
										<li
											key={idx}
											className="text-[16px] pb-4"
										>
											<p>{item}</p>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default PrivacyPolicy;
