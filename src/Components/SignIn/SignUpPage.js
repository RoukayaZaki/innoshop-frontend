import "./../../assets/css/signuppage.css"
import Header from "../Header/Header2";
import Footer from "../Footer/Footer";
import SignUp from "./SignUp"
const SignUpPage = () => {
    return (
        <div>
            <Header />
            <div className="signunpage-aligner">
                <SignUp /> 
            </div>
            <Footer />
        </div>
    );
}

export default SignUpPage;
