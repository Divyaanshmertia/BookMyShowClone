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
    <div className={"new"}>
      <div className={"seconddiv"}>
        <a class="image" href="javascript:">
          <div className={"new"}>
            <img
              src={cards.link}
              style={{ borderRadius: "20px", width: "222px", height: "290px" }}
            />

            <h3>{cards.name}</h3>
            <p>{cards.ageBoundation}</p>
            <p>{cards.is3D ? String("3D & 2D") : String("2D")}</p>
            <Link to={`/movieseat/${cards._id}`}>
              <button>BookingSeats </button>
            </Link>
          </div>
        </a>

        <div class="content">
          <a class="header" href="#"></a>
        </div>
      </div>
    </div>
  );
};
export default CustomPage;
