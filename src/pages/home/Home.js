import React from "react";
import "./home.css";
import backgroundOne from "../../assets/images/background0ne.svg";
import circleBg from "../../assets/images/circleBg.svg";
import daveSeat from "../../assets/images/daveSeat.svg";
import spreadBg from "../../assets/images/spreadBg.svg";
import daveImg from "../../assets/images/daveImg.svg";
import salyman from "../../assets/images/salymanImg.svg";
import scroll from "../../assets/images/scrollImg.svg";
import laptopImg from "../../assets/images/laptopImg.svg";
import iconOne from "../../assets/images/iconOne.svg";
import iconTwo from "../../assets/images/iconTwo.svg";
import iconThree from "../../assets/images/iconThree.svg";
import iconFour from "../../assets/images/iconFour.svg";
import footerBg from "../../assets/images/footerBG.svg";
import footerBg2 from "../../assets/images/footerBG2.svg";
import twitter from "../../assets/images/twitter.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import copyright from "../../assets/images/copyright.svg";
import love from "../../assets/images/loveImg.svg";
import blueySplash from "../../assets/images/blueySplash.svg";

const Home = () => {
  return (
    <div>
      <section
        className="dave-background mx-0"
        style={{ background: `url(${backgroundOne})` }}
      >
        <div className="dave-background-inner">
        <div className="dave-header-list">
          <ul className="list-inline m-0 d-flex align-items-center">
            <a href="#" ><li className="list-inline-item d-flex align-items-center justify-content-center">Home</li></a>
            <a href="#about" ><li className="list-inline-item d-flex align-items-center justify-content-center">About</li></a>
            <a href="#skills" ><li className="list-inline-item d-flex align-items-center justify-content-center">Skills</li></a>
            <a href="#works" ><li className="list-inline-item d-flex align-items-center justify-content-center">Works</li></a>
            <a href="#contact" ><li className="list-inline-item d-flex align-items-center justify-content-center">Contact</li></a>
          </ul>
        </div>
        <div className="row d-flex flex-wrap align-items-center">
          <article className="col-md-8">
            <article
              className="dave-circle"
              style={{
                background: `url(${circleBg})`,
              }}
            >
              <div className="dave-name">
                <h3>Hi, I'm David</h3>
              </div>
            </article>
          </article>
          <article className="col-md-4">
            <img className="dave-seat" src={daveSeat} alt="David" />
          </article>
        </div>
        </div>
      </section>

      <section className="dave-list-icons">
        <img src={iconOne} alt="Background icon" />
        <img src={iconTwo} alt="Background icon" />
        <img src={iconThree} alt="Background icon" />
        <img src={iconFour} alt="Background icon" />
      </section>
      <img className="dave-spreadBg" src={spreadBg} alt="Spread" />

      <section id="about" className="dave-about row">
        <article className="d-flex flex-column col-md-5">
          <img src={daveImg} alt="David" className="david-img" height="588px" />
          <img
            className="scroll"
            src={scroll}
            alt="scroll"
            width="68px"
            height="25px"
          />
        </article>
        <article className="dave-about-article col-md-7">
          <h3 className="dave-heading">About Me</h3>
          <p className="dave-paragraph pb-3 d-flex justify-content-center">
            An inquisitive Computer Science Engineering student, skilled in
            leadership, seeking to leverage solid development skills with focus
            on collaboration, communication and passion.
          </p>
          <div className="dave-btn">
            <a
              href="/resume.pdf"
              download="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              View/Download CV
            </a>
          </div>
          <div className="salyman-img">
            <img
              className=""
              src={salyman}
              alt="Man pressing laptop on floor"
            />
          </div>
        </article>
        {/* <div className="blue-splash"><img src={blueySplash} alt="Splash" /></div> */}
      </section>
      <section id="skills" className="skills row">
        <article className="col-md-7">
          <h3 className="dave-heading">Skills</h3>
          <p className="dave-paragraph pb-3">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between.
          </p>
        </article>
        <article className="col-md-5">
          <img className="laptop" src={laptopImg} alt="laptop" />
        </article>
      </section>

      <section id="contact" className="footer-bg" style={{ background: `url(${footerBg})` }}>
        <div className="dave-footer">
          <article className="footer-contact row">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <h2 className="footer-drop-line">
                Drop me a line. <br /> I would like to hear <br /> from you.
              </h2>
            </div>
            <div className="col-md-7 footer-contact-input py-3">
              <h2>Get In Touch</h2>
              <form>
                <div className="pb-3">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="pb-3">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="pb-4">
                  <textarea
                    maxLength="1000"
                    rows="5"
                    style={{ resize: "none" }}
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="dave-btn pb-4">
                  <a
                    href=""
                    download="resume"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </article>
        </div>
        <article
          className="footer-bg2"
          style={{ background: `url(${footerBg2})` }}
        >
          <div className="d-flex align-items-center justify-content-center py-4">
            <aside className="footer-social">
              <div className="d-flex justify-content-center">
                <h4 className="">don_kachi</h4>
              </div>

              <div className="d-flex justify-content-center py-4">
                <a href="https://twitter.com/donkachii">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https://github.com/donkachii">
                  <img className="pl-3" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/david-nwakaihe-26006b174/">
                  <img className="pl-3" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/don_kachi/">
                  <img className="pl-3" src={instagram} alt="instagram" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <p className="footer-text">
                  All Rights Reserved <img src={copyright} alt="copyright" />{" "}
                  2021 Kachi <img className="pl-3" src={love} alt="love" />
                </p>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
