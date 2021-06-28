import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../stylesheets/new.css";

const CustomPage = (props) => {
  const { id } = useParams();
  console.log(id);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get(`http://localhost:9160/movie/${id}`)
        .then(({ data: foundMovies }) => {
          console.info("foundMovies");
          setCards(foundMovies);
        })
        .catch((error) => {
          console.error("Some error", error);
        });
    };
    fetchMovies();
  }, []);

  return (
    <div
      className={"new"}
      style={{
        backgroundImage: `url(${cards.BannerLink})`,
      }}
    >
      <div className={"seconddiv"} style={{ display: "flex" }}>
        {/* <div className={"new"}> */}
        <img
          src={cards.link}
          style={{
            borderRadius: "20px",
            width: "auto",
            height: "392px",
            marginTop: "27px",
            marginLeft: "40px",
          }}
        />

        <div className="setName">
          <h1>{cards.name}</h1>

          <p>{cards.ageBoundation}</p>

          <p>{cards.is3D ? String("3D & 2D") : String("2D")}</p>

          <Link to={`/movieseat/${cards._id}`}>
            <button
              style={{
                display: "inline-block",
                backgroundColor: "rgb(255, 70, 101)",
                color: "white",
                borderRadius: "5px",
                fontSize: "initial",
                height: "32px",
                width: "174px",
                border: "transparent",
                cursor: "pointer",
                paddingRight: "12px",
                paddingLeft: "12px",
                paddingTop: "8px",
                paddingBottom: "18px",
              }}
            >
              BookingSeats{" "}
            </button>
          </Link>
        </div>

        <div class="content">
          <a class="header" href="#"></a>
        </div>
      </div>
      //{" "}
    </div>
  );
};
export default CustomPage;
