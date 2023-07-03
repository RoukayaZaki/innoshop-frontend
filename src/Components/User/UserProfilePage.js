import styles from "./../../assets/css/userprofilepage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserProfile from "./UserProfile"

const UserProfilePage = ({ userDetail }) => {
    return (
        <div>
            <Header />
            <div className={styles.signinpage_aligner}>
                <UserProfile userDeatil={userDetail}/>
            </div>
            <Footer />
        </div>
    );
}

export default UserProfilePage;
