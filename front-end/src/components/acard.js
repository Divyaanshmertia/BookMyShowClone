import React, { useState } from "react";

const Acard = (props) => {
	const [screenType, setScreenType] = useState("SHOW");
	const { card } = props;

	return (
		<div className={"section"}>
			{screenType === "SHOW" ? (
				<>
					<div>
						<a
							class="image"
							href="javascript:;"
							onClick={(e) => setScreenType("See Details")}
						>
							<img
								src={card.link}
								style={{
									borderRadius: "20px",
									width: "222px",
									height: "290px",
								}}
							/>
							<h3>{card.name}</h3>
							<p>{card.ageBoundation}</p>
							<p>{card.is3D ? String("3D & 2D") : String("2D")}</p>
						</a>
						<div class="content">
							<a class="header" href="#"></a>
						</div>
					</div>
				</>
			) : (
				<div>
					{"See Details"}

					<button
						className={"positive ui button"}
						onClick={(e) => setScreenType("SHOW")}
					>
						See Details
					</button>
				</div>
			)}
		</div>
	);
};

export default Acard;
