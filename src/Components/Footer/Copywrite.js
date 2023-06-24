import "./../../assets/css/copywrite.css"
import white_logo from "./../../assets/innou-logo 2.png"


const Copywrite = () => {
    return (

        <div className="copywrite">
            <p>&copy; {new Date().getFullYear()} Innopolis University All rights reserved.</p>
            <img src={white_logo} alt="Logo" className="whitelogo" />
            <nav>
                <ul className="documents">
                    <li><a href="/">Terms of Service</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
            </nav>
        </div>

    );
};

export default Copywrite;