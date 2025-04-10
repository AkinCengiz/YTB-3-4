import React, { useEffect, useState } from 'react'
import FirstPhotoGrid from './FirstPhotoGrid'
import SecondPhotoGrid from './SecondPhotoGrid'
import Pagination from './Pagination'
import { Portfolios } from "../data/";

function PhotoGrid() {
  const [portfolios,setPortfolios] = useState(Portfolios);

  useEffect(() => {
    setPortfolios(Portfolios);
  },[]);
  return (
    <>
        {/* First Photo Grid*/}
            <FirstPhotoGrid portfolios={portfolios}/>
          {/* Second Photo Grid*/}
          <SecondPhotoGrid  portfolios={portfolios} />
          {/* Pagination */}
          <Pagination />
    </>
  )
}



export default PhotoGrid