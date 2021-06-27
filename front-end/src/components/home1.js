import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/home.css";
import Slider from "react-slick";

// function SampleNextArrow(props) {
// 	const { className, style, onClick } = props;
// 	return (
// 		<div
// 			className={className}
// 			style={{ ...style, display: "block", background: "red", width: "10px" }}
// 			onClick={onClick}
// 		/>
// 	);
// }

export default function Home(props) {
	const renderSlides = () =>
		[
			{
				url: "https://in.bmscdn.com/showcaseimage/eventimage/tvk-cultural-presents-ponniyin-selvan-01-06-2021-07-04-41-892.jpg",
			},
			{
				url: "https://in.bmscdn.com/showcaseimage/eventimage/tvk-cultural-presents-ponniyin-selvan-01-06-2021-07-04-41-892.jpg",
			},
			{
				url: "https://in.bmscdn.com/showcaseimage/eventimage/tvk-cultural-presents-ponniyin-selvan-01-06-2021-07-04-41-892.jpg",
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
				// nextArrow={<SampleNextArrow />}
				// prevArrow={<SamplePrevArrow />}
			>
				{renderSlides()}
			</Slider>
		</div>
	);
}
