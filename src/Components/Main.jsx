import React, { useState } from "react";

import { FaShippingFast } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { ImGift } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { BsCart2, BsHeart, BsEye } from "react-icons/bs";

import Sidebar from "./Sidebar";
import AutoPlaySlider from "./Slider";
import Modal from "./Modal";
import { DiscountLargeCard, ProductCard } from "./Cards";

import prod1 from "../images/prod1.png";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Card = ({ icon, title, text }) => {
	return (
		<span className="">
			<h1 className="text-gray-700 font-semibold text-xl">{title}</h1>
			<p className="text-gray-500 text-sm">{text}</p>
		</span>
	);
};

const Main = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="mx-16">
			{/* hero section */}
			<div className="flex justify-between gap-x-2 w-full">
				{/* sidebar */}
				<Sidebar className="w-1/5 min-w-max" />
				{/* carousel */}
				<AutoPlaySlider className="" />
			</div>
			<div className="grid grid-cols-2 gap-x-4 gap-y-3 md:-mt-44 my-7 md:grid-cols-4 md:gap-x-6 ">
				<div className="flex items-center gap-x-1 p-3 shadow-sm bg-gray-50 md:shadow-md shadow-gray-400 rounded md:hover:scale-1 hover:shadow hover:shadow-orange-400">
					<FaShippingFast className="text-5xl text-lime-500  mr-1" />
					<Card title={"Free Shipping"} text={"For orders above Ksh. 10, 000"} />
				</div>
				<div className="flex items-center gap-x-1 p-3 shadow-sm bg-gray-50 md:shadow-md shadow-gray-400 rounded md:hover:scale-1 hover:shadow hover:shadow-orange-400">
					<ImGift className="text-5xl text-lime-500  mr-1" />
					<Card title={"Smart Gift Card"} text={"Buy KSh 100, 000 to get card"} />
				</div>
				<div className="flex items-center gap-x-1 p-3 shadow-sm bg-gray-50 md:shadow-md shadow-gray-400 rounded md:hover:scale-1 hover:shadow hover:shadow-orange-400">
					<GiWallet className="text-5xl text-lime-500  mr-1" />
					<Card title={"Quick Payment"} text={"100% secure payment"} />
				</div>
				<div
					onClick={() => setShowModal(true)}
					className="flex items-center gap-x-1 p-3 shadow-sm bg-gray-50 md:shadow-md shadow-gray-400 rounded md:hover:scale-1 hover:shadow hover:shadow-orange-400">
					<BiSupport className="text-5xl text-lime-500 mr-1" />
					<Card title={"24/7 Support"} text={"Quick Support"} />
				</div>
			</div>

			<div className="my-6">
				<h1 className="text-white uppercase text-xl font-semibold text-center bg-cyan-600 py-1.5 my-6 rounded">
					trending
				</h1>
				<ul className="text-center capitalize text-zinc-600 flex justify-center items-center space-x-10 ">
					<li className="text-lg font-sans text-zinc-600 cursor-pointer hover:text-green-700 focus:font-semibold focus:text-lime-700">
						Top Products
					</li>
					<li className="text-lg font-sans text-zinc-600 cursor-pointer hover:text-green-700 focus:font-semibold focus:text-lime-700">
						New Arrivals
					</li>
					<li className="text-lg font-sans text-zinc-600 cursor-pointer hover:text-green-700 focus:font-semibold focus:text-lime-700">
						Best Sellers
					</li>
				</ul>
				<div className="my-5 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 2xl:grid-cols-6 2xl:gap-8">
					<ProductCard
						image="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYSUyMGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"Ksh 20 000"}
						oldprice={"Ksh 32 000"}
						tag={"sale"}
						quickview={<BsEye />}
						wishlist={<BsHeart />}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29mYSUyMHNldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
						category={"sofa"}
						name={"Brown leather 3-seater"}
						price={"Ksh 213 000"}
						oldprice={"Ksh 272 000"}
						tag={"new"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mYSUyMGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
						category={"sofa"}
						name={"Green fabric sofa"}
						price={"Ksh 162 000"}
						oldprice={"Ksh 196 000"}
						tag={"sale"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"Ksh 3000"}
						oldprice={"Ksh 5000"}
						tag={"new"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image="https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNvZmElMjBiZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
						category={"sofa"}
						name={"Beige lether 2-ft"}
						price={"Ksh 120 000"}
						oldprice={"Ksh 136 999"}
						tag={"sale"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image="https://images.unsplash.com/photo-1515378866965-f80dcd891c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHNvZmElMjBzZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
						category={"sofa"}
						name={"Leather couch 2-seater"}
						price={"Ksh 180 000"}
						oldprice={"Ksh 210 000"}
						tag={"sale"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
				</div>
			</div>

			<div className="my-6">
				<h1 className="text-white uppercase text-xl font-semibold text-center bg-cyan-600 py-1.5 md:mb-10 md:mt-16 my-8 rounded">
					our products
				</h1>
				<ul className="text-center capitalize text-zinc-600 flex justify-center items-center space-x-10 ">
					<li className="text-lg font-sans text-zinc-600 cursor-pointer hover:text-green-700 focus:font-semibold focus:text-lime-700">
						All Products
					</li>
					<li className="text-lg font-sans text-zinc-600 cursor-pointer hover:text-green-700 focus:font-semibold focus:text-lime-700">
						New Arrivals
					</li>
					<li className="text-lg font-sans text-zinc-600 cursor-pointer hover:text-green-700 focus:font-semibold focus:text-lime-700">
						Best Sellers
					</li>
					<li className="text-lg font-sans text-zinc-600 cursor-pointer hover:text-green-700 focus:font-semibold focus:text-lime-700">
						Today Deals
					</li>
				</ul>
				<div className="my-5 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 2xl:grid-cols-6 2xl:gap-8">
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"$180"}
						oldprice={"240"}
						tag={"new"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"$180"}
						oldprice={"240"}
						tag={"sale"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"$180"}
						oldprice={"240"}
						tag={"new"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"$180"}
						oldprice={"240"}
						tag={"sale"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"$180"}
						oldprice={"240"}
						tag={"new"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"$180"}
						oldprice={"240"}
						tag={"sale"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
					<ProductCard
						image={prod1}
						category={"chair"}
						name={"Pacific blue resting chair"}
						price={"$180"}
						oldprice={"240"}
						tag={"new"}
						icon={<BsCart2 />}
						buttonText={"Add to cart"}
					/>
				</div>
			</div>

			<Modal visible={showModal} onClose={() => setShowModal(false)}>
				<Login visible={showModal} onClose={() => setShowModal(false)} />
			</Modal>
		</div>
	);
};

export default Main;
