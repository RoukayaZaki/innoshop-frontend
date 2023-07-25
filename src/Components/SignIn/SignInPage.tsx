import React, { useState, FormEvent } from 'react';
import './../../assets/css/signin.css'
import { Link, useNavigate } from 'react-router-dom';
import Image from "./../../assets/innou-logo 3.png";

interface SigninCredentials {
    email: string;
    password: string;
}

interface SignupCredentials {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

async function signinUser(credentials: SigninCredentials) {
    return fetch('http://localhost:3001/api/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

async function signupUser(credentials: SignupCredentials) {
    return fetch('http://localhost:3001/api/v1/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const SignInTitle: React.FC<{ selected: boolean; onClick: () => void }> = ({ selected, onClick }) => (
    <div className={`title ${selected ? 'selected' : ''}`} onClick={onClick}>
        Sign In
    </div>
);

const SignUpTitle: React.FC<{ selected: boolean; onClick: () => void }> = ({ selected, onClick }) => (
    <div className={`title ${selected ? 'selected' : ''}`} onClick={onClick}>
        Sign Up
    </div>
);

const SignInPage: React.FC = () => {
    const [signInMode, setSignInMode] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        if (tokenString === null) {
            return '';
        }
        // console.log(tokenString);
        const userToken = JSON.parse(tokenString);
        return userToken.token as string;
    };

    // token for authentication
    const [token, setToken] = useState<string>(getToken());

    function saveToken(userToken: string) {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const navigate = useNavigate();

    const handleSignInMode = () => {
        setSignInMode(!signInMode);
        // Reset form fields when switching modes
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    };

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all the fields');
            return;
        }

        // Add your sign-in logic here, such as API calls or database storage
        console.log('Sign In:', email, password);

        try {
            const response = await signinUser({
                email,
                password
            });

            console.log(response);

            if (response.status === 'success') {
                saveToken(response.token);

                // setting user details in local storage so that can be accessible on
                // profile page
                console.log(response);
                localStorage.setItem('current_user_id', response.data.user._id);
                navigate('/profile');
            }
            else {
                window.alert(
                    <div className="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{response.message}</span>
                    </div>
                );
            }

            // Clear form inputs after successful sign-in
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log('Error during sign-in:', error);
        }
    };

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !passwordConfirm) {
            alert('Please fill in all the fields');
            return;
        }

        if (password !== passwordConfirm) {
            console.log(password);
            console.log(passwordConfirm);
            alert('Passwords do not match');
            return;
        }

        // Add your sign-up logic here, such as API calls or database storage
        try {
            const response = await signupUser({
                name,
                email,
                password,
                passwordConfirm
            });

            if (response.status === 'success') {
                saveToken(response.token);

                // setting user details in local storage so that can be accessible on
                // profile page
                localStorage.setItem('current_user_id', response.data.user._id);
                navigate('/profile');
            }
            else {
                window.alert(
                    <div className="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{response.message}</span>
                    </div>
                );
            }

            // Clear form inputs after successful sign-up
            setName('');
            setEmail('');
            setPassword('');
            setPasswordConfirm('');
        } catch (error) {
            console.log('Error during sign-up:', error);
        }
    };

    return (
        <div className="sign-in-page">
            <div className="left-half"></div>
            <div className="right-half">
                <div className="nav-container">
                    <div className="title-container">
                        <SignInTitle selected={signInMode} onClick={handleSignInMode} />
                        <SignUpTitle selected={!signInMode} onClick={handleSignInMode} />
                    </div>
                </div>
                <form className="form">
                    {signInMode ? (
                        <div className='signin-container'>
                            <div className={`form-field ${signInMode ? 'animated' : 'reverse-animated'}`}>
                                <input
                                    type="email"
                                    className="input-field"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={`form-field ${signInMode ? 'animated' : 'reverse-animated'}`}>
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='signin-container'>
                            <div className={`form-field ${signInMode ? 'animated' : 'reverse-animated'}`}>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={`form-field ${signInMode ? 'animated' : 'reverse-animated'}`}>
                                <input
                                    type="email"
                                    className="input-field"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={`form-field ${signInMode ? 'animated' : 'reverse-animated'}`}>
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={`form-field ${signInMode ? 'animated' : 'reverse-animated'}`}>
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Confirm Password"
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                    <button type="button" className="form-button" onClick={signInMode ? handleSignIn : handleSignUp}>
                        {signInMode ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
