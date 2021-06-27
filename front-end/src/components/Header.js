import React from "react";
import "../stylesheets/Header.css";
import logo from "../picture/bookmyshow.png";

function Header() {
	return (
		<header>
			<div className="header1">
				<img className="header_logo" src={logo} alt="logo" />

				<div className="header_search">
					<div className="header_input">
						<i className="search icon" style={{ color: "grey" }} />
						<input
							className="search_text"
							type="text"
							placeholder="Search for Movies, Events, Plays, Sports and Activities"
						/>
					</div>
				</div>

				<div className="header_nav">
					<div>
						<button class="header_loc">
							<i aria-hidden="true" class="world icon"></i>
						</button>
					</div>
					<div>
						<button type="submit" className="header_log">
							Sign in
						</button>
					</div>
					<div>
						<i class="bars icon" style={{ color: "white" }}></i>
					</div>
				</div>
			</div>
			<div className="second_header">
				<div className="second_header1">
					<a href="/" class="sec_opt1">
						Movies
					</a>
					<a href="/" class="sec_opt1">
						Stream
					</a>
					<a href="/" class="sec_opt1">
						Events
					</a>
					<a href="/" class="sec_opt1">
						Plays
					</a>
					<a href="/" class="sec_opt1">
						Sports
					</a>
					<a href="/" class="sec_opt1">
						Activities
					</a>
					<a href="/buzz" class=""></a>
				</div>
				<div className="sec_header_navbar">
					<a href="/" class="sec_opt2">
						ListYourShow
					</a>
					<a href="/" class="sec_opt2">
						Corporates
					</a>
					<a href="/" class="sec_opt2">
						Offers
					</a>
					<a href="/" class="sec_opt2">
						Gift Cards
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
