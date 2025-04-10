import React from 'react'
import ImageBox from './ImageBox'

function ImageOfMe({images}) {
  return (
    <>
    <div className="w3-row-padding w3-padding-16" id="about">
      {
        images.map((image,index)=> (
          <ImageBox image={image} key={index}/>

        ))
      }
      </div>
    </>
  )
}

export default ImageOfMe