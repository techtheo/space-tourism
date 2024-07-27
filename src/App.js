import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

const App = () => {
  const mobileNavMenu = () => {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
      nav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      nav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  };
  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <header className="primary-header flex">
        <div>
          <img
            className="logo"
            src="assets/shared/logo.svg"
            alt="space tourism logo"
          ></img>
        </div>
        {/* <div className="desktop-nav-line"></div> */}
        <button
          onClick={mobileNavMenu}
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
        >
          <span className="sr-only" aria-expanded="false">
            Menu
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible="false"
            className="primary-navigation underline-indicators flex"
          >
            <li className="active">
              <Link
                to="/"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span aria-hidden="true">01</span>Destination
              </Link>
            </li>
            <li>
              <Link
                to="/crew"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span aria-hidden="true">02</span>Crew
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className="text-white uppercase ff-sans-cond fs-300 letter-spacing-2"
              >
                <span aria-hidden="true">03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
};

export default App;
