import React from "react";

const Container = ({ children }) => {
	return (
		<div className="w-full flex flex-col mb-[100px] max-lg:mb-[80px]">
			{children}
		</div>
	);
};

export default Container;
