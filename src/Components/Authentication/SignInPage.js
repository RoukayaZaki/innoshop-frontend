import styles from "./../../assets/css/signinpage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SignIn from "./SignIn"

const SignInPage = ({ setToken }) => {
    return (
        <div>
            <Header />
            <div className={styles.signinpage_aligner}>
                <SignIn setToken={setToken}/> 
            </div>
            <Footer />
        </div>
    );
}

export default SignInPage;
