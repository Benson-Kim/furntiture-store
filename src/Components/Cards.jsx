import React from "react";

export const Card = ({ icon, title, text }) => {
	return (
		<article className=" ">
			<span className="">
				<h1 className="text-gray-700 font-semibold text-2xl">{title}</h1>
				<p className="text-gray-500 text-sm">{text}</p>
			</span>
		</article>
	);
};

export function SmallCard({ icon, title, text }) {
	return (
		<article className="flex gap-x-2 ">
			<i className="h-full">{icon}</i>
			<span className="">
				<h1 className="text-gray-700 font-semibold text-2xl">{title}</h1>
				<p className="text-gray-500 text-sm">{text}</p>
			</span>
		</article>
	);
}

export const LargeCard = () => {
	return <div>Large Cards</div>;
};

export const ProductCard = ({ image, category, name, price, oldprice, tag, icon, buttonText, wishlist, quickview }) => {
	return (
		<article className="shadow-md shadow-gray-200 rounded p-2 hover:shadow-gray-400 border-t">
			<span className="bg-green-400 px-1.5 text-white text-sm text-center rounded-b capitalize">{tag}</span>
			<div className="relative fkex items-center justify-center">
				<img src={image} alt={name} className="rounded w-full" />
			</div>
			<div className="m-3">
				<h1 className="uppercase text-gray-500  text-sm">{category}</h1>
				<h2 className="font-semibold text-gray-800 ">{name}</h2>

				<div className="flex flex-col gap-y-3 sm:flex-row items-center justify-between my-2">
					<span className="flex items-center gap-x-4">
						<h3 className="font-semibold text-lime-500">{price}</h3>
						<p className="line-through text-gray-400">{oldprice}</p>
					</span>
					<span></span>
				</div>
			</div>
			<button className="w-full py-1.5 rounded flex text-lg font-sans items-center justify-center gap-x-3 text-white font-light bg-green-500 hover:shadow hover:shadow-gray-400">
				{icon}
				{buttonText}
			</button>
		</article>
	);
};

export const TestimonialCard = (user, review) => {
	return (
		<div class="p-4 w-1/3 text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{user}</h5>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{review}</p>
		</div>
	);
};

export const DiscountLargeCard = ({ heading, button, text }) => {
	return (
		<div className="font-sans absolute">
			<h2 className="font-semibold font-sans text-lg text-gray-800 py-3">{heading}</h2>
			<p className="text-lime-500 text-lg py-2">{text}</p>
			<button className="text-gray-500 py-3">{button}</button>
		</div>
	);
};

export const SliderCard = ({ image, heading, button, description, offer }) => {
	return (
		<div className=" bg-gray-50 rounded mt-4 relative overflow-hidden">
			<div className="absolute top-0 right-0 py-6 pr-10 w-2/5">
				<h1 className="text-lime-800 font-sans text-xl uppercase">{heading}</h1>
				<p className="text-3xl text-black capitalize mb-5 font-mono my-2">{description}</p>
				<span className="text-gray-500 text-xl my-6">{offer}</span>
				<div className="py-1 px-3 my-3 w-fit rounded-xl text-white bg-lime-700 uppercase text-lg cursor-pointer hover:bg-cyan-500">
					{button}
				</div>
			</div>
			<div className="">
				<div className="p-6">
					<img src={image} alt={heading} className="object-cover w-1/2 h-52 rounded opacity-90" />
				</div>
			</div>
		</div>
	);
};
