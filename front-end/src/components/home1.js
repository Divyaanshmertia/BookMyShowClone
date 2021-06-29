import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/home.css";
import Slider from "react-slick";
// import useWindowSize from "../utils/useWindowSize";

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
class Home1 extends React.Component {
  render() {
    let settings_3 = {
      dots: false,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 3,

      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
      ],
    };

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
            <img
              width="100%"
              src={num.url}
              style={{ width: "100%", border: "0", height: "auto" }}
            />
            ;
          </div>
        );
      });

    return (
      <div className="Home">
        <Slider
          {...settings_3}
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
}
export default Home1;
