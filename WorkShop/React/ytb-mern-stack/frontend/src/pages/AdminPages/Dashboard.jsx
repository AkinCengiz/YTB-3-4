import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard</h2>
      <button type='submit' onClick={() => {navigate("/"); window.location.reload();}}>Web Sitesini Göster</button>
    </div>
  )
}

export default Dashboard