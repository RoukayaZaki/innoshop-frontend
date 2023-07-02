import React, { useState } from 'react';
import "./../../assets/css/signup.css";
import Image from "./../../assets/innou-logo 3.png";


const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
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

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-page">
    <div className="signup-left">
      <img src={Image} alt="Innou Logo" />
    </div>
    <div className="signup-right">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignUpPage;
