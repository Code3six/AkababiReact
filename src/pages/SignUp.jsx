import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './signup.css';

const SignUp = () => {
  return (
    <div className='signup'>
      <div
        className='header'
        style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.25)' }}
      >
        <Header />

        <div className='topbar'>
          <Link to='/signup'>
            <h2 className='highlighted'>Sign Up</h2>
          </Link>
          <Link to='/guest'>
            <h2>Guest</h2>
          </Link>
          <Link to='/signin'>
            <h2>Login</h2>
          </Link>
        </div>
      </div>
      <div className='btn__container'>
        <Link to='/signup/info'>
          <button className='btn__original'>
            <img
              className='btn__logo'
              src={require('../assets/logo.png')}
              alt='signup logo'
            />
            <p>Sign Up</p>
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
  );
};

// there are multiple pages in the signup,
// so rather having single component for each of them
// we should use components inside the component,
//  we will render the next components down below based on condition
// Like a form fully being filled or something

const signupInfo = () => {};

const signUpLocation = () => {};

const signUpInterest = () => {};

const signUpOccupation = () => {};

const signUpEducation = () => {};

const signupExperience = () => {};

const signupChooseCard = () => {};

export default SignUp;
