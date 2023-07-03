import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import ItemPage from './Components/ItemPage/ItemPage';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import StorePage from "./Components/StorePage/StorePage";
import SignInPage from './Components/Authentication/SignInPage';
import SignUpPage from './Components/Authentication/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfilePage from './Components/User/UserProfilePage';

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
        <Route path="/userprofile/" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
