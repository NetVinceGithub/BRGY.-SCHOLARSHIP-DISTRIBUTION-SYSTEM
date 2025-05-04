import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './History.css'

const History = () => {
  
  const [history, setHistory] = useState([]);

  useEffect(()=>{
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get('https://brgy-scholarship-distribution-system-18.onrender.com/api/capitol/get-history');
      if (response.data.success) {
        console.log(response.data.data); 
        setHistory(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div className='history-container'>
      <div className='history-table-wrapper'>
        <h2 className='history-title'>History</h2>
        {history.length===0 ? (
          <p>No Data found</p>
        ) : (
          <table className='history-html-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>School</th>
                <th>Student Code</th>
                <th>Gcash Number</th>
                <th>Gcash Name</th>
              </tr>
            </thead>
            <tbody>
              {history.map((histories, index) => (
                <tr key={index}>
                  <td>{histories.name}</td>
                  <td>{histories.email}</td>
                  <td>{histories.school}</td>
                  <td>{histories.studentCode}</td>
                  <td>{histories.gcashNumber}</td>
                  <td>{histories.gcashName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default History;