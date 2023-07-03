import styles from "./../../assets/css/signuppage.module.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SignUp from "./SignUp"

const SignUpPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.signunpage_aligner}>
                <SignUp /> 
            </div>
            <Footer />
        </div>
    );
}

export default SignUpPage;
