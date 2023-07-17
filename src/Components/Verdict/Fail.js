import Header from "../Header/Header";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { X } from 'react-bootstrap-icons';
import './../../assets/css/verdict.css';

const Fail = () => {
    const token = localStorage.getItem('token');
    const MyHeader = token === null ? Header : PersonalizedHeader;
    return (
        <div>
            <MyHeader />
            <NavBar />
            <div className="verdict">
                <X size={200} color="red"/>
                <h2>Payment Failed :(</h2> <h3>Please, try again later!</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Fail;