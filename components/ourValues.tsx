import React, { useState } from 'react';
import { FaCog, FaRocket, FaShieldAlt, FaHandshake, FaUsers, FaDollarSign } from 'react-icons/fa';

const OurValues: React.FC = () => {
  const values: { [key: number]: string } = {
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

  const [activeValue, setActiveValue] = useState<string>('EFFICIENCY');

  const handleClick = (value: string) => {
    setActiveValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, value: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(value);
    }
  };

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    backgroundColor: '#f7f7f7',
    padding: '50px 20px',
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5em',
    background: 'linear-gradient(to right, violet, black)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px',
  };

  const menuStyle: React.CSSProperties = {
    width: '250px',
    backgroundColor: 'white',
    borderRight: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  };

  const menuItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background 0.3s',
    marginBottom: '10px',
  };

  const menuItemIconStyle: React.CSSProperties = {
    marginRight: '10px',
    fontSize: '1.5em',
    color: 'violet',
  };

  const menuItemTextStyle: React.CSSProperties = {
    fontSize: '1.2em',
    color: 'black',
  };

  const descriptionStyle: React.CSSProperties = {
    flex: 1,
    padding: '20px',
    marginLeft: '270px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
  };

  const valueTitleStyle: React.CSSProperties = {
    fontSize: '1.5em',
    color: 'violet',
    marginBottom: '10px',
  };

  const valueDescStyle: React.CSSProperties = {
    fontSize: '1em',
    color: '#555',
  };

  return (
    <section style={sectionStyle}>
      <div style={menuStyle}>
        {Object.entries(values).map(([key, value]) => (
          <button
            key={key}
            style={menuItemStyle}
            onClick={() => handleClick(value)}
            onKeyDown={(event) => handleKeyDown(event, value)}
            aria-pressed={activeValue === value}
            role="tab"
            tabIndex={0}
          >
            <div style={menuItemIconStyle}>
              {key === '1' && <FaCog />}
              {key === '2' && <FaRocket />}
              {key === '3' && <FaShieldAlt />}
              {key === '4' && <FaHandshake />}
              {key === '5' && <FaUsers />}
              {key === '6' && <FaDollarSign />}
            </div>
            <span style={menuItemTextStyle}>{value}</span>
          </button>
        ))}
      </div>
      <div style={descriptionStyle}>
        <h1 style={titleStyle}>Our Values</h1>
        <div style={{ padding: '20px' }}>
          <h3 style={valueTitleStyle}>{activeValue}</h3>
          <p style={valueDescStyle}>{explanations[activeValue]}</p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
