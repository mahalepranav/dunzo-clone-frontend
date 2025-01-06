import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../header';
import "./SignUp.css";
import { NavLink } from 'react-router-dom';

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Assuming a successful login returns a token or success message
        console.log("Login successful:", response.data);
        // Redirect to the home page
        navigate("/");
      }
    } catch (err) {
      // Handle errors and set error message
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Login failed. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className='full-page'>
        <NavLink to="/" className="header-button-link">
          <section className='text-center pt-3'>Back to Home</section>
        </NavLink>
        <h1 className='text-dark text-center pt-3 pb-5'>Please Login to Your Account</h1>
        <div className='form-page-1'>
          <form onSubmit={handleLogin}>
            <div className='container-fluid text-center'>
              <div className='form-page row justify-content-center w-50'>
                <div className='col-md-8 col-12 mt-5 mb-3'>
                  <label>Enter your email:</label>
                  <input
                    type="email"
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='col-md-8 col-12 mb-5'>
                  <label>Enter your password:</label>
                  <input
                    type="password"
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button className='btn btn-primary w-50'>Sign in</button>
                </div>
                {error && <div className="text-danger mt-3">{error}</div>}
                <div className='mb-5'>
                  Not a member? <NavLink to="/register" className="header-button-link">Register</NavLink>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginEmail;
