import React from 'react'
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';

const CapitolDashboard = () => {
  const {user} = useAuth() 

  return (
    <div>
      <h2>Capitol Dashboard Pa display dito ng dashboard, kayo na bahala if mag navbar pa kayo</h2>
     
    </div>
  )
}

export default CapitolDashboard;