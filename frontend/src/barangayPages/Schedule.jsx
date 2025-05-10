import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Schedule = () => {

  const [schedule, setSchedule] = useState([]);

  useEffect(()=>{
    fetchSchedules();
  }, [])

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('https://brgy-scholarship-distribution-system-19.onrender.com/api/capitol/get-schedules');
      console.log(response.data);
      setSchedule(response.data.message); // only use the array
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='schedule-container'>
      <div className='schedule-table-wraper'>
        <h2 className='schedule-title'>Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Barangay</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((schedules, index) => (
              <tr key={index}>
                <td>{schedules.barangay}</td>
                <td>{new Date(schedules.deadline).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Schedule;