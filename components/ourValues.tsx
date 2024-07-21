import React from 'react';
import { FaCheckCircle, FaLightbulb, FaLock, FaHandshake, FaUsers, FaDollarSign } from 'react-icons/fa'; // Importing icons

const OurValues: React.FC = () => {
  const values: { [key: number]: { label: string; icon: JSX.Element } } = {
    1: { label: 'EFFICIENCY', icon: <FaCheckCircle /> },
    2: { label: 'INNOVATION', icon: <FaLightbulb /> },
    3: { label: 'RELIABILITY', icon: <FaLock /> },
    4: { label: 'INTEGRITY', icon: <FaHandshake /> },
    5: { label: 'CUSTOMER-CENTRIC', icon: <FaUsers /> },
    6: { label: 'AFFORDABILITY', icon: <FaDollarSign /> }
  };

  const explanations: { [key: string]: string } = {
    EFFICIENCY: 'We strive to optimize our processes to deliver services swiftly without compromising on quality.',
    INNOVATION: 'We embrace new ideas and technologies to stay ahead in the industry and provide cutting-edge solutions.',
    RELIABILITY: 'You can count on us to be consistent, dependable, and trustworthy in all our dealings.',
    INTEGRITY: 'We uphold the highest standards of ethics and transparency in all our interactions.',
    CUSTOMER_CENTRIC: 'Our clients are at the heart of everything we do. We tailor our services to meet their specific needs.',
    AFFORDABILITY: 'We offer competitive pricing without sacrificing the quality of our services.'
  };

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh' 
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '30px',
    width: '100%',
    maxWidth: '1200px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflowY: 'auto',
    boxSizing: 'border-box'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2em',
    color: 'violet',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const valueStyle: React.CSSProperties = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '1.5em',
    color: 'violet',
    marginRight: '15px'
  };

  const principleTitleStyle: React.CSSProperties = {
    fontSize: '1.5em',
    color: 'violet',
    marginBottom: '10px'
  };

  const principleDescriptionStyle: React.CSSProperties = {
    fontSize: '1em',
    color: '#555'
  };

  return (
    <section style={sectionStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Our Values</h1>
        {Object.entries(values).map(([key, { label, icon }]) => (
          <div key={key} style={valueStyle}>
            <div style={iconStyle}>{icon}</div>
            <div>
              <h3 style={principleTitleStyle}>{label}</h3>
              <p style={principleDescriptionStyle}>{explanations[label]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
