import React from 'react';

import './style.css';

import logo from '../../assets/facebook.png';

function Header() {
  return (
    <div className="bg">
      <div className="left-side">
        <img src={logo} />
      </div>
      <div className="right-side">
        <h4>Meu Perfil</h4>
      </div>
    </div>
  )
}

export default Header;