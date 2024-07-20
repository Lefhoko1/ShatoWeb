import React, { useState, CSSProperties } from 'react';
import { FaBolt, FaLightbulb, FaCheckCircle, FaShieldAlt, FaUser, FaDollarSign } from 'react-icons/fa';

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

  const icons: { [key: string]: JSX.Element } = {
    EFFICIENCY: <FaBolt />,
    INNOVATION: <FaLightbulb />,
    RELIABILITY: <FaCheckCircle />,
    INTEGRITY: <FaShieldAlt />,
    CUSTOMER_CENTRIC: <FaUser />,
    AFFORDABILITY: <FaDollarSign />
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sectionStyle: CSSProperties = {
    width: '100%',
    backgroundColor: '#f7f7f7',
    padding: '50px 20px',
    textAlign: 'center'
  };

  const titleStyle: CSSProperties = {
    fontSize: '2.5em',
    background: 'linear-gradient(to right, violet, green)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px'
  };

  const menuStyle: CSSProperties = {
    width: '20%',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRight: '1px solid #ccc',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };

  const contentStyle: CSSProperties = {
    width: '80%',
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center'
  };

  const listItemStyle: CSSProperties = {
    padding: '10px 0',
    cursor: 'pointer',
    color: '#0070f3',
    fontSize: '1.2em',
    display: 'flex',
    alignItems: 'center'
  };

  const activeListItemStyle: CSSProperties = {
    ...listItemStyle,
    fontWeight: 'bold',
    color: '#8A2BE2', // Violet color
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    padding: '10px'
  };

  const iconStyle: CSSProperties = {
    marginRight: '10px'
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveIndex(index);
    }
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Our Values</h1>
      <div style={{ display: 'flex' }}>
        <div style={menuStyle}>
          {Object.entries(values).map(([key, value], index) => (
            <div
              key={key}
              style={activeIndex === index ? activeListItemStyle : listItemStyle}
              role="button"
              tabIndex={0}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span style={iconStyle}>{icons[value]}</span>
              {value}
            </div>
          ))}
        </div>
        <div style={contentStyle}>
          {activeIndex !== null && (
            <div>
              <h2 style={{ color: '#8A2BE2' }}>{values[activeIndex + 1]}</h2>
              <p>{explanations[values[activeIndex + 1]]}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
