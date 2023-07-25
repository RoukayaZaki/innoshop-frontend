import React from "react";
import Header from "../Header/Header";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import Footer from "../Footer/Footer";
import "./../../assets/css/about.css";
import "../../assets/css/about.css";
import NavBar from "../NavBar/NavBar";
function About() {
  const token = localStorage.getItem("token");
  const MyHeader = token === null ? Header : PersonalizedHeader;
  return (
    <div>
      <MyHeader />
      <NavBar />
      <div className="about">
        <h1>About Page</h1>
        <p>
        Welcome to our store! We are a passionate group of students from Innopolis University, united by our shared vision to bring the university community closer together through our exclusive merchandise. As fellow students, we understand the pride and spirit that courses through the veins of every member of this esteemed institution. Our mission is to create a hub where you can find unique and high-quality products that not only represent our beloved university but also embody the essence of our collective journey here. With creativity and innovation as our driving forces, we have meticulously designed each item to showcase our love for Innopolis and its vibrant culture. Every purchase from our store not only reflects your support for our initiative but also contributes to various university initiatives and causes close to our hearts. Join us on this exciting venture as we continue to grow, evolve, and leave a lasting mark on the Innopolis University legacy!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
