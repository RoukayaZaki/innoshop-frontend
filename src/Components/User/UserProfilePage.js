import "./../../assets/css/userprofilepage.css"
import PersonalizedHeader from "../Header/PersonalizedHeader";
import Footer from "../Footer/Footer";
import User from "./UserProfile"

const UserProfilePage = () => {
    return (
        <div>
            <PersonalizedHeader />
            <div className="panel-aligner">
                <User />
            </div>

            <Footer />
        </div>
    );
}

export default UserProfilePage;