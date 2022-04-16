import React from "react";
import "./App.scss";
import { TiShoppingCart, TiUserOutline } from "react-icons/ti";
import  man from "./img/man.png"
import  man2 from "./img/man2.png"
import logo from "./img/logo.png"

const Page = () => {
  return (
    <div className="page-container">
      <header>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <a href="">Product</a>
            <a href="">Services</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
          <div className="menu">
            <a href="" id="platform">Go to Platform</a>
          </div>
        </div>
      </header>
      <section id="hero">  
        <div className="text">
            <h1>Welcome to EZLEARN</h1>
            <p>EZLEARN is a online platform of e-learning, with the best tools and technologies, 
adaptable to any institution.</p>
<a href="">Discover EZLEARN</a>
        </div>

            <img src={man} alt="" />

      </section>
    </div>
  );
};

export default Page;
