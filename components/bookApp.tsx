"use client";

import React from 'react';

const ConsultationForm: React.FC = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px 20px'  }}>
      <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: 'white' }}>
        <h2 style={{ color: 'black' }}>Schedule a Consultation</h2>
        <p style={{ color: 'black' }}>Send us a message and we will contact you.</p>
        <button
          onClick={() => handleScroll('contact-section')}
          style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

export default ConsultationForm;
