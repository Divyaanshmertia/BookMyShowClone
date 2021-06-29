import React, { useState } from "react";
import SearchBar from "./searchBar";
import "../stylesheets/Header.css";
import logo from "../picture/bookmyshow.png";
import useWindowSize from "../utils/useWindowSize";
// import { useHistory } from "react-router-dom";

function Header() {
  const { width } = useWindowSize();
  // const history = useHistory();
  // const routeChange = () => {
  // 	let path = `http://localhost:9160/search`;
  // 	history.push(path);
  // };

  const [find, setFind] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setFind(data);
  };
  return (
    <div>
      {width > 500 && (
        <>
          <header>
            <div>
              {width > 500 && (
                <>
                  <div className="header1">
                    <a href="/">
                      <img className="header_logo" src={logo} alt="logo" />
                    </a>

                    <div className="header_search">
                      <div className="header_input">
                        <i className="search icon" style={{ color: "grey" }} />

                        <input
                          className="search_text"
                          type="text"
                          placeholder="Search for Movies, Events, Plays, Sports and Activities"
                          value={find}
                          onChange={inputEvent}
                        />
                      </div>
                    </div>
                    <div className="search_results">
                      {find === "" ? null : <SearchBar name={find} />}
                    </div>
                    <div className="header_nav">
                      <div>
                        <a href="/location">
                          <button class="header_loc">Location</button>
                        </a>
                      </div>
                      <div>
                        <a href="/signup">
                          <button type="submit" className="header_log">
                            Sign Up
                          </button>
                        </a>
                      </div>
                      <div>
                        <button type="submit" className="header_menu">
                          <i class="bars icon" style={{ color: "white" }}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="second_header">
                    <div className="second_header1">
                      <a href="/movies" class="sec_opt1">
                        Movies
                      </a>
                      <a href="/error" class="sec_opt1">
                        Stream
                      </a>
                      <a href="/" class="sec_opt1">
                        Events
                      </a>
                      <a href="/error" class="sec_opt1">
                        Plays
                      </a>
                      <a href="/error" class="sec_opt1">
                        Sports
                      </a>
                      <a href="/error" class="sec_opt1">
                        Activities
                      </a>
                      <a href="/error" class="sec_opt1">
                        Buzz
                      </a>
                    </div>
                    <div className="sec_header_navbar">
                      <a href="/error" class="sec_opt2">
                        ListYourShow
                      </a>
                      <a href="/error" class="sec_opt2">
                        Corporates
                      </a>
                      <a href="/error" class="sec_opt2">
                        Offers
                      </a>
                      <a href="/error" class="sec_opt2">
                        Gift Cards
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </header>
        </>
      )}
    </div>
  );
}

export default Header;
