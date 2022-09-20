import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header>
    <div className="bar">
      <Link href="/">Sick Fits</Link>
    </div>
    <Nav />
    <div className="sub-bar">
      <p>Search</p>
    </div>
  </header>
);

export default Header;
