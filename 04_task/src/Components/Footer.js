import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'var(--backgroundColor)',
    color: 'var(--fontColor)',
    padding: '1rem',
    textAlign: 'center',
  };
  return (
    <div style={footerStyle}>
      <p>
        Rautatieläisenkatu 5, 00520 Helsinki | Tel. 09 1489 0200 | info@bc.fi
      </p>
    </div>
  );
};

export default Footer;
