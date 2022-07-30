import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
	return (
		<div className="flex justify-between px-16 py-2.5 bg-green-500 text-white">
			<h1 className="font-normal">Welcome to our online store</h1>
			<div>
				<span className="font-light px-3">English</span>|
				<Link to="/login" className="font-light px-3 hover:font-normal">
					Login or Sign up
				</Link>
			</div>
		</div>
	);
};

export default TopNav;
