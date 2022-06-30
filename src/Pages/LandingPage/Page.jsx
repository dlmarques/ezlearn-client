import React, { useState, useRef } from "react";
import "./App.scss";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";

//icons
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineUser, AiOutlineGooglePlus } from "react-icons/ai";
import { BsCameraVideo, BsTelephoneFill, BsInstagram } from "react-icons/bs";
import { BiMessageDetail, BiWorld } from "react-icons/bi";
import { FaRegHandshake, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { ImHome, ImWhatsapp, ImTwitter } from "react-icons/im";

//components
import MenuMobile from "./MenuMobile/MenuMobile";
import Carousel from "./Swiper/Swiper";
import Map from "./Map";
import Login from "../AuthPages/Login/Login";
import Register from "../AuthPages/Register/Register";

//images
import IMAGES from "../../img/images";

//state management
import { useAuth } from "../../contexts/Context";
import { loginModalActions } from "../../store/UI/LoginModal/LoginUI";
import { registerModalActions } from "../../store/UI/RegisterModal/RegisterUI";
import { mobileMenuActions } from "../../store/UI/MobileMenu/MobileMenuUI";

const Page = () => {
  const dispatch = useDispatch();
  const prevScrollY = useRef(0);
  const { currentUser } = useAuth();

  const [changeColor, setChangeColor] = useState(false);
  const mobileMenuIsVisible = useSelector((state) => state.mobileMenuUI.mobileMenuIsVisible);

  const positionScroll = (e) => {
    const currentScrollY = e.target.scrollTop;

    if (currentScrollY >= 100) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
    prevScrollY.current = currentScrollY;
  };

  const openLoginModal = () => dispatch(loginModalActions.openLoginModal());

  const openRegisterModal = () => dispatch(registerModalActions.openRegisterModal());

  const openMobileMenu = () => dispatch(mobileMenuActions.openMobileMenu());

  return (
    <>
      <div className="main-container">
        <header>
          <div className={changeColor ? "topbar-active" : "topbar"}>
            <nav>
              <div className="logo">
                <img
                  src={changeColor ? IMAGES.logoActive : IMAGES.logo}
                  alt=""
                />
              </div>
              <div className="links">
                <a href="#ezlearn">EzLearn</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="menu">
                {currentUser ? null : (
                  <button id="platform" onClick={openRegisterModal}>
                    Register
                  </button>
                )}
                {currentUser ? (
                  <a href="/app">
                    <button id="platform">Open App</button>
                  </a>
                ) : (
                  <button id="platform" onClick={openLoginModal}>
                    Log in
                  </button>
                )}
              </div>
              <Register />
              <Login />
            </nav>
          </div>
          <div className={changeColor ? "menu-mobile-active" : "menu-mobile"}>
            {mobileMenuIsVisible ? null : (
              <HiOutlineMenu id="icon-menu" onClick={openMobileMenu} />
            )}
            <MenuMobile />
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
              <a href="/" id="discover">
                Discover EZLEARN
              </a>
            </div>

            <img src={IMAGES.man} alt="" />
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
                <img src={IMAGES.globe} alt="" />
                <h3>Learn anywhere</h3>
              </div>
              <div className="item">
                <img src={IMAGES.target} alt="" />
                <h3>Achieve goals</h3>
              </div>
              <div className="item">
                <img src={IMAGES.connect} alt="" />
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
                <img src={IMAGES.mix} alt="" />
                <div className="about-text">
                  <div className="title">
                    <h1>About EzLearn</h1>
                  </div>
                  <div className="text">
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos voluptatum maxime magni dolore sequi fuga sint libero
                      consequatur necessitatibus laboriosam, neque voluptates
                      sed, fugit adipisci, perspiciatis ratione eos. Quas, qui?
                    </h3>
                  </div>
                  <div className="icons">
                    <span>
                      <AiOutlineUser />
                      <div className="text-icons">
                        <h3>30k</h3>
                        <p>Total Users</p>
                      </div>
                    </span>
                    <span>
                      <BiWorld />
                      <div className="text-icons">
                        <h3>90+</h3>
                        <p>Countries</p>
                      </div>
                    </span>
                    <span>
                      <FaRegHandshake />
                      <div className="text-icons">
                        <h3>95%</h3>
                        <p>Satisfaction</p>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="wrapper"></div>
              </div>
            </div>
            <div className="team-container">
              <h1>Expert Team Members</h1>
              <h3>
                Our team of creative programmers, marketing experts and members.
                We are to be doing what we love.
              </h3>
              <div className="team-box">
                <div className="item-box">
                  <img src={IMAGES.team1} alt="" id="team-pic" />
                  <div className="item-text">
                    <h2>Daniel Shelach</h2>
                    <h3>Chief Executive Officer</h3>
                    <div className="icons">
                      <a href="/" id="icon-team">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-box">
                  <img src={IMAGES.team2} alt="" id="team-pic" />
                  <div className="item-text">
                    <h2>Bernarda Saffron</h2>
                    <h3>Growth Marketer</h3>
                    <div className="icons">
                      <a href="/" id="icon-team">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-box">
                  <img src={IMAGES.team3} alt="" id="team-pic" />
                  <div className="item-text">
                    <h2>Ryan Beau</h2>
                    <h3>Web Developer</h3>
                    <div className="icons">
                      <a href="/" id="icon-team">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-container">
              <h1 id="title">Testimonials</h1>
              <h3 id="subtitle">5000+ happy clients all around the world</h3>
              <div className="swiper-container">
                <Carousel />
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="parallax">
              <h1>Get in touch</h1>
              <p id="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <div className="contact-container">
                <div className="top">
                  <div className="contact-card">
                    <span className="item-contact">
                      <span className="bck-icon">
                        <ImHome />
                      </span>
                      <div className="text-contact">
                        <p>3916 Rosewood Court</p>
                        <p>3916 Rosewood Court</p>
                      </div>
                    </span>
                  </div>
                  <div className="contact-card">
                    <span className="item-contact">
                      <span className="bck-icon">
                        <BsTelephoneFill />
                      </span>
                      <div className="text-contact">
                        <p>507-231-8820</p>
                        <p>507-231-8820</p>
                      </div>
                    </span>
                  </div>
                  <div className="contact-card">
                    <span className="item-contact">
                      <span className="bck-icon">
                        <MdEmail />
                      </span>
                      <div className="text-contact">
                        <p>info@example.com</p>
                        <p>job@example.com</p>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    <Map />
                  </div>
                  <div className="right">
                    <form action="">
                      <input type="text" placeholder="Your Name" />
                      <input type="email" placeholder="Email" />
                      <input type="tel" placeholder="Phone Number" />
                      <input type="text" placeholder="Message" id="message" />
                      <input type="submit" id="submit" value="Submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="footer-content">
              <div className="left">
                <img src={IMAGES.footerLogo} alt="" />
                <p>
                  EzLearn is a frontend project to e-learning platform,
                  adaptable to any company{" "}
                </p>
                <div className="icons">
                  <span>
                    <ImWhatsapp />
                  </span>
                  <span>
                    <ImTwitter />
                  </span>
                  <span>
                    <BsInstagram />
                  </span>
                  <span>
                    <AiOutlineGooglePlus />
                  </span>
                  <span>
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <div className="right">
                <h1>Subscribe to our newsletter!</h1>
                <h3>Do not miss any news through our newsletter</h3>
                <form action="submit">
                  <input type="email" name="" id="" placeholder="Email" />
                </form>
              </div>
            </div>
            <div className="footer-bottom">
              <p id="copy">
                copyright &copy;2022{" "}
                <a href="https://www.dlmarques.com/" target="_blank" rel="noreferrer">
                  dlmarques
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Page;
