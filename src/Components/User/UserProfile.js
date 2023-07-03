import React, { useState } from 'react';
import styles from "./../../assets/css/userprofile.module.css";
import { Link } from 'react-router-dom';
import Image from "./../../assets/innou-logo 3.png";
import PropTypes from "prop-types";


const UserProfilePage = ({ userDetail }) => {
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

export default UserProfilePage;

UserProfilePage.propTypes = {
    setToken: PropTypes.func.isRequired
}