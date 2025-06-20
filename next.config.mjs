/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true, // Disables image optimization
	},
};

export default nextConfig;
