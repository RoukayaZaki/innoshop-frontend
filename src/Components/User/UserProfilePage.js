// import styles from "./../../assets/css/userprofilepage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserProfile from "./UserProfile"
import SignInPage from "../Authentication/SignIn";

const UserProfilePage = ({ userDetail }) => {

    if(!localStorage.getItem('token')) {
        return (
            <SignInPage />
        );
    }

    return (
        <div>
            <Header />
            <div>
                <UserProfile userDetail={userDetail}/>
            </div>
            <Footer />
        </div>
    );
}

export default UserProfilePage;
