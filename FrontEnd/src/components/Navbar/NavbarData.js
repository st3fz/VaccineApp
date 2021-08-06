import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        className: "nav-text"
    },
    {
        title: "Log In",
        path: "/login",
        icon: <IoIcons.IoIosPaper />,
        className: "nav-text"
    },
    {
        title: "Chat",
        path: "/chat",
        icon: <FaIcons.FaEnvelopeOpen />,
        className: "nav-text"
    }
];