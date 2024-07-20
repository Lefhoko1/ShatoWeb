import React, { useState, CSSProperties } from 'react';

interface Area {
  title: string;
  description: string;
}

const PracticeAreas: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const areas: Area[] = [
    { title: 'Corporate and Commercial Legal Services', description: 'We specialize in labour related litigation, arbitration, policy review and advisory in line with the Botswana legislation, ILO conventions and recommendations, and international best practice.' },
    { title: 'Litigation and Dispute Resolution', description: 'Employing a mixture of soft collection techniques and litigation, our goal is to do debt recovery at the least cost to our client whilst preserving the business relationship between the client and debtor.' },
    { title: 'COMPANY & SECRETARIAL SERVICE', description: 'Our extensive knowledge of corporate governance frameworks allows us to provide advisory services, Board secretarial Services and company secretarial services. Doing business in Botswana should be the least of our clients’ concern.' },
    { title: 'LITIGATION & DISPUTE RESOLUTION', description: 'At the core of our service offering to our clientele is our litigation and dispute resolution practice. Our aim is to guide our clients in selecting the best forum for resolution of their legal disputes.' },
    { title: 'COMMERCIAL PRACTICE', description: 'We offer a wide array of services to enhance the business efficacy of our clients which includes but not limited to advisory services, contract review and drafting, and any other requisite services for the conclusion of commercial contracts.' },
    { title: 'FAMILY LAW', description: 'We offer an array of services ranging from pre and post-nuptial contracts, divorce litigation, child custody settlement among others. Our personal approach to service delivery ensures that our clients have the requisite support in these emotionally challenging times. We also offer estate planning services (drafting of wills, execution of wills and setting up trusts).' }
  ];

  const handleTitleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const cardStyle: CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'border 0.3s ease-in-out',
    cursor: 'pointer'
  };

  const activeCardStyle: CSSProperties = {
    border: '2px solid #8A2BE2' // Violet color
  };

  const titleStyle: CSSProperties = {
    fontSize: '1.5em',
    color: '#8A2BE2', // Violet color
    marginBottom: '10px'
  };

  const descriptionStyle: CSSProperties = {
    fontSize: '1em',
    color: '#555'
  };

  const sectionStyle: CSSProperties = {
    width: '100%',
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f7f7f7'
  };

  const sectionTitleStyle: CSSProperties = {
    fontSize: '2.5em',
    background: 'linear-gradient(to right, violet, black)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px'
  };

  return (
    <section style={sectionStyle}>
      <h1 style={sectionTitleStyle}>Practice Areas</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {areas.map((area, index) => (
          <div
            key={index}
            style={activeIndex === index ? { ...cardStyle, ...activeCardStyle } : cardStyle}
            role="button"
            tabIndex={0}
            onClick={() => handleTitleClick(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleTitleClick(index);
              }
            }}
          >
            {activeIndex === index ? (
              <p style={descriptionStyle}>{area.description}</p>
            ) : (
              <h3 style={titleStyle}>{area.title}</h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
