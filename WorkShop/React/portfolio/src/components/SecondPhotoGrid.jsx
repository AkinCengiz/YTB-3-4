import React from 'react'
import GridCard from './GridCard'

function SecondPhotoGrid({portfolios}) {
  return (
    <>
    <div className="w3-row-padding">
      {
        portfolios.map((item,index) => {
          if(index>2){
            return <GridCard portfoy={item} key={index} />
          }
        })
      }           
          </div>
    </>
  )
}

export default SecondPhotoGrid