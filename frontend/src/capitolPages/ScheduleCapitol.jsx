import React, { useState } from "react";
import "./schedule.css";
import axios from "axios";

const ScheduleCapitol = () => {
  const [formData, setFormData] = useState({
    barangay: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const response = await axios.post('http://localhost:5000/api/capitol/add-schedule', formData);
      console.log(response.data);
      setFormData({ barangay: "", deadline: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          name="barangay"
          type="text"
          placeholder="Add Barangay"
          value={formData.barangay}
          onChange={handleChange}
          required
        />
  
        <input
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
  
        <button type="submit">Add</button>
      </form>
    </div>
  );
  
};

export default ScheduleCapitol;
