import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>
    },
    {
        title: "Log In",
        path: "/auth",
        icon: <IoIcons.IoIosPaper/>
    },
    {
        title: "Chat",
        path: "/chat",
        icon: <FaIcons.FaEnvelopeOpen/>
    },
    {
        title: "Sign Up for Special Needs",
        path: "",
        icon: <FaIcons.FaMedkit/>,
    },
    {
        title: "Become A Volunteer",
        path: "",
        icon: <FaIcons.FaPrayingHands/>
    }
];
