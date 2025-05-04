import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
  const [barangays, setBarangays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBarangays();
  }, []);

  const fetchBarangays = async () => {
    try {
      const res = await axios.get('https://brgy-scholarship-distribution-system-18.onrender.com/api/capitol/get-barangay');
      if (res.data.success && Array.isArray(res.data.barangays)) {
        setBarangays(res.data.barangays); // only set if it's a valid array
      } else {
        setBarangays([]); // fallback to empty array to avoid errors
        console.log("No barangays found.");
      }
    } catch (error) {
      setBarangays([]); // prevent crash
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h1>Overview Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {barangays.map((b, i) => (
            <li key={i}>{b.name}</li> // adjust key depending on your model
          ))}
        </ul>
      )}
    </div>
  );
};

export default Overview;
