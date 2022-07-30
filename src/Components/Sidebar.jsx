import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
	return (
		<div className="hidden md:block">
			<h1 className="bg-green-500 text-white capitalize flex items-center justify-between px-3 py-3 -mt-12">
				All collections
			</h1>
			<ul className="">
				<li className="bg-gray-50 text-gray-600 border-b border-green-100 py-1 px-3 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white cursor-pointer">
					<Link to="/all">All</Link>
				</li>
				<li className="bg-gray-50 text-gray-600 border-b border-green-100 py-1 px-3 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white cursor-pointer">
					<Link to="/tables">Tables</Link>
				</li>
				<li className="bg-gray-50 text-gray-600 border-b border-green-100 py-1 px-3 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white cursor-pointer">
					<Link to="/chairs">Sofas and Chairs</Link>
				</li>
				<li className="bg-gray-50 text-gray-600 border-b border-green-100 py-1 px-3 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white cursor-pointer">
					<Link to="/cabinets">Cabinets</Link>
				</li>
				<li className="bg-gray-50 text-gray-600 border-b border-green-100 py-1 px-3 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white cursor-pointer">
					<Link to="/dressers">Wardrobes and Dressers</Link>
				</li>
				<li className="bg-gray-50 text-gray-600 border-b border-green-100 py-1 px-3 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white cursor-pointer">
					<Link to="/wallunits">Wall units and cup boards</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
