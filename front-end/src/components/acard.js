import React, {  useState } from "react";


const Acard = (props) => {
  const [screenType, setScreenType] = useState("SHOW");
  const { card } = props;
  
  return (
    <div className={"section"}>
    {screenType === "SHOW" ? (
      <>
    <div>
      
      
			<a class="image" href='javascript:;'  onClick={(e) => setScreenType("See Details")}>
				<img src={card.link} />
				<h3>{card.name}</h3>
				<p>{card.ageBoundation}</p>
				<p>{String(card.is3D)}</p>
			</a>
			<div class="content">
				<a class="header" href="#"></a>
			</div>
          </div>
          
          
          </>
  ) : (
    <div> 
            {"See Details"}
            
    <button className={"positive ui button"}
    onClick={(e) => setScreenType("SHOW")}> // added things 
    See Details
    </button>
    </div>
)}

</div>
	);
};

export default Acard;
