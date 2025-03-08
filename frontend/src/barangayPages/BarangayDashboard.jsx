import React from 'react'
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';

const BarangayDashboard = () => {
  const {user} = useAuth() 

  return (
    <div>
      <h2>Barangay Dashboard Pa display dito ng dashboard, kayo na bahala if mag navbar pa kayo</h2>
     
    </div>
  )
}

export default BarangayDashboard;