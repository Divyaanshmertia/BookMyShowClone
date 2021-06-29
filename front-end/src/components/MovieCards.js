import React, { useEffect, useState } from "react";
import "../stylesheets/MovieCard.css";
import axios from "axios";
import Acard from "./acard";

const ShowCards = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get("http://localhost:9160/getAllMovies")
        .then(({ data: foundMovies }) => {
          console.info(foundMovies);
          setCards(foundMovies);
        })
        .catch((error) => {
          console.error("Some error", error);
        });
    };
    fetchMovies();
  }, []);

  const renderCards = cards.map((card, index) => <Acard card={card} />);

  return (
    <div className={"section"}>
      <h1 style={{ padding: "5vh 5%" }}>Movies</h1>
      <div class="ui three column grid">{renderCards}</div>
    </div>
  );
};

export default ShowCards;
