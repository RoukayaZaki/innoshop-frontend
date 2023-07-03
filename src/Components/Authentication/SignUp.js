import React, { useState } from 'react';
import styles from "./../../assets/css/signup.module.css";
import Image from "./../../assets/innou-logo 3.png";

// import PropTypes from "prop-types";

async function signupUser(credentials) {
  return fetch('http://localhost:3001/api/v1/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  // token for authentication
  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !passwordConfirm) {
      alert('Please fill in all the fields');
      return;
    }

    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    // Add your sign-up logic here, such as API calls or database storage
    const response = await signupUser({
      name,
      email,
      password,
      passwordConfirm
    });

    saveToken(response.token);

    // setting user details in local storage so that can be accessible on
    // profile page
    localStorage.setItem('current_user_id', JSON.stringify(response.data.user._id));

    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <div className={styles.signup_page}>
      <div className={styles.signup_left}>
        <img src={Image} alt="Innou Logo" />
      </div>
      <div className={styles.signup_right}>
        <h2 className={styles.h2}>Sign Up</h2>
        <form className={styles.form} onSubmit={handleSignUp}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles.label} htmlFor="password">Password:</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className={styles.label} htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            className={styles.input}
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;