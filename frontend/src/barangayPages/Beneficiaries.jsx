import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  const fetchBeneficiaries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/beneficiaries/get-beneficiaries');
      console.log(response);
      setBeneficiaries(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { name: 'Name', selector: row => row.name },
    { name: 'Email', selector: row => row.email },
    { name: 'School', selector: row => row.school },
    { name: 'Student Code', selector: row => row.studentCode },
    { name: 'GCash Number', selector: row => row.gcashNumber },
    { name: 'GCash Name', selector: row => row.gcashName },
  ];

  return (
    <div >
      <h2 >Beneficiaries</h2>
      <div>
        <DataTable
          columns={columns}
          data={beneficiaries}
          responsive
          striped
          highlightOnHover
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default Beneficiaries;
