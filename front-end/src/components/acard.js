import React from "react";

const Acard = (props) => {
	const { card } = props;
	return (
		<div>
			<a class="image" href="#">
				<img src={card.link} />
				<h3>{card.name}</h3>
				<p>{card.ageBoundation}</p>
				<p>{String(card.is3D)}</p>
			</a>
			<div class="content">
				<a class="header" href="#"></a>
			</div>
		</div>
	);
};

export default Acard;
