import "./../../assets/css/signinpage.css"
import Header from "../Header/Header2";
import Footer from "../Footer/Footer";
import SignIn from "./SignIn"

const SignInPage = () => {
    return (
        <div>
            <Header />
            <div className="signinpage-aligner">
                <SignIn /> 
            </div>
            <Footer />
        </div>
    );
}

export default SignInPage;
