export const animateNav = (delay = 0) => ({
	initial: { opacity: 0, y: -50 },
	whileInView: { opacity: 1, y: 0 },
	transition: {
		duration: 1,
		ease: "easeOut",
		delay: delay,
	},
});

export const animateFadeUp = (delay = 1.2) => ({
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 },
	transition: {
		duration: 0.5,
		ease: "easeInOut",
		delay: delay,
	},
	viewport: { once: true },
});

export const animateSlideLeft = (delay = 1.2) => ({
	initial: { opacity: 0, x: 50 },
	whileInView: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 50 },
	transition: {
		duration: 1,
		ease: "easeOut",
		delay: delay,
	},
	viewport: { once: true },
});

export const animateSlideRight = (delay = 1.2) => ({
	initial: { opacity: 0, x: -50 }, // Start 50px to the left
	whileInView: { opacity: 1, x: 0 }, // Move to center
	exit: { opacity: 0, x: -50 }, // Exit back to the left
	transition: {
		duration: 1,
		ease: "easeOut",
		delay: delay,
	},
	viewport: { once: true }, // Animate only once when it enters the viewport
});

export const animateFlip = (delay = 0) => ({
	initial: { opacity: 0, rotateY: 0, z: 0 },
	whileInView: { opacity: 1, rotateY: -360, z: -260 },
	transition: { duration: 0.8, ease: "easeInOut", delay },
	style: {
		transformOrigin: "50% 50%",
		overflow: "hidden",
	},
	viewport: { once: true, margin: "-200px" },
});

export const animateScaleFade = (delay = 0) => ({
	initial: { opacity: 0, scale: 0.8 },
	whileInView: { opacity: 1, scale: 1 },
	transition: { duration: 0.5, ease: "easeInOut", delay },
	style: {
		transformOrigin: "50% 50%",
		overflow: "hidden",
	},
	viewport: { once: true, margin: "-200px" },
});

export const animateScaleToOriginal = (delay = 0) => ({
	initial: { opacity: 0, scale: 1.5 },
	whileInView: { opacity: 1, scale: 1 },
	transition: {
		duration: 1,
		ease: "easeInOut",
		delay: delay,
	},
	viewport: { once: true },
});
