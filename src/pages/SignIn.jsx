import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './styles/topbar.css';
import './styles/buttons.css';
const SignIn = () => {
  return (
    <div>
      <div className='signup'>
        <Header />

        <div className='topbar'>
          <Link to='/'>
            <h2>Sign Up</h2>
          </Link>
          <Link to='/guest'>
            <h2>Guest</h2>
          </Link>
          <Link to='/signin'>
            <h2 className='highlighted'>Login</h2>
          </Link>
        </div>
        <hr />

        <div className='btn__container'>
          <Link to='/login-email'>
            <button className='btn__original'>
              <img
                className='btn__logo'
                src={require('../assets/logo.png')}
                alt='signup logo'
              />
              <p>Sign In</p>
              <div></div>
            </button>
          </Link>
          <hr
            style={{
              width: '250px',
              margin: 'auto',
              marginTop: '20px',
              padding: '1.8px',
              backgroundColor: '#387daf',
            }}
          />
          <div className='btnauth___container'>
            <button className='btn__fb'>
              <img
                className='btn__logo'
                src={require('../assets/facebook.png')}
                alt='signup logo'
              />
              <p>Sign Up</p>
              <div></div>
            </button>
            <button className='btn__gl'>
              <img
                className='btn__logo'
                src={require('../assets/google.png')}
                alt='signup logo'
              />
              <p>Sign Up</p>
              <div></div>
            </button>
            <button className='btn__ln'>
              <img
                className='btn__logo'
                src={require('../assets/linkedin.png')}
                alt='signup logo'
              />
              <p>Sign Up</p>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
