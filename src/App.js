import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import ItemPage from './Components/ItemPage/ItemPage';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import StorePage from "./Components/StorePage/StorePage";
import SignInPage from './Components/Authentication/SignInPage';
import SignUpPage from './Components/Authentication/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [token, setToken] = useState('');

  const item = {
    id: 1,
    name: "item1",
    price: 1800,
    quantity: 2
  };
  const items = [item, item, item];
  
  return (
   
    <Router>
      <Routes>
        <Route exact path="/" element={<StorePage />} />
        <Route path="/product/:id" element={<ItemPage />} />
        <Route path="/signin/" element={<SignInPage setToken={setToken} />} />
        <Route path="/signup/" element={<SignUpPage setToken={setToken} />} />
        <Route path="/checkout/" element={<PurchasePage items={items}/>} />
      </Routes>
    </Router>
  );
}

export default App;
