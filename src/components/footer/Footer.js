import React from "react";
import footerBg from "../../assets/images/footerBG.svg";
import footerBg2 from "../../assets/images/footerBG2.svg";
import copyright from "../../assets/images/copyright.svg";
import love from "../../assets/images/loveImg.svg";
import { socials } from "../../data";
import "./footer.css"

const Footer = ({ toSend, handleChange, handleSubmit, maillError }) => {
  return (
    <div>
      {" "}
      <section
        id="contact"
        className="footer-bg"
        style={{ background: `url(${footerBg})` }}
      >
        <div className="dave-footer">
          <article className="footer-contact row">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <h2 className="footer-drop-line">
                Drop me a line. <br /> I would like to hear <br /> from you.
              </h2>
            </div>
            <div className="col-md-7 footer-contact-input py-3">
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <p className="dave-alert">{alert}</p>
                <div className="pb-3">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="pb-3">
                  <p className="dave-alert">{maillError}</p>
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    required
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                </div>
                <div className="pb-4">
                  <textarea
                    maxLength="1000"
                    rows="5"
                    style={{ resize: "none" }}
                    placeholder="Message"
                    required
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="dave-btn pb-4">
                  <button type="submit">Send Message</button>
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
                {socials.map((s) => (
                  <a href={s.link} key={s.name}>
                    <img className="pl-3" src={s.image} alt={s.name} />
                  </a>
                ))}
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

export default Footer;
