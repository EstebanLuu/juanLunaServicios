import React from "react";
import "./Header.scss";
import Nav from "./Nav";
import Head from "./Head";

const Header = () => {
  return (
    <div className="navbar">
      <Nav />
      <Head />
    </div>
  );
};

export default Header;
