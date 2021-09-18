import React, { useEffect, useState } from "react";
import image from "./assets/download.png";
import avatar from "./assets/ava.jpg";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scrool");
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img src={image} alt="Logo" className="nav_logo" />
      <img src={avatar} alt="Logo" className="nav_avatar" />
    </div>
  );
}

export default Nav;
