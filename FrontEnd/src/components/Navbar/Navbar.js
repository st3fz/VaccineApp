import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { NavbarData } from "./NavbarData";

// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

function Navbar() {
    
    const[ sidebar, toggleSidebar ] = useState(false);

    const showSidebar = () => {
        toggleSidebar(!sidebar);
    }

    return (
      <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className="navbar py-4 pl-5">
            {/* <FaIcons.FaBars className="hamburger-menu"/> */}
            <a className="navbar-brand" onClick={showSidebar}>Vaccine App</a>
        </div>
        <nav className={`nav-menu ${sidebar ? 'active' : ''}`}>
            <ul className="nav-menu-items">
                <li onClick={showSidebar} className="navbar-toggle d-flex align-items-center">
                    <Link to="#" className="cross-icon">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {NavbarData.map((item, index) => {
                    return(
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                             <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar
