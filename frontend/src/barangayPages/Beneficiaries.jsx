import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Beneficiaries.css';
import { MdEditNote, MdDelete, MdSearch } from "react-icons/md";

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  useEffect(() => {

    if (searchTerm.trim() === '') {
      setFilteredBeneficiaries(beneficiaries);
    } else {
      const filtered = beneficiaries.filter(beneficiary => 
        beneficiary.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        beneficiary.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        beneficiary.school?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBeneficiaries(filtered);
    }
  }, [searchTerm, beneficiaries]);

  const fetchBeneficiaries = async () => {
    setError(null);
    try {
      const token = localStorage.getItem('token');
  
      // Decode token to get the userId
      const base64Payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(base64Payload));
      const userId = decodedPayload.id;
  
      const response = await axios.get(
        `http://localhost:5000/api/beneficiaries/get-beneficiaries?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const beneficiariesData = response.data.message || [];
      setBeneficiaries(beneficiariesData);
      setFilteredBeneficiaries(beneficiariesData);
    } catch (error) {
      console.error("Error fetching beneficiaries:", error);
      setError("Failed to load beneficiaries. Please try again later.");
    }
  };
  
  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (beneficiary) => {
    console.log('Editing beneficiary:', beneficiary); // Debug info
    setSelectedBeneficiary(beneficiary);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Cannot delete: ID is undefined");
      return;
    }
    
    if (window.confirm('Are you sure you want to delete this beneficiary?')) {
      setError(null);
      try {
        await axios.delete(`http://localhost:5000/api/beneficiaries/delete/${id}`);
        fetchBeneficiaries(); // Refresh list
      } catch (error) {
        console.error('Delete failed:', error);
        setError("Failed to delete beneficiary.");
      }
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedBeneficiary(null);
    setError(null);
  };

  const handleModalSave = async () => {
    setError(null);
    try {
      const idToUse = selectedBeneficiary.id;
      
      console.log('Saving beneficiary with ID:', idToUse); // Debug info
      
      if (!idToUse) {
        setError("ID is missing. Cannot update beneficiary.");
        return;
      }
      

      
      const response = await axios.put(
        `http://localhost:5000/api/beneficiaries/update/${idToUse}`, 
        selectedBeneficiary
      );
      
      console.log('Update response:', response.data);
      setShowModal(false);
      fetchBeneficiaries();
    } catch (error) {
      console.error('Update failed:', error);
      setError(`Failed to update: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleChange = (e) => {
    setSelectedBeneficiary({ ...selectedBeneficiary, [e.target.name]: e.target.value });
  };

  const handleTransfer = async () => {
    try {
      const token = localStorage.getItem('token');
      const base64Payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(base64Payload));
      const userId = decodedPayload.id;
  
      const res = await axios.post(`http://localhost:5000/api/beneficiaries/transfer-to-capitol?userId=${userId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBeneficiaries();
    } catch (error) {
      console.error('Transfer failed:', error);
      alert('Transfer failed: ' + (error.response?.data?.message || error.message));
    }
  };
  

  return (
    <div className="beneficiaries-container">
      <button className="transfer-btn" onClick={handleTransfer}>Transfer</button>
      
      <div className="search-container">
        <div className="search-bar">
          <MdSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search Name" 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      
      <div className="beneficiaries-table-wrapper">
        <h2 className="beneficiaries-title">List of Beneficiaries</h2>

        <table className="beneficiaries-html-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>School</th>
              <th>Student Code</th>
              <th>GCash Number</th>
              <th>GCash Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredBeneficiaries.map((beneficiary, index) => (
              <tr key={index}>
                <td>{beneficiary.name}</td>
                <td>{beneficiary.email}</td>
                <td>{beneficiary.school}</td>
                <td>{beneficiary.studentCode}</td>
                <td>{beneficiary.gcashNumber}</td>
                <td>{beneficiary.gcashName}</td>
                <td><button className="edit-btn" onClick={() => handleEdit({...beneficiary})}><MdEditNote/></button></td>
                <td><button className="delete-btn" onClick={() => handleDelete(beneficiary._id || beneficiary.id)}><MdDelete/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedBeneficiary && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Edit Beneficiary</h3>
            <input type="text" name="name" value={selectedBeneficiary.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={selectedBeneficiary.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="school" value={selectedBeneficiary.school} onChange={handleChange} placeholder="School" />
            <input type="text" name="studentCode" value={selectedBeneficiary.studentCode} onChange={handleChange} placeholder="Student Code" />
            <input type="text" name="gcashNumber" value={selectedBeneficiary.gcashNumber} onChange={handleChange} placeholder="GCash Number" />
            <input type="text" name="gcashName" value={selectedBeneficiary.gcashName} onChange={handleChange} placeholder="GCash Name" />
            <div className="modal-actions">
              <button onClick={handleModalSave}>Save</button>
              <button onClick={handleModalClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beneficiaries;