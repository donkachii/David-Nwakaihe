import React from "react";
import "./header.css";
import { headers } from "../../data";

const Header = () => {
  const navslide = () => {
    const hams = document.querySelector(".hams");
    const nav = document.querySelector(".list-inline");
    const navLinks = document.querySelectorAll(".list-inline li");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    hams.classList.toggle("toggle");
  };

  return (
    <div className="dave-header-list">
      <ul className="list-inline m-0 d-flex align-items-center">
        {headers.map((nav, i) => (
          <a href={nav.href} key={i}>
            <li className="list-inline-item d-flex align-items-center justify-content-center">
              {nav.name}
            </li>
          </a>
        ))}
      </ul>

      <section className="hams" onClick={navslide}>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};

export default Header;
