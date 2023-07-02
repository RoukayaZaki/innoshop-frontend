import Header from "../Header/Header";
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CheckoutPart from "./CheckoutPart";

const PurchasePage = ({items}) => {
    return (
        <div>
            <Header />
            <NavBar />
            <CheckoutPart items={items}/>
            <Footer />
        </div>
    );
}

export default PurchasePage;
