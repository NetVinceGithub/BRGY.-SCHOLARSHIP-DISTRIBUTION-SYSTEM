import React from 'react';
import './Body.css';
import {FcProcess} from "react-icons/fc";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineEco } from "react-icons/md";


const Body = () => {
  return (
    <div className='body-container'>
      <h1>Your future starts here, Welcome to Barangay Scholarship System</h1>
      <div className='message'>
        <p>This is the online scholarship distribution system of the Batangas city government. It is designed to efficiently encode beneficiary data and distribute it efficiently in their GCash accounts. It is the new way of scholarship distribution; it aims to cease all gatherings because of the effects of the worsening climate change. It also eliminates the transportation of scholars that live far from the capitol.</p>
   
      </div>
         
      <div className='features-section'>
        <h2>Key Features</h2>
        <div className='features-grid'>

          <div className='feature-card'>
            <h3>Fast Processing</h3>
            <FcProcess size={40} color="black" />
            <p>Streamlined approval process for quicker distribution of funds.</p>
          </div>
          <div className='feature-card'>
            <h3>Secure Payments</h3>
            <RiSecurePaymentFill size={40} color="black"/>

            <p>Direct GCash transfers ensuring safe and timely delivery of scholarship funds.</p>
          </div>
          <div className='feature-card'>
            <h3>Eco-Friendly</h3>
            <MdOutlineEco size={40} color="#2ecc71" />

            <p>Reducing carbon footprint by eliminating the need for physical travel and gatherings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;