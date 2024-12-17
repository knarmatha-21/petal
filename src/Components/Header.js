import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import cx from "classnames";
import menuIcon from "../assets/images/menuIcon.png";
import closeIcon from "../assets/images/close.png";

const Header = () => {
  const [sideMenuWidth, setSideMenuWidth] = useState(0);
  const openNav = () => setSideMenuWidth(100);
  const closeNav = () => setSideMenuWidth(0);

  return (
    <div>
      <div className="headerSec">
        <div className="headerBg">
          <Navbar expand="lg">
            <Container>
              <div className={cx("headerFlex")}>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <ul className="headerMenuLists">
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                </ul>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
      <div className="headerSec">
        <div className="mobileHeader headerBg">
          <div className="headerFlex">
            Logo
            <div className={""} onClick={openNav}>
              <img src={menuIcon} className="dropDownIcon menuIcon" alt="" />
            </div>
          </div>
          <div
            id="mySidenav"
            className="sidenav"
            style={{ width: `${sideMenuWidth}%` }}
          >
            <span className="closebtn" onClick={closeNav}>
             <img src={closeIcon} alt="Close" className="sideMenuCloseIcon"/>
            </span>
            <div>
              <ul className="paddingLeftNone">
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
