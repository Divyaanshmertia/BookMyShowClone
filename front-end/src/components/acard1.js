import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/acard.css";

const Acard = (props) => {
  const [screenType, setScreenType] = useState("SHOW");
  const { card } = props;

  return (
    <div className={"acarddd"}>
      <span className="image">
        <a href={`/movie/${card._id}`}>
          <img
            src={card.link}
            style={{ borderRadius: "71px", width: "112px", height: "105px" }}
          />
          <h7 style={{ fontSize: "30px" }}>{card.name}</h7>
        </a>
      </span>

      <div class="content">
        <a class="header" href="#"></a>
      </div>
    </div>
  );
};

export default Acard;
