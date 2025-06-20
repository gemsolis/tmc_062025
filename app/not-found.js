import Image from "next/image";
import Link from "next/link";
import fourzerofour from "@/public/assets/images/404.png";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const Custom404 = () => {
	return (
		<div className="w-full h-[80vh] flex flex-col justify-center items-center gap-6">
			<Image src={fourzerofour} width={200} alt="404 Page" />
			<div className="mt-2 text-center">
				<h1 className="text-deepRed text-[24px]">
					404 - Page Not Found
				</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</div>
			<Link href="/">
				<PrimaryButton title="Go to Homepage" />
			</Link>
		</div>
	);
};

export default Custom404;
