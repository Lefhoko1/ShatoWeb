import React, { useState } from 'react';
import { FaStar, FaLightbulb, FaCheckCircle, FaShieldAlt, FaUserFriends, FaDollarSign } from 'react-icons/fa';

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

  const [activeValue, setActiveValue] = useState<string>(Object.values(values)[0]);

  const handleClick = (value: string) => {
    setActiveValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, value: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(value);
    }
  };

  const menuItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    margin: '5px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    color: 'black',
    transition: 'background-color 0.3s ease-in-out',
    width: '100%',
  };

  const menuItemActiveStyle: React.CSSProperties = {
    ...menuItemStyle,
    backgroundColor: 'violet',
    color: 'white'
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5em',
    background: 'linear-gradient(to right, violet, black)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px'
  };

  const icons: { [key: string]: React.ReactNode } = {
    EFFICIENCY: <FaStar />,
    INNOVATION: <FaLightbulb />,
    RELIABILITY: <FaCheckCircle />,
    INTEGRITY: <FaShieldAlt />,
    CUSTOMER_CENTRIC: <FaUserFriends />,
    AFFORDABILITY: <FaDollarSign />
  };

  return (
    <section style={{ padding: '50px 20px', backgroundColor: 'white' }}>
      <h1 style={titleStyle}>Our Values</h1>
      <div style={sectionStyle}>
        <div style={{ width: '25%', padding: '20px', overflowY: 'auto', borderRight: '1px solid #ccc' }}>
          {Object.values(values).map(value => (
            <button
              key={value}
              style={activeValue === value ? menuItemActiveStyle : menuItemStyle}
              onClick={() => handleClick(value)}
              onKeyDown={(event) => handleKeyDown(event, value)}
              role="tab"
              tabIndex={0}
            >
              {icons[value]} {value}
            </button>
          ))}
        </div>
        <div style={contentStyle}>
          <h2>{activeValue}</h2>
          <p>{explanations[activeValue]}</p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
