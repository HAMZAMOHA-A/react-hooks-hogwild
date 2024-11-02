import React from 'react';

const Nav = ({ onFilter, onSort }) => {
  return (
    <nav>
      <button onClick={onFilter}>Toggle Greased</button>
      <button onClick={() => onSort('name')}>Sort by Name</button>
      <button onClick={() => onSort('weight')}>Sort by Weight</button>
    </nav>
  );
};

export default Nav;
