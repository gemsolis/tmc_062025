import service1 from "@/public/assets/images/service-1.jpg";
import service2 from "@/public/assets/images/commercial.jpg";
import service3 from "@/public/assets/images/remote.jpg";
import service4 from "@/public/assets/images/repair.jpg";
import door from "../public/assets/images/door.webp";
import gate from "../public/assets/images/gate.webp";
import time from "../public/assets/images/time.webp";
import fingerprint from "../public/assets/images/fingerprint.webp";

import consult from "../public/assets/images/consult.png";
import plan from "../public/assets/images/plan.png";
import scheduling from "../public/assets/images/scheduling.png";
import installation from "../public/assets/images/installation.png";
import training from "../public/assets/images/training.png";
import support from "../public/assets/images/ongoing-support.png";

export const servicesData = [
	{
		name: "Residential CCTV Installation",
		description:
			"Protect your home with expertly installed CCTV systems designed to keep your family safe. Whether it's a small house or a large property, we provide customized solutions using the latest technology to ensure 24/7 security and peace of mind.",
		image: service1,
	},
	{
		name: "Commercial CCTV Installation",
		description:
			"Protect your investment with our professional commercial CCTV installations. Our solutions are customized to enhance security, monitor key areas, and ensure the safety of your staff and customers around the clock.",
		image: service2,
	},
	{
		name: "Remote Monitoring and Support",
		description:
			"Stay connected to your property with our reliable remote monitoring solutions. Our system provide real-time alers and surveillance access from anywhere, ensuring you can oversee your security 24/7.",
		image: service3,
	},
	{
		name: "CCTV Maintenance and Repair",
		description:
			"Maintain the integrity of your security systems with our reliable CCTV maintenance and repair services. Our team is commited to providin timely support and expert repairs, ensuring your surveillance remains effective and efficient.",
		image: service4,
	},
];

export const additionalService = [
	{
		image: door,
		title: "Door Access Installation",
		description:
			"Enhance your premises' security with our professional door access installation services, providing convenient and reliable access control solutions.",
	},
	{
		image: gate,
		title: "Walk-Through Gate",
		description:
			"Ensure safety and peac of mind with our efficient walk-through gate installation services, offering advanced security screening for your premises.",
	},
	{
		image: time,
		title: "Time Attendance Machine",
		description:
			"Optimize workforce management with our time attendance machine installation, ensuring accurate tracking and efficient monitoring of employee attendance.",
	},
	{
		image: fingerprint,
		title: "Biometric Setup",
		description:
			"Elevate your security measures with our expert biometic setup services, offering cutting-edge identification and access control solitions tailored to your needs.",
	},
];

export const processSteps = [
	{
		step: 1,
		title: "Initial Consultation",
		description:
			"We start with a consultation to understand your security needs and assess your site for the best CCTV setup.",
		image: consult, // Image for Free Consultation
	},
	{
		step: 2,
		title: "Site Assessment & Custom Plan",
		description:
			"Our experts analyze your premises to create a custom CCTV plan that ensures full coverage and security.",
		image: plan, // Image for Site Assessment & Custom Plan
	},
	{
		step: 3,
		title: "Quotation & Scheduling",
		description:
			"After the assessment, we provide a detailed quote. Once approved, we arrange the installation at your convenience.",
		image: scheduling, // Image for Quotation & Scheduling
	},
	{
		step: 4,
		title: "Professional Installation",
		description:
			"Our technicians install the cameras and system with precision, ensuring optimal placement and minimal disruption.",
		image: installation, // Image for Professional Installation
	},
	{
		step: 5,
		title: "Testing & Training",
		description:
			"We test each component, configure the system, and train you to use it, including remote access for monitoring on the go.",
		image: training, // Image for Testing & Training
	},
	{
		step: 6,
		title: "Ongoing Support",
		description:
			"We offer continued support and maintenance, ensuring your CCTV system remains effective and up-to-date.",
		image: support, // Image for Ongoing Support
	},
];
