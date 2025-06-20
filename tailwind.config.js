/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				deepRed: "#950000",
				lightRed: "#ff5353",
				darkGray: "#6b7280",
				lightGray: "#e0e0e0",
			},
			backgroundImage: {
				"hero-bg": "url('../public/assets/images/tmc_hero.png')",
			},
		},
	},
	plugins: [],
};
