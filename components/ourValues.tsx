import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Example icon for menu items
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';

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

  const [activeValue, setActiveValue] = useState<string>('EFFICIENCY');
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  const handleClick = (value: string) => {
    setActiveValue(value);
    if (window.innerWidth < 768) {
      setIsAccordionOpen(false); // Close accordion on mobile when an item is clicked
    }
  };

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    height: '100vh'
  };

  const menuStyle: React.CSSProperties = {
    width: isAccordionOpen ? '100%' : '300px',
    backgroundColor: 'violet',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    transition: 'width 0.3s ease-in-out',
    position: 'relative',
    maxWidth: '300px'
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    padding: '20px',
    backgroundColor: 'white',
    overflowY: 'auto',
    marginLeft: isAccordionOpen ? '0' : '300px',
    transition: 'margin-left 0.3s ease-in-out',
    maxWidth: 'calc(100% - 300px)',
    width: 'calc(100% - 300px)',
  };

  const menuItemStyle: React.CSSProperties = {
    padding: '15px',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const iconStyle: React.CSSProperties = {
    marginRight: '10px'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.2em',
    fontWeight: 'bold'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1em',
    color: '#555'
  };

  return (
    <section style={sectionStyle}>
      <div style={menuStyle}>
        <button
          onClick={handleAccordionToggle}
          aria-expanded={isAccordionOpen}
          aria-controls="accordion-content"
          style={{ padding: '15px', cursor: 'pointer', backgroundColor: 'darkviolet', color: 'white', textAlign: 'center', border: 'none', outline: 'none' }}
        >
          {isAccordionOpen ? <IoMdArrowDropright /> : <IoMdArrowDropdown />} Menu
        </button>
        <div id="accordion-content" style={{ display: isAccordionOpen ? 'block' : 'none' }}>
          {Object.values(values).map(value => (
            <button
              key={value}
              style={menuItemStyle}
              onClick={() => handleClick(value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleClick(value);
                }
              }}
              aria-pressed={activeValue === value}
              role="tab"
              tabIndex={0}
            >
              <AiOutlineInfoCircle style={iconStyle} />
              <span style={titleStyle}>{value}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5em', color: 'violet', marginBottom: '20px' }}>{activeValue}</h1>
        <p style={descriptionStyle}>{explanations[activeValue]}</p>
      </div>
    </section>
  );
};

export default OurValues;
