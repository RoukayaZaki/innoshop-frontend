import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import SignInPage from './Components/SignIn/SignInPage';
import SignUpPage from './Components/SignIn/SignUpPage';
import ItemPage from './Components/ItemPage/ItemPage';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import StorePage from "./Components/StorePage/StorePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
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
        <Route path="/signin/" element={<SignInPage />} />
        <Route path="/signup/" element={<SignUpPage />} />
        <Route path="/checkout/" element={<PurchasePage items={items}/>} />
      </Routes>
    </Router>
  );
}

export default App;
