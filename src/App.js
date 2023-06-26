import './App.css';
import ItemPage from './Components/ItemPage/ItemPage';
import StorePage from "./Components/StorePage/StorePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <StorePage />
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={StorePage} />
    //     <Route path="/product/:id" element={ItemPage} />
    //   </Routes>
    // </Router>
  );
}

export default App;
