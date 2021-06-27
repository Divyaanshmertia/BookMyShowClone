import React from 'react'

const Acard = (props) => {
    const { card } = props;
    return (
        <div>
        <div class="card">
        <div class="image">
          <img src={card.link} />
        </div>
        <div class="content">
          <div class="header">{card.name}</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div class="extra content">
         
        </div>
                </div>
                </div>
       
    )
}

export default Acard
