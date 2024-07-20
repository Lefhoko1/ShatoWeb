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

  const cardStyle = (index: number): CSSProperties => ({
    backgroundColor: 'white',
    border: activeIndex === index ? '2px solid #0070f3' : '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '400px',
    height: '300px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'border 0.3s ease-in-out'
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleTitleClick(index);
    }
  };

  return (
    <div style={{ padding: '50px 20px', backgroundColor: 'white', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {areas.map((area, index) => (
          <div
            key={index}
            style={cardStyle(index)}
            role="button"
            tabIndex={0}
            onClick={() => handleTitleClick(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onMouseEnter={(e) => (e.currentTarget.style.border = '2px solid #0070f3')}
            onMouseLeave={(e) => (e.currentTarget.style.border = activeIndex === index ? '2px solid #0070f3' : '1px solid #ccc')}
          >
            {activeIndex === index ? (
              <p style={{ color: '#555' }}>{area.description}</p>
            ) : (
              <h3 style={{ fontSize: '1.5em', color: '#0070f3' }}>{area.title}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeAreas;
