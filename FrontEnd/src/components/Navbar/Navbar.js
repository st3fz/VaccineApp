import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { NavbarData } from "./NavbarData";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Navbar() {
    const[ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        openNav();
    }

    // const openNav = () => {
        
    // }

    return (
      <>
      <IconContext.Provider value={{ color: '#ffffff' }}>
        <div className="navbar">
            <Link to="#" className="menu-hamburger">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
            <ul onClick={showSidebar} className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-hamburger">
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
