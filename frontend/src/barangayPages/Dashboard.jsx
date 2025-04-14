import React, { useState } from 'react' 
import axios from 'axios';
import './Dashboard.css';
import { useAuth } from '../context/authContext';


const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gcashNumber:'',
    gcashName:'',
    school:'',
    studentCode:''
  });

const {user} = useAuth();


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/beneficiaries/add-beneficiary",
        {
          ...formData,
          userId: user?.id, // 👈 use user.id from context
        }
      );
  
      console.log("beneficiary added: ", response.data);
  
      setFormData({
        name: '',
        email: '',
        gcashNumber: '',
        gcashName: '',
        school: '',
        studentCode: ''
      });
  
    } catch (error) {
      console.error("Error adding beneficiary:", error);
    }
  };
  


  return (
    <div>
      <div className='form-container'>
        <h2>Add Beneficiary</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name='name'
            placeholder='Enter Name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input 
            type="text"
            name='email'
            placeholder="Enter Student Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input 
            type="text"
            name='gcashNumber'
            placeholder="Enter Gcash Number"
            value={formData.gcashNumber}
            onChange={handleChange}
            required
          />

          <input 
            type="text"
            name='gcashName'
            placeholder="Enter Gcash Name"
            value={formData.gcashName}
            onChange={handleChange}
            required
          />

          <input 
            type="text"
            name="school"
            placeholder="Enter School"
            value={formData.school}
            onChange={handleChange}
            required
          />

          <input 
            type="text"
            name="studentCode"
            placeholder="Enter SR Code"
            value={formData.studentCode}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Beneficiary</button>

        </form>
      </div>



    </div>
  )
}

export default Dashboard;