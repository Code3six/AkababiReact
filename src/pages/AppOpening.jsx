import React from 'react';
import { Link } from 'react-router-dom';
import './styles/appOpening.css';

const AppOpening = () => {
  return (
    <div className='logo-container'>
      <Link to='/SignUp'>
        <img src={require('../assets/logo.png')} alt='' />
      </Link>
    </div>
  );
};

export default AppOpening;
