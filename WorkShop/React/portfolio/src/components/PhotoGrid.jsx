import React from 'react'
import FirstPhotoGrid from './FirstPhotoGrid'
import SecondPhotoGrid from './SecondPhotoGrid'
import Pagination from './Pagination'

function PhotoGrid() {
  return (
    <>
        {/* First Photo Grid*/}
            <FirstPhotoGrid />
          {/* Second Photo Grid*/}
          <SecondPhotoGrid />
          {/* Pagination */}
          <Pagination />
    </>
  )
}

export default PhotoGrid