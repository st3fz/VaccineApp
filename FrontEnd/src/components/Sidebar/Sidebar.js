import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";
import { SidebarData } from "./SidebarData";

import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

function Sidebar(props) {

    return (
      <>
      <IconContext.Provider value={{ color: 'white' }}>
        <h2>{props.sidebar}</h2>
        <nav className={`nav-menu pt-5 ${props.sidebar ? 'active' : ''}`}>
            <ul className="nav-menu-items">
                <li onClick={props.toggleSidebar} className="navbar-toggle d-flex align-items-center">
                    <Link to="#" className="cross-icon">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
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

export default Sidebar
