import React, { useState } from 'react';
import styles from "./../../assets/css/signin.module.css";
import { Link } from 'react-router-dom';
import Image from "./../../assets/innou-logo 3.png";



async function signinUser(credentials) {
    return fetch('http://localhost:3001/api/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
};


const SignInPage = () => {

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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all the fields');
            return;
        }

        // Add your sign-up logic here, such as API calls or database storage
        console.log('Sign In:', email, password);

        const response = await signinUser({
            email,
            password
        });

        saveToken(response.token);

        // setting user details in local storage so that can be accessible on
        // profile page
        localStorage.setItem('current_user_id', JSON.stringify(response.id));

        // Clear form inputs after successful sign-up
        setEmail('');
        setPassword('');
    };

    console.log(styles);

    return (
        <div className={styles.signin_page}>
            <div className={styles.signin_left}>
                <img src={Image} alt="Innou Logo" />
            </div>
            <div className={styles.signin_right}>
                <h2 className={styles.h2}>Sign In</h2>
                <form className={styles.form} onSubmit={handleSignIn}>
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

                    <button className={styles.button} type="submit">Sign In</button>
                </form>
                <p className={styles.create_account_text}>
                    Don't have an account yet?{' '}
                    <Link to="/signup">Create one!</Link>
                </p>
            </div>
        </div>
    );
};

export default SignInPage;