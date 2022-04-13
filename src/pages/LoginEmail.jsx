import React from 'react';
import './styles/loginEmail.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LoginEmail = () => {
  return (
    <>
      <Header />

      <div className='topbar'>
        <Link to='/signup'>
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
      <section className='form-cont'>
        <form action='' className='loginEmail-form'>
          <input className='input-box' type='email' placeholder='Email' />
          <input className='input-box' type='password' placeholder='Password' />
        </form>
      </section>
    </>
  );
};

export default LoginEmail;
