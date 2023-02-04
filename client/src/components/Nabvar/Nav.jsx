import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="nav">
      <div className="nav__header">
        <Link to="/" className="nav__link">
          <span className="nav__title">Juan Luna Servicios</span>
        </Link>
        <div>
          <div className="wrapper">
            <button
              className={`${menu ? "dn" : "nav__login"}`}
              onClick={handleClick}
            >
              <i class="bx bx-menu"></i>
            </button>
            <div className={`${menu ? "contact__menu" : "dn"}`}>
              <button
                className={`${menu ? "nav__login-x" : "dn"}`}
                onClick={handleClick}
              >
                <i class="bx bx-x"></i>
              </button>
              <Link to="" className="nav__link">
                <button className="nav__login">
                  <i class="bx bx-envelope"></i>
                </button>
              </Link>
              <Link to="" className="nav__link">
                <button className="nav__login">
                  <i class="bx bxl-whatsapp"></i>
                </button>
              </Link>
              <Link to="" className="nav__link">
                <button className="nav__login">
                  <i class="bx bx-message-dots"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
