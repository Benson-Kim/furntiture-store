import React, { Component } from "react";
import Slider from "react-slick";
import { SliderCard } from "./Cards";

export default class AutoPlaySlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
		};
		return (
			<div className="max-w-4xl w-full aspect-video">
				<Slider {...settings}>
					<SliderCard
						image="https://images.unsplash.com/photo-1542139688013-5e39ad5509ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNvZmElMjBiZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
						heading="Offer 2022"
						button="get it now"
						description="pick your book, and relax"
						offer="comes with 1 throw pillow"
					/>
					<SliderCard
						image="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29mYSUyMGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
						heading="top collections 2022"
						button="shop now"
						description="we serve your dream furniture"
						offer="Get 50% off all products"
					/>
					<SliderCard
						image="https://images.unsplash.com/photo-1612152668323-b7f49335ebde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNvZmElMjBiZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
						heading="Exlusive offer"
						button="grab them now!!"
						description="throw pillows at throw away price"
						offer="Buy 5 get 1 throw pillow"
					/>
					<SliderCard
						image="https://images.unsplash.com/photo-1528208079124-a2387f039c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						heading="top collections 2022"
						button="shop now"
						description="we serve your dream furniture"
						offer="Get 50% off all products"
					/>
				</Slider>
			</div>
		);
	}
}
