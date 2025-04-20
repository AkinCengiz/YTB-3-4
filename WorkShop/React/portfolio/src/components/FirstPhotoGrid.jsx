import React from 'react'
import GridCard from './GridCard'
import PropTypes from "prop-types"
import { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'

export default function FirstPhotoGrid() {
  const {projects} = useContext(ProjectContext);
  return (
    <>
    <div className="w3-row-padding">
      {
        projects.map((item,index) => {
          if(item.id <= 3){
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