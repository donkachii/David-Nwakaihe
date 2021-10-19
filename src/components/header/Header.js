import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  useEffect(() => {
    /**
     * Function to change background of the header when you start scrolling
     */
    const listenToScrollEvent = () => {
      document.addEventListener("scroll", () => {
        requestAnimationFrame(() => {
          var scrollTop = window.pageYOffset;
          let nav = document.querySelector("#dave-header");
          if (scrollTop < 10) {
            nav.style.background =
              header === "purple" ? "#FFFFFF" : "transparent";
          } else {
            nav.style.background =
              header === "purple"
                ? "#FFFFFF"
                : "linear-gradient(0deg,rgba(96, 19, 98, 1),rgba(96, 19, 98, 1))";
          }
        });
      });
    };
    listenToScrollEvent();
  }, [props.location.pathname, header]);
  return (
    <div
      id="dave-header"
      className={`d-flex justify-content-between align-items-center ${
        header === "purple" && "shadow"
      }`}
      style={{
        background: header === "purple" ? "#FFFFFF" : "",
        position: header === "purple" ? "sticky" : "",
      }}
    >
      <article
        className={` ${
          header === "purple" ? "blue-text" : ""
        } dave-desk-header-list`}
      >
        <ul className="list-inline m-0 d-flex align-items-center">
          <li
            className="list-inline-item"
            onClick={() => {
              props.history.push("/");
              window.scrollTo(0, 0);
            }}
          >
            Home
          </li>
          <li
            className="list-inline-item"
            onClick={() => {
              history.push("#about");
              window.scrollTo(0, 0);
            }}
          >
            About
          </li>
          <li
            className="list-inline-item"
            onClick={() => {
              history.push("#skills");
              window.scrollTo(0, 0);
            }}
          >
            Skills
          </li>
          <li
            className="list-inline-item"
            onClick={() => {
              history.push("#projects");
              window.scrollTo(0, 0);
            }}
          >
            Projects
          </li>
          <li
            className="list-inline-item"
            onClick={() => {
              history.push("#contact");
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Header;
