import React from "react";
import Header from "../Header/Header";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import Footer from "../Footer/Footer";
import "./../../assets/css/about.css";
import "../../assets/css/about.css";
function About() {
  const token = localStorage.getItem("token");
  const MyHeader = token === null ? Header : PersonalizedHeader;
  return (
    <div>
      <MyHeader />
      <div className="about">
        <h1>About Page</h1>
        <p>
          Welcome to our About page. Here, we share information about our
          company.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
