import Header from "../Header/Header";
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CheckoutPart from "./CheckoutPart";
import PersonalizedHeader from "../Header/PersonalizedHeader";

const PurchasePage = ({items}) => {
    
    return (
        <div>
            <PersonalizedHeader />
            <NavBar />
            <CheckoutPart items={items}/>
            <Footer />
        </div>
    );
}

export default PurchasePage;
