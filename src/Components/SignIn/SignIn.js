import React, { useState } from 'react';
import "./../../assets/css/signin.css";
import { Link } from 'react-router-dom';
import Image from "./../../assets/innou-logo 3.png";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
        alert('Please fill in all the fields');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
      // Add your sign-up logic here, such as API calls or database storage
      console.log('Sign Up:', email, password);
  
      // Clear form inputs after successful sign-up
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    console.log('Sign In:', email, password);
  };

  return (
    <div className="signin-page">
      <div className="signin-left">
        <img src={Image} alt="Innou Logo" />
      </div>
      <div className="signin-right">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
        <p className="create-account-text">
          Don't have an account yet?{' '}
          <Link to="/signup">Create one!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
