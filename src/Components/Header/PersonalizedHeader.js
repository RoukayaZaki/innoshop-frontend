import logo from './../../assets/innou-logo 1.png';
import "./../../assets/css/header.css"

import { Link } from 'react-router-dom';

const PersonalizedHeader = () => {
    return (
        <div className="header-cover">
            <div className="main-bar">
                <div className="start-section">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="end-section">
                    <Link to="/signin" className="sign-in-button">Sign Out</Link>
                </div>
            </div>
        </div>
    );
}

export default PersonalizedHeader;