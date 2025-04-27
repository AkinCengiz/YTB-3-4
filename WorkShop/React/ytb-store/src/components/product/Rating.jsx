import React from 'react'
import "./Rating.css"

const Rating = ({rating}) => {
  return (
    <div className='rating'>
        {
            Array.from({length : 5},(star,i) => {
                const isFill = i + 1 <= rating;//3
                return(
                    isFill ? <i className="fa-solid fa-star" key={i}/> : <i className="fa-regular fa-star" key={i} />

                )
            })
        }
    </div>
  )
}

export default Rating