import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" style={{marginTop:"20px", marginBottom:"0px"}}>
      <h1 className="text-center">Copyright &copy; Team Suman</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;