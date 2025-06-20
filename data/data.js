import shield from "../public/assets/images/shield.png";
import quality from "../public/assets/images/quality.png";
import tag from "../public/assets/images/tag.png";
import tools from "../public/assets/images/tools.png";
import support from "../public/assets/images/support.png";
import smile from "../public/assets/images/smile.png";

import { FiPhone, FiFacebook } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

export const navLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "About Us", url: "/about_us" },
  { name: "Contact Us", url: "/contact_us" },
];

export const footerLinks = [
  { name: "FAQs", url: "/faqs" },
  { name: "Privacy Policy", url: "/privacy_policy" },
  { name: "Cookies Policy", url: "/cookies_policy" },
  { name: "Terms and Conditions", url: "/terms_and_conditions" },
];

export const cardData = [
  {
    icon: shield,
    title: "Expertise You Can Trust",
    description:
      "With over 8 of experience in CCTV installation, we pride ourselves on delivering reliable and professional security solutions for homes and businesses.",
  },
  {
    icon: quality,
    title: "Cutting-Edge Technology",
    description:
      "We use only the latest technology in high-definition cameras, remote monitoring systems, and DVRs, ensuring clear, reliable footage 24/7.",
  },
  {
    icon: tag,
    title: "Affordable Pricing",
    description:
      "Our competitive pricing ensures that you get the best value for your investment. Choose from a range of flexible packages designed to suit your budget without compromising on quality.",
  },
  {
    icon: tools,
    title: "Professional Installation",
    description:
      "Our expert technicians guarantee quick and seamless installation, minimizing disruption while maximizing protection.",
  },
  {
    icon: support,
    title: "Support & Maintenance",
    description:
      "We provide continuous support and maintenance to keep your CCTV system running smoothly, ensuring your property stays secure at all times.",
  },
  {
    icon: smile,
    title: "100% Client Satisfaction",
    description:
      "We’re committed to ensuring every client feels safe and secure. Our customer testimonials speak to our high level of service and client care.",
  },
];

export const services = [
  {
    title: "Residential CCTV Installation",
    description:
      "We offer customized CCTV installation for homes, ensuring 24/7 surveillance and peace of mind. Our systems come equipped with night vision, motion detection, and mobile access, so you can monitor your property anytime, anywhere..",
  },
  {
    title: "Commercial CCTV Installation",
    description:
      "From small offices to large commercial buildings, we provide scalable CCTV solutions that safeguard your business assets. Our cameras are discreet yet powerful, offering high-quality footage and the ability to monitor multiple areas simultaneously.",
  },
  {
    title: "Remote Monitoring and Support",
    description:
      "Our CCTV systems allow you to access live video feeds and recorded footage through your smartphone, tablet, or computer. Whether you’re at home or on the go, you’ll have full control over your security system with real-time alerts and remote management.",
  },
  {
    title: "CCTV Maintenance and Repair",
    description:
      "We offer regular maintenance packages to ensure your cameras and recording equipment are always in top condition. From troubleshooting issues to upgrading outdated systems, our team provides prompt, reliable support to keep your property secure at all times.",
  },
];

export const packages = [
  {
    title: "4 Channel Starter Kit",
    image: {
      src: "/assets/images/package1.png",
    },
    items: [
      "1x DS-7204HGHI-K1 DVR",
      "2x DS-2CE56DOT-IRP (3.6MM) Dome Cameras",
      "2x 60 FEET POWER/DATA CABLES",
      "1x 4 WAY SPLITTER",
      "1x ALL IN ONE POWER ADAPTOR",
      "1x MOUSE",
    ],
  },
  {
    title: "8 Channel Professional Kit",
    image: {
      src: "/assets/images/package1.png",
    },
    items: [
      "1x DS-7208HQHI-K1 DVR",
      "4x DS-2CE56D7T-ITM Dome Cameras (2.8MM)",
      "4x 100 FEET POWER/DATA CABLES",
      "1x 8 WAY SPLITTER",
      "1x ALL IN ONE POWER ADAPTOR",
      "1x MOUSE",
    ],
  },
  {
    title: "16 Channel Complete Kit",
    image: {
      src: "/assets/images/package1.png",
    },
    items: [
      "1x DS-7216HQHI-K2 DVR",
      "8x DS-2CE56D7T-IRM Dome Cameras (2.8MM)",
      "8x 150 FEET POWER/DATA CABLES",
      "1x 16 WAY SPLITTER",
      "1x ALL IN ONE POWER ADAPTOR",
      "1x MOUSE",
    ],
  },
  {
    title: "4 Channel Wireless Kit",
    image: {
      src: "/assets/images/package1.png",
    },
    items: [
      "1x DS-7204HGHI-K1 DVR",
      "2x Wireless DS-2CE56C0T-IRMMF Cameras",
      "2x 60 FEET POWER CABLES",
      "1x 4 WAY SPLITTER",
      "1x ALL IN ONE POWER ADAPTOR",
      "1x MOUSE",
    ],
  },
  {
    title: "8 Channel Night Vision Kit",
    image: {
      src: "/assets/images/package5.png",
    },
    items: [
      "1x DS-7208HQHI-K1 DVR",
      "4x DS-2CE56D7T-IT3F Night Vision Cameras",
      "4x 100 FEET POWER/DATA CABLES",
      "1x 8 WAY SPLITTER",
      "1x ALL IN ONE POWER ADAPTOR",
      "1x MOUSE",
    ],
  },
  {
    title: "16 Channel Ultra HD Kit",
    image: {
      src: "/assets/images/package1.png",
      alt: "16 Channel Ultra HD Kit",
    },
    items: [
      "1x DS-7216HQHI-K2 DVR",
      "8x DS-2CE56U7T-IT3 Ultra HD Cameras",
      "8x 150 FEET POWER/DATA CABLES",
      "1x 16 WAY SPLITTER",
      "1x ALL IN ONE POWER ADAPTOR",
      "1x MOUSE",
      "1x 2TB Hard Drive",
    ],
  },
];

export const contactInfo = [
  {
    icon: <FiPhone />,
    title: "Phone Number",
    info: "+639 154 982 390",
    link: "tel:+639 154 982 390",
  },
  {
    icon: <MdAlternateEmail />,
    title: "Email Address",
    info: "kljg.enterprise@gmail.com",
    link: "mailto:kljg.enterprise@gmail.com",
  },
  {
    icon: <TiLocationOutline />,
    title: "Store Location",
    info: "St Barangay, 349 M. Gregorio San Antonio, Cavite City, 4100 Cavite",
    link: "https://maps.app.goo.gl/eQHMjgcJCoDG9nyq6",
  },
  {
    icon: <FiFacebook />,
    title: "Facebook Profile",
    info: "TMC CCTV and Structured Cabling",
    link: "https://www.facebook.com/TMC.CCTV.StructuredCabling",
  },
];
