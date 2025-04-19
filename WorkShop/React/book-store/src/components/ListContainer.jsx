import React from 'react'
import Card from './Card'

function ListContainer() {
  return (
    <div id="card-list" className="col-9 row row-cols-4">
        <Card className="col"/>
        <Card className="col"/>
        <Card className="col"/>
        <Card className="col"/>
        <Card className="col"/>
        <Card className="col"/>
        <Card className="col"/>
        <Card className="col"/>
        <Card className="col"/>
    </div>
  )
}

export default ListContainer