import React from 'react';

const OurValues: React.FC = () => {
  const values: { [key: number]: string } = {
    1: 'EFFICIENCY',
    2: 'INNOVATION',
    3: 'RELIABILITY',
    4: 'INTEGRITY',
    5: 'CUSTOMER-CENTRIC',
    6: 'AFFORDABILITY'
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    height: '100vh',
    overflow: 'hidden'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    flex: '1 1 calc(33.333% - 20px)',
    boxSizing: 'border-box'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5em',
    color: 'violet',
    marginBottom: '10px'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1em',
    color: '#555'
  };

  return (
    <section style={sectionStyle}>
      {Object.values(values).map(value => (
        <div key={value} style={cardStyle}>
          <h3 style={titleStyle}>{value}</h3>
          <p style={descriptionStyle}>{explanations[value]}</p>
        </div>
      ))}
    </section>
  );
};

export default OurValues;
