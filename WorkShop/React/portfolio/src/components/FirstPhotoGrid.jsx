import React from 'react'
import GridCard from './GridCard'
import PropTypes from "prop-types"

export default function FirstPhotoGrid({ portfolios }) {
  return (
    <>
    <div className="w3-row-padding">
      {
        portfolios.map((item,index) => {
          if(index < 3){
            return <GridCard portfoy={item} key={index}/>
          }}             
        )
      }
          </div>
    </>
  )
}

FirstPhotoGrid.propTypes = {
  portfolios : PropTypes.array
}