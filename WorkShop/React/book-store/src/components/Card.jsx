import React from 'react'

function Card() {
  return (
        <div className="card" >
          <img src="https://picsum.photos/536/354" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  )
}

export default Card