import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Beneficiaries.css';

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  const fetchBeneficiaries = async () => {
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/beneficiaries/get-beneficiaries');
      setBeneficiaries(response.data.message || []);
    } catch (error) {
      console.error("Error fetching beneficiaries:", error);
      setError("Failed to load beneficiaries. Please try again later.");
    }
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
      // Check which ID field exists
      const idToUse = selectedBeneficiary.id;
      
      console.log('Saving beneficiary with ID:', idToUse); // Debug info
      
      if (!idToUse) {
        setError("ID is missing. Cannot update beneficiary.");
        return;
      }
      
      // Test the route first with a GET request
      try {
        await axios.get(`http://localhost:5000/api/beneficiaries/test-update/${idToUse}`);
        console.log('Test route is working');
      } catch (testError) {
        console.warn('Test route failed:', testError);
      }
      
      // Proceed with the update
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

  return (
    <div className="beneficiaries-container">
      <h2 className="beneficiaries-title">Beneficiaries</h2>
      <div className="beneficiaries-table-wrapper">
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
            {beneficiaries.map((beneficiary, index) => (
              <tr key={index}>
                <td>{beneficiary.name}</td>
                <td>{beneficiary.email}</td>
                <td>{beneficiary.school}</td>
                <td>{beneficiary.studentCode}</td>
                <td>{beneficiary.gcashNumber}</td>
                <td>{beneficiary.gcashName}</td>
                <td><button onClick={() => handleEdit({...beneficiary})}>Edit</button></td>
                <td><button onClick={() => handleDelete(beneficiary._id || beneficiary.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
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