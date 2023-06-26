import Header from "../Header/Header";
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ItemDisplay from "./ItemDisplay";
import { useParams } from 'react-router-dom';


const ItemPage = () => {
    const item = {
        price: 1800,
        name: "IU T-Shirt Pattern",
        img: 'http://localhost:3001/503.jpg',
        description: "T-Shirt",
        gallery: [
            'http://localhost:3001/503.jpg',
            'http://localhost:3001/503.jpg',
            'http://localhost:3001/503.jpg'
        ]
    };
    return (
        <div>
            <Header />
            <NavBar />
            <ItemDisplay item={item} />
            <Footer />
        </div>
    );
}

export default ItemPage;