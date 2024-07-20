import React, { useState, CSSProperties } from 'react';

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

  const practiceAreas: { title: string; description: string }[] = [
    { title: 'Corporate and Commercial Legal Services', description: 'We specialize in labour related litigation, arbitration, policy review and advisory in line with the Botswana legislation, ILO conventions and recommendations, and international best practice.' },
    { title: 'Litigation and Dispute Resolution', description: 'Employing a mixture of soft collection techniques and litigation, our goal is to do debt recovery at the least cost to our client whilst preserving the business relationship between the client and debtor.' },
    { title: 'COMPANY & SECRETARIAL SERVICE', description: 'Our extensive knowledge of corporate governance frameworks allows us to provide advisory services, Board secretarial Services and company secretarial services. Doing business in Botswana should be the least of our clients’ concern.' },
    { title: 'LITIGATION & DISPUTE RESOLUTION', description: 'At the core of our service offering to our clientele is our litigation and dispute resolution practice. Our aim is to guide our clients in selecting the best forum for resolution of their legal disputes.' },
    { title: 'COMMERCIAL PRACTICE', description: 'We offer a wide array of services to enhance the business efficacy of our clients which includes but not limited to advisory services, contract review and drafting, and any other requisite services for the conclusion of commercial contracts.' },
    { title: 'FAMILY LAW', description: 'We offer an array of services ranging from pre and post-nuptial contracts, divorce litigation, child custody settlement among others. Our personal approach to service delivery ensures that our clients have the requisite support in these emotionally challenging times. We also offer estate planning services (drafting of wills, execution of wills and setting up trusts).' }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sectionStyle: CSSProperties = {
    width: '100%',
    backgroundColor: '#f7f7f7',
    padding: '50px 20px',
    textAlign: 'center'
  };

  const titleStyle: CSSProperties = {
    fontSize: '2.5em',
    background: 'linear-gradient(to right, violet, black)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px'
  };

  const menuStyle: CSSProperties = {
    width: '20%',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRight: '1px solid #ccc',
    textAlign: 'left'
  };

  const contentStyle: CSSProperties = {
    width: '80%',
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'left'
  };

  const listItemStyle: CSSProperties = {
    padding: '10px 0',
    cursor: 'pointer',
    color: '#0070f3',
    fontSize: '1.2em'
  };

  const activeListItemStyle: CSSProperties = {
    ...listItemStyle,
    fontWeight: 'bold',
    color: '#8A2BE2' // Violet color
  };

  const valueTitleStyle: CSSProperties = {
    fontSize: '1.5em',
    color: 'violet',
    marginBottom: '10px'
  };

  const valueDescStyle: CSSProperties = {
    fontSize: '1em',
    color: '#555'
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
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              style={activeIndex === index ? activeListItemStyle : listItemStyle}
              role="button"
              tabIndex={0}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {area.title}
            </div>
          ))}
        </div>
        <div style={contentStyle}>
          {activeIndex !== null && (
            <div>
              <h2 style={{ color: '#8A2BE2' }}>{practiceAreas[activeIndex].title}</h2>
              <p>{practiceAreas[activeIndex].description}</p>
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
        {Object.entries(values).map(([key, value]) => (
          <div key={key} style={{ ...contentStyle, width: '300px', margin: '10px' }}>
            <h3 style={valueTitleStyle}>{value}</h3>
            <p style={valueDescStyle}>{explanations[value]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
