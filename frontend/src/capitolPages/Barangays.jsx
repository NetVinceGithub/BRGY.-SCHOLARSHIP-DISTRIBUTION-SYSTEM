import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Barangay.css"
import {MdEditNote, MdDelete } from "react-icons/md";

const Barangays = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'barangay', 
  });
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect (()=> {
    getUsers();

  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/get-users');
      if (response.data.success) {
        console.log(response.data.users);
        setUsers(response.data.users);
      } else {
        console.error("Failed to get users:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = (user) => {
    // Make sure you're using the correct property for ID
    // It might be user._id or user.id depending on your backend
    setFormData({...user, password: ''});
    setEditingUser(user.id); // Ensure this is the correct property
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`http://localhost:5000/api/users/update-user/${editingUser}`, formData);
      } else {
        await axios.post(`http://localhost:5000/api/users/add-user`, formData);
      }
  
      // Reset everything after saving
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'barangay',
      });
      setEditingUser(false);
      setIsModalOpen(false);
      getUsers(); 

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/users/delete-user/${id}`);
      if (response.data.success) {
        getUsers();
      } else {
        console.error("Failed to delete user:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  return (
    <div className='container'>
      <div className='left-container'>
        <h2>Add Barangays</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Add Barangay Name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Add Barangay Email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type='password'
            name='password'
            placeholder='Add Password'
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            name='role'
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value='barangay'>Barangay</option>
            <option value='capitol'>Capitol</option>
          </select>

          <button type='submit'>Add Barangay</button>
        </form>
      </div>

      <div className='right-container'>
        <h2>List of Users</h2>
        <div className='user-grid'>
          <table className='user-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}> 
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className='user-button' onClick={()=> handleEdit(user)}><MdEditNote/></button>
                  </td>
                  <td>
                    <button className='user-button' onClick={()=> handleDelete(user.id)}><MdDelete/></button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
      {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Edit User</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="barangay">Barangay</option>
                  <option value="capitol">Capitol</option>
                </select>
                <div className="modal-actions">
                  <button type="submit">Save Changes</button>
                  <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

      
    </div>
  );
};

export default Barangays;
