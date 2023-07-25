import React from "react";
import Header from "../Header/Header";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import banner from "./../../assets/innou-logo 3.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Hero_Banner from "../StorePage/HeroBanner";
import { Link } from "react-router-dom";
import "./../../assets/css/storepage.css";
import "./../../assets/css/home.css";

function Home() {
  const token = localStorage.getItem("token");
  const MyHeader: React.FC = token === null ? Header : PersonalizedHeader;
  const username: string = localStorage.getItem("name") || '';

  // Conditional greeting message
  // eslint-disable-next-line no-template-curly-in-string
  const greetingMessage: string | null = username ? `Hello, ${username}`: null;

  return (
    <div className="home">
      <MyHeader />
      <NavBar />
      {/* <div className="banner">
                <img src={banner} alt="Banner" className="banner-image" />
            </div> */}
      <Hero_Banner />
      {greetingMessage && <h2>{greetingMessage}</h2>}
      <div className="card-container">
        <Card className="card">
          <Card.Header className="card-header">Products</Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Innopolis Merch</Card.Title>
            <Card.Text>
              Explore the amazing merch and buy cool things!
            </Card.Text>
            <Link to={"/store"}>
              <Button id="button-btn" variant="primary">
                Let's Go
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Header className="card-header">About Us</Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Team and Motivation</Card.Title>
            <Card.Text>
              You can learn more about us and our motives and goals for this
              store.
            </Card.Text>
            <Link to={"/about"}>
              <Button id="button-btn" variant="primary">
                Learn more
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
