import React, { useState } from "react";
import "./styles.css";

const ScholarshipSystem = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    school: "",
    email: "",
    gcashName: "",
    gcashNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setStudents([...students, formData]);
    setFormData({ id: "", name: "", school: "", email: "", gcashName: "", gcashNumber: "" });
  };

  return (
    <div className="flex">
      <aside>
        <h2>Scholarship System</h2>
        <ul>
          <li className="bg-green-700">Dashboard</li>
          <li>Beneficiaries</li>
          <li>Schedule</li>
          <li>About Us</li>
          <li>Landing Page</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main>
        <h1>Welcome, Barangay Alangilan!</h1>
        <h2>Student Details:</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="id" placeholder="SR-Code or Student ID" value={formData.id} onChange={handleChange} />
          <input name="name" placeholder="Student Name" value={formData.name} onChange={handleChange} />
          <input name="school" placeholder="School/Universities" value={formData.school} onChange={handleChange} />
          <input name="email" placeholder="Student Email" value={formData.email} onChange={handleChange} />
          <input name="gcashName" placeholder="GCash Account Name" value={formData.gcashName} onChange={handleChange} />
          <input name="gcashNumber" placeholder="GCash Number" value={formData.gcashNumber} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Save</button>
        
        <table>
          <thead>
            <tr>
              <th>SR-Code</th>
              <th>Name</th>
              <th>School</th>
              <th>Email</th>
              <th>GCash Name</th>
              <th>GCash Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.school}</td>
                <td>{student.email}</td>
                <td>{student.gcashName}</td>
                <td>{student.gcashNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ScholarshipSystem;
