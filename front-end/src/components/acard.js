import React, { useState } from "react";
import { Link } from "react-router-dom";

const Acard = (props) => {
  const [screenType, setScreenType] = useState("SHOW");
  const { card } = props;

  return (
    <div className={"section"}>
      <a class="image" href="javascript:">
        <img
          src={card.link}
          style={{ borderRadius: "20px", width: "222px", height: "290px" }}
        />
        <h3>{card.name}</h3>
        <p>{card.ageBoundation}</p>
        <p>{card.is3D ? String("3D & 2D") : String("2D")}</p>
        <Link to={`/movie/${card._id}`}>
          <button>Movie details </button>{" "}
        </Link>
      </a>
      <div class="content">
        <a class="header" href="#"></a>
      </div>
    </div>
  );
};

export default Acard;
