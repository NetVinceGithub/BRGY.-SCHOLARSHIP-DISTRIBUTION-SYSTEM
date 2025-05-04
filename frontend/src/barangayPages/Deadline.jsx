import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';
import './Deadline.css'; 

const Deadline = () => {

  const [deadline, setDeadline] = useState([])

  useEffect(() => {
    fetchDeadlines();
  },[]);

  const fetchDeadlines = async () => {
    try {
      const response = await axios.get('https://brgy-scholarship-distribution-system-18.onrender.com/api/capitol/get-schedules');
      console.log(response.data);
      setDeadline(response.data.message); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="deadline-wrapper">
        <h2 className="deadline-title">Upcoming Scholarship Deadlines</h2>
        {deadline.length === 0 ? (
          <p className="no-deadline-msg">No scheduled deadlines at the moment.</p>
        ) : (
          <div className="deadline-grid">
            {deadline.map((item, index) => (
              <div key={index} className="deadline-card">
                <h3>{item.barangay}</h3>
                <p>
                  Deadline:&nbsp;
                  <strong>
                    {new Date(item.deadline).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </strong>
                </p>
              </div>
            ))}
          </div>

        )}
      </div>
    </div>
  )
}

export default Deadline;
