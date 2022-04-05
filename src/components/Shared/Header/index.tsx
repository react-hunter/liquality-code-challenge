import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className='header-wrapper'>
      <h1>Liquality Code Challenge</h1>
      <p>
        This app gets marketing information associated with cryptocurrencies.
      </p>
    </div>
  )
}

export default Header;