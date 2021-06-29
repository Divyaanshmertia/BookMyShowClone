import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../stylesheets/new.css";
import { useHistory } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import useWindowSize from "../utils/useWindowSize";
const CustomPage = (props) => {
  const { width } = useWindowSize();
  const history = useHistory();
  const { id } = useParams();
  console.log(id);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await Axios.get(`http://localhost:9160/movie/${id}`)
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
    <div>
      {/* visible only when window greater than 500px */}
      {width > 500 && (
        <>
          <div
            className={"new"}
            style={{
              background:
                "linear-gradient(-90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%,  rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",

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
                  marginTop: "18px",
                  marginLeft: "40px",
                }}
              />

              <div className="setName">
                <h1 style={{ paddingTop: "39px" }}>{cards.name}</h1>
                <p style={{ fontSize: "16px" }}>{cards.description}</p>
                <button className="button">{cards.ageBoundation}</button>

                <button className="button">
                  {cards.is3D ? String("3D & 2D") : String("2D")}
                </button>

                <Link to={`/movieseat/${cards._id}`}>
                  <button
                    onSubmit={() => {
                      let savedUSer = localStorage.getItem("user");
                      if (
                        savedUSer &&
                        Object.keys(this.state.user).length === 0
                      ) {
                        <Redirect to={"/login"} />;
                      }
                    }}
                    className="button_book"
                    style={{
                      // display: "inline-block",
                      marginTop: "136px",
                      backgroundColor: "rgb(255, 70, 101)",
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      color: "white",
                      borderRadius: "5px",
                      fontWeight: "500",
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
                    Book Tickets
                  </button>
                </Link>
              </div>

              <div class="content">
                <a class="header" href="#"></a>
              </div>
            </div>
          </div>
        </>
      )}
      {/* visible at any window size */}
    </div>
  );
};
export default withRouter(CustomPage);
