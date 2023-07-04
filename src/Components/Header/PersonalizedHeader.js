import logo from './../../assets/innou-logo 1.png';
import "./../../assets/css/header.css"
import { Link } from 'react-router-dom';
import cart from './../../assets/shopping-cart.png'

const PersonalizedHeader = () => {
    const handleSignOut = () => {
        localStorage.clear();
    }
    return (
        <div className="header-cover">
            <div className="main-bar">
                <div className="start-section">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="end-section">
                    <Link to="/checkout" className="cart-icon">
                        <img src={cart} alt="Cart" />
                    </Link>
                    <Link to="/signin" className="sign-in-button" onClick={handleSignOut}>Sign Out</Link>
                </div>
            </div>
        </div>
    );
}

export default PersonalizedHeader;
