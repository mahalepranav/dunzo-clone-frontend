import React from 'react';
import Header from '../header';
import "./SignUp.css"
import { NavLink } from 'react-router-dom';

const LoginEmail = () => {
  return (
    <>
    <Header />
    <div className='full-page'>
    <NavLink to="/" className="header-button-link"><section className='text-center pt-3'>Back to Home</section></NavLink>
    <h1 className='text-dark text-center pt-3 pb-5'>Please Login to Your Account</h1>
    <div className='form-page-1'>
    <form>
      <div className='container-fluid text-center'>
        <div className='form-page row justify-content-center w-50'>
          <div className='col-md-8 col-12 mt-5 mb-3'>  
            <label>Enter your email:</label>
            <input type="email" className='form-control' />
          </div>
          <div className='col-md-8 col-12 mb-5'>
            <label>Enter your password:</label>
            <input type="password" className='form-control' />
          </div>
          <div>
            <button className='btn btn-primary w-50'>Sign in</button>
          </div>
          <div className='mb-5'>Not a member? <NavLink to="/register" className="header-button-link">Register</NavLink></div>   
        </div> 
      </div>
    </form></div>
    </div>
    </>
  )
}

export default LoginEmail;

