import React, { useState, useEffect } from "react";
import "../stylesheets/Header_test.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Acard from "./acard1";

// const SearchBar = async (props) => {
// 	await Axios.post("http://localhost:9160/name", `${props.name}`)
// 		.then((movie) => {
// 			setcards(movie);
// 		})
// 		.catch((error) => {
// 			console.error("Some error", error);
// 		});

// 	const renderCards = cards.map((card, index) => <Acard card={card} />);

// 	// const movies = `http://localhost:/movie/name`;
// 	return (
// 		<div>
// 			<div class="ui three column grid">{renderCards}</div>
// 		</div>
// 	);
// };

const SearchBar = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await Axios.post("http://localhost:9160/name", { name: props.name })
        .then(({ data: foundMovies }) => {
          console.info(foundMovies);
          setCards(foundMovies);
        })
        .catch((error) => {
          console.error("Some error", error);
        });
    };
    fetchMovies();
  }, [props.name]);

  const renderCards = cards.map((card, index) => <Acard card={card} />);

  return (
    <div className={"section12"}>
      <div class="ui three column grid"> {renderCards}</div>
    </div>
  );
};
export default SearchBar;
