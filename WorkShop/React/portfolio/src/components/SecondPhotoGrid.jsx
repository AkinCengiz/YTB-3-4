import React from 'react'
import GridCard from './GridCard'
import { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'

function SecondPhotoGrid() {
  const {projects} = useContext(ProjectContext)
  return (
    <>
    <div className="w3-row-padding">
      {
        projects.map((item,index) => {
          if(item.id>3){
            return <GridCard portfoy={item} key={index} />
          }
        })
      }           
          </div>
    </>
  )
}

export default SecondPhotoGrid