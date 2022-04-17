import React, { useState, useRef } from "react";
import "./App.scss";
import { HiOutlineMenu } from "react-icons/hi";
import man from "./img/man.png";
import globe from "./img/globe.png";
import target from "./img/target.png";
import connect from "./img/connect.png";
import logo from "./img/logo.png";
import logoActive from "./img/logo-active.png";
import MenuMobile from "./MenuMobile/MenuMobile";
import about from "./img/about.svg";
import mix from "./img/mix.png";
import { BsCameraVideo } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";

const Page = () => {
  const prevScrollY = useRef(0);
  const [openMobile, setOpenMobile] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const positionScroll = (e) => {
    const currentScrollY = e.target.scrollTop;

    if (currentScrollY >= 100) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
    prevScrollY.current = currentScrollY;
  };

  return (
    <>
      <div className="main-container">
        <header>
          <div className={changeColor ? "topbar-active" : "topbar"}>
            <nav>
              <div className="logo">
                <img src={changeColor ? logoActive : logo} alt="" />
              </div>
              <div className="links">
                <a href="#ezlearn">EzLearn</a>
                <a href="#services">Services</a>
                <a href="">About</a>
                <a href="">Contact</a>
              </div>
              <div className="menu">
                <a href="" id="platform">
                  Go to Platform
                </a>
              </div>
            </nav>
          </div>
          <div className={changeColor ? "menu-mobile-active" : "menu-mobile"}>
            {openMobile ? (
              <HiOutlineMenu
                id="icon-menu"
                onClick={() => setOpenMobile(false)}
              />
            ) : (
              <HiOutlineMenu
                id="icon-menu"
                onClick={() => setOpenMobile(true)}
              />
            )}
            {openMobile ? <MenuMobile setOpenMobile={setOpenMobile} /> : null}
          </div>
        </header>
        <div className="content" onScroll={positionScroll}>
          <section id="hero">
            <div className="text">
              <h1>Welcome to EzLearn</h1>
              <p>
                EzLearn is a online platform of e-learning, with the best tools
                and technologies, adaptable to any institution.
              </p>
              <a href="" id="discover">
                Discover EZLEARN
              </a>
            </div>

            <img src={man} alt="" />
          </section>
          <section id="ezlearn">
            <div className="title">
              <h1>Why EzLearn?</h1>
              <h3>
                EzLearn is the best on the market due to the adaptability that
                the platform has, with the best teaching tools on the market.
              </h3>
            </div>

            <div className="something-container" on>
              <div className="item">
                <img src={globe} alt="" />
                <h3>Learn anywhere</h3>
              </div>
              <div className="item">
                <img src={target} alt="" />
                <h3>Achieve goals</h3>
              </div>
              <div className="item">
                <img src={connect} alt="" />
                <h3>Meet people</h3>
              </div>
            </div>
          </section>
          <section id="services">
            <div className="parallax">
              <h1>Services</h1>
              <div className="services-container">
                <div className="card">
                  <div className="title-card">
                    <BsCameraVideo />
                    <h1>Video Lessons</h1>
                  </div>
                  <div className="text-card">
                    <h3>EzLearn allow your platform have video lessons.</h3>
                  </div>
                </div>
                <div className="card">
                  <div className="title-card">
                    <BiMessageDetail />
                    <h1>Live Chat</h1>
                  </div>
                  <div className="text-card">
                    <h3>EzLearn can support live chat.</h3>
                  </div>
                </div>
                <div className="card">
                  <div className="title-card">
                    <FiBook />
                    <h1>School Library</h1>
                  </div>
                  <div className="text-card">
                    <h3>EzLearn can have a library with school books.</h3>
                  </div>
                </div>
                <div className="card">
                  <div className="title-card">
                    <BsPeople />
                    <h1>Working Together</h1>
                  </div>
                  <div className="text-card">
                    <h3>
                      EzLearn allow working together with your classmates.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="about">
            <div className="about-container">
              <div className="top">
              <img src={mix} alt="" />
              <div className="about-text">
                <div className="title">
                  <h1>About EzLearn</h1>
                </div>
                <div className="text">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum maxime magni dolore sequi fuga sint libero consequatur necessitatibus laboriosam, neque voluptates sed, fugit adipisci, perspiciatis ratione eos. Quas, qui?</h3>
                </div>
              </div>
              </div>
              <div className="bottom">
                
              </div>
             
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
