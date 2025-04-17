import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/authContext'
import './Scholars.css';

const Scholars = () => {
  const [scholars, setScholars] = useState([])  // Ensure this is an empty array initially
  const {user} = useAuth();

  useEffect(() => {
    fetchScholars()
  }, [])

  const fetchScholars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/capitol/get-scholars')
      if (response.data.success) {
        setScholars(response.data.scholars || [])
      } else {
        console.error('Error fetching scholars', response.data.message)
        setScholars([]) 
      }
    } catch (error) {
      console.error('Error fetching scholars', error)
      setScholars([])  
    }
  }

  const handleRelease = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/capitol/release-scholarship');
    } catch (error) {
      console.error('Error releasing scholar', error)
    }

    fetchScholars();
  }

  return (
    <div className="scholars-container">

      <div className='scholars-table-wrapper'>
        <h2 className='scholars-title'>Scholars List</h2>
        <button onClick={handleRelease}>Release</button>
        {scholars.length === 0 ? (
          <p>No scholars found.</p>
        ) : (
          <table className='scholars-html-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>School</th>
                <th>Student Code</th>
                <th>GCash Number</th>
                <th>GCash Name</th>
              </tr>
            </thead>
            <tbody>
              {scholars.map((scholar, index) => (
                <tr key={index}>
                  <td>{scholar.name}</td>
                  <td>{scholar.email}</td>
                  <td>{scholar.school}</td>
                  <td>{scholar.studentCode}</td>
                  <td>{scholar.gcashNumber}</td>
                  <td>{scholar.gcashName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
     
    </div>
  )
}

export default Scholars;
