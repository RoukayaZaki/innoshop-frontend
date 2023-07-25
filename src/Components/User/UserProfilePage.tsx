import React from 'react';
import "./../../assets/css/userprofilepage.css";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import Footer from "../Footer/Footer";
import User from "./UserProfile";
import NavBar from "../NavBar/NavBar";

const UserProfilePage: React.FC = () => {
    return (
        <div>
            <PersonalizedHeader onSearch={undefined} />
            <NavBar />
            <div className="panel-aligner">
                <User />
            </div>
            <Footer />
        </div>
    );
}

export default UserProfilePage;
