import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {
  BsFillCloudHaze2Fill,
  BsFillHouseFill
} from "react-icons/bs";

const Nav = ({ currentPage }) => {
  return (
    <>
      {/* Nav */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"blue", width:'100vw', position:'relative'}}>
        <div className="container flex" style={{position: "fixed !important"}}>
          <Link to={"/"} className="navbar-brand ">
            <BsFillCloudHaze2Fill />
            Rank Math
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  // if current page is home page give it a class of active
                  className={
                    currentPage === "home" ? "nav-link active " : "nav-link "
                  }
                  to="/"
                >
                  <BsFillHouseFill /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  // if current login is home page give it a class of active

                  className={
                    currentPage === "login" ? "nav-link active " : "nav-link "
                  }
                  to="/"
                >
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;