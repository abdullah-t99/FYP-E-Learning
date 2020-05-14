import React from "react";
import Router from "next/router";
import courses from "../../static/data";
import topics from "../../static/data";
import Search from "../search/index";
import "./header.css";

const DefaultHeader = ({ isUser, user_name, user_id, user_email }) => {
  const logout = async () => {
    await sessionStorage.removeItem("user_info");
    await sessionStorage.removeItem("db-user-response");
    Router.push("/");
  };
  return (
    <>
      <div id="flipkart-navbar">
        <div className="container">
          <div className="row row1" style={{ marginLeft: "300px" }} />
          <div className="row row2">
            <div className="col-sm-2">
              <a href="/">
                <img
                  className="logo"
                  src="/static/images/maths-logo.png"
                  style={{ marginTop: "-8px" }}
                />
              </a>

              {/* <h1 style={{ margin: "0px", marginLeft: '-120px' }}>
                <span className="largenav">Maths Squared</span>
              </h1> */}
            </div>
            <div
              className="flipkart-navbar-search smallsearch col-sm-8 col-xs-8"
              style={{ marginTop: "10px" }}
            >
              <div className="row">
                <Search items={{ courses }} />
              </div>
            </div>
            <div
              className="cart largenav col-sm-2"
              style={{ marginTop: "10px" }}
            >
              {isUser ? (
                <>
                  <li className="cart-button">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ padding: "0px", color: "white" }}
                      //className="cart-button"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user_name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-users"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        href={`/dashboard?email=${user_email}&id=${user_id}`}
                      >
                        Dashboard
                      </a>
                      <a
                        className="dropdown-item"
                        href={`/profile?email=${user_email}`}
                      >
                        Profile
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" onClick={logout}>
                        Logout
                      </a>
                    </div>
                  </li>
                </>
              ) : (
                <div style={{ marginTop: "10px" }}>
                  <li className="upper-links">
                    <a
                      className="links"
                      href="/auth/login"
                      style={{ fontSize: "large" }}
                    >
                      Login
                    </a>
                  </li>
                  <li className="upper-links">
                    <a
                      className="links"
                      href="/auth/register"
                      style={{ fontSize: "large" }}
                    >
                      Register
                    </a>
                  </li>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultHeader;
