import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'var(--backgroundColor)',
    color: 'var(--fontColor)',
    padding: '1rem',
  };
  return (
    <div style={headerStyle}>
      <h1>Business College Helsinki</h1>
    </div>
  );
};

export default Header;
