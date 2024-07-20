import React, { useState, CSSProperties, KeyboardEvent } from 'react';
import { FaHandshake, FaLightbulb, FaThumbsUp, FaShieldAlt, FaUser, FaDollarSign } from 'react-icons/fa';

// Define the values and explanations
const values = {
  1: "EFFICIENCY",
  2: "INNOVATION",
  3: "RELIABILITY",
  4: "INTEGRITY",
  5: "CUSTOMER-CENTRIC",
  6: "AFFORDABILITY"
};

const explanations: { [key: string]: string } = {
  EFFICIENCY: "We strive to optimize our processes to deliver services swiftly without compromising on quality.",
  INNOVATION: "We embrace new ideas and technologies to stay ahead in the industry and provide cutting-edge solutions.",
  RELIABILITY: "You can count on us to be consistent, dependable, and trustworthy in all our dealings.",
  INTEGRITY: "We uphold the highest standards of ethics and transparency in all our interactions.",
  CUSTOMER_CENTRIC: "Our clients are at the heart of everything we do. We tailor our services to meet their specific needs.",
  AFFORDABILITY: "We offer competitive pricing without sacrificing the quality of our services."
};

const sideMenuStyle: CSSProperties = {
  width: '250px',
  backgroundColor: '#2e2e2e',
  color: 'white',
  padding: '20px',
  height: '100vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  borderRight: '2px solid violet'
};

const menuItemStyle: CSSProperties = {
  width: '100%',
  padding: '15px',
  border: 'none',
  background: 'none',
  color: 'white',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  fontSize: '1.2em',
  margin: '5px 0'
};

const activeMenuItemStyle: CSSProperties = {
  ...menuItemStyle,
  backgroundColor: 'violet',
  color: 'black'
};

const contentStyle: CSSProperties = {
  marginLeft: '250px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  height: '100vh',
  overflowY: 'auto'
};

const cardStyle: CSSProperties = {
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
  width: '100%',
  margin: '10px 0',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const iconStyle: CSSProperties = {
  marginRight: '10px'
};

const OurValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState<string>(Object.values(values)[0]);

  const handleClick = (value: string) => {
    setActiveValue(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, value: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(value);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={sideMenuStyle}>
        {Object.values(values).map((value) => (
          <button
            key={value}
            style={activeValue === value ? activeMenuItemStyle : menuItemStyle}
            onClick={() => handleClick(value)}
            onKeyDown={(event) => handleKeyDown(event as KeyboardEvent<HTMLButtonElement>, value)}
            aria-pressed={activeValue === value}
            role="tab"
            tabIndex={0}
          >
            {/* Map the values to icons */}
            {value === "EFFICIENCY" && <FaHandshake style={iconStyle} />}
            {value === "INNOVATION" && <FaLightbulb style={iconStyle} />}
            {value === "RELIABILITY" && <FaThumbsUp style={iconStyle} />}
            {value === "INTEGRITY" && <FaShieldAlt style={iconStyle} />}
            {value === "CUSTOMER-CENTRIC" && <FaUser style={iconStyle} />}
            {value === "AFFORDABILITY" && <FaDollarSign style={iconStyle} />}
            {value}
          </button>
        ))}
      </div>
      <div style={contentStyle}>
        <div style={cardStyle}>
          <h2 style={{ color: 'violet' }}>{activeValue}</h2>
          <p style={{ color: '#555' }}>{explanations[activeValue]}</p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
