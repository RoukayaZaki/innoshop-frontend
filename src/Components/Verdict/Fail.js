import React, { useEffect } from 'react';
import Header from '../Header/Header';
import PersonalizedHeader from '../Header/PersonalizedHeader';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { X } from 'react-bootstrap-icons';
import './../../assets/css/verdict.css';

const Fail = () => {
  const token = localStorage.getItem('token');
  const MyHeader = token === null ? Header : PersonalizedHeader;

  useEffect(() => {
    const delay = 3000; // 3 seconds

    const timer = setTimeout(() => {
      window.onbeforeunload = null; // Allow the user to navigate after 3 seconds
    }, delay);

    // Prompt the user before they leave the page
    window.onbeforeunload = () => {
      return 'Are you sure you want to leave this page?';
    };

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <MyHeader />
      <NavBar />
      <div className="verdict">
        <X size={200} color="red" />
        <h2>Payment Failed :(</h2>
        <h3>Please, try again later!</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Fail;
