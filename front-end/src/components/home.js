import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/home.css";
import Slider from "react-slick";

export default function Home() {
	const renderSlides = () =>
		[
			{
				url: "https://in.bmscdn.com/showcaseimage/eventimage/dhruva-natchathiram-25-06-2021-08-13-08-219.jpg",
			},
			{
				url: "https://in.bmscdn.com/showcaseimage/eventimage/magic-beans--online-preschool-program-03-06-2021-11-07-29-134.jpg",
			},
			{
				url: "https://in.bmscdn.com/showcaseimage/eventimage/kitne-comics-the-02-06-2021-05-44-21-927.jpg",
			},
		].map((num) => {
			return (
				<div>
					<img width="100%" src={num.url} />;
				</div>
			);
		});

	return (
		<div className="Home">
			<Slider
				dots={true}
				centerMode={true}
				slidesToShow={1}
				slidesToScroll={1}
				autoplay={true}
				autoplaySpeed={3000}
				infinite={true}
			>
				{renderSlides()}
			</Slider>
		</div>
	);
}
