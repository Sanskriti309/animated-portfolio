import { motion } from "framer-motion";
import React from "react";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sanskriti Verma
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/emailIcon.png" alt="image" />
          </a>
          <a href="#">
            <img src="/githubIcon.png" alt="image" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="image" />
          </a>
          <a href="#">
            <img src="/linkedinIcon.png" alt="image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
