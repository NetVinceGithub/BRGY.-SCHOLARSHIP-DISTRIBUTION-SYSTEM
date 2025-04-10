import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Beneficiaries.css';

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
    {
      name: 'Name',
      selector: row => row.name,
      wrap: true,
      grow: 2, // more space
    },
    {
      name: 'Email',
      selector: row => row.email,
      wrap: true,
      grow: 2,
    },
    {
      name: 'School',
      selector: row => row.school,
      wrap: true,
      grow: 3,
    },
    {
      name: 'Student Code',
      selector: row => row.studentCode,
      wrap: true,
      grow: 1,
    },
    {
      name: 'GCash Number',
      selector: row => row.gcashNumber,
      wrap: true,
      grow: 2,
    },
    {
      name: 'GCash Name',
      selector: row => row.gcashName,
      wrap: true,
      grow: 2,
    },
  ];
  
  
  const customStyles = {
    table: {
      style: {
        width: '100%',
        height: 'auto', // or a fixed height if needed
      },
    },
    
    tableWrapper: {
      style: {
        width: '100%',
        height: '100%',
        overflow: 'auto',     // ensures scroll if content overflows
      },
    },
    rows: {
      style: {
        minHeight: '60px',     // row height (default is ~40px)
      },
    },
  };
  
  
  

  return (
    <div className="beneficiaries-container" >
      <div>
        <h2 className='beneficiaries-title'>Beneficiaries</h2>
        <div className='beneficiaries-table-wrapper'>
        <DataTable
          columns={columns}
          data={beneficiaries}
          responsive
          striped
          highlightOnHover
          className="beneficiaries-table"
          customStyles={customStyles}
        />

        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
