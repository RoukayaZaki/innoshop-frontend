import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import ItemPage from './Components/ItemPage/ItemPage';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import StorePage from "./Components/StorePage/StorePage";
import SignInPage from './Components/Authentication/SignInPage';
import SignUpPage from './Components/Authentication/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  const [token, setToken] = useState('');
  const [items, setItems] = useState([]);

  // Function to add an item to the list
  const addItemToList = (item) => {
    setItems([...items, item]);
  };
 
  // const item = {
  //   id: 1,
  //   name: "item1",
  //   price: 1800,
  //   quantity: 2
  // };

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<StorePage />} />
        <Route path="/product/:id" element={<ItemPage />} />
        <Route path="/signin/" element={<SignInPage setToken={setToken} />} />
        <Route path="/signup/" element={<SignUpPage setToken={setToken} />} />
        <Route path="/checkout/" element={<PurchasePage items={addItemToList}/>} />
      </Routes>
    </Router>
  );
}

export default App;
