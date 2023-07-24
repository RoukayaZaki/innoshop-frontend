import React, { useEffect, useState } from 'react';
import ItemPage from './Components/ItemPage/ItemPage';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import StorePage from './Components/StorePage/StorePage';
import SignInPage from './Components/SignIn/SignInPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfilePage from './Components/User/UserProfilePage';
import Success from './Components/Verdict/Success';
import Fail from './Components/Verdict/Fail';
import About from './Components/About/About';

function App() {
 
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StorePage />} />
        <Route path="/product/:id" element={<ItemPage />  } />
        <Route path="/signin/" element={<SignInPage />} />
        <Route path="/checkout/" element={<PurchasePage />} />
        <Route path="/profile/" element={<UserProfilePage />} />
        <Route path="/success/" element={<Success />} />
        <Route path="/fail/" element={<Fail />} />
        <Route path="/about/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
