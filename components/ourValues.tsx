import React from 'react';

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

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#f7f7f7',
    padding: '50px 20px',
    textAlign: 'center'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5em',
    background: 'linear-gradient(to right, violet, black)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const valueTitleStyle: React.CSSProperties = {
    fontSize: '1.5em',
    color: 'violet',
    marginBottom: '10px'
  };

  const valueDescStyle: React.CSSProperties = {
    fontSize: '1em',
    color: '#555'
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Our Values</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Object.entries(values).map(([key, value]) => (
          <div key={key} style={cardStyle}>
            <h3 style={valueTitleStyle}>{value}</h3>
            <p style={valueDescStyle}>{explanations[value]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
