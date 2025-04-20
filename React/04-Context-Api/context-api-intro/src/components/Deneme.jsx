import React from 'react'
import Deneme2 from './Deneme2'

function Deneme({deneme,setDeneme}) {

  return (
    <Deneme2 deneme={deneme} onClick={() => setDeneme("Denendi")} />
  )
}

export default Deneme