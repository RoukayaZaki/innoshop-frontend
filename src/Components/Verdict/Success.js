import React, { useEffect } from 'react';
import Header from '../Header/Header';
import PersonalizedHeader from '../Header/PersonalizedHeader';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Check } from 'react-bootstrap-icons';
import './../../assets/css/verdict.css';

const Successful = () => {
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
        <Check size={200} color="#40BA21" />
        <h2>Payment Successful!!!</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Successful;
