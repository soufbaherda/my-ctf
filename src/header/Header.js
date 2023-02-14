import React, { useContext } from 'react';
import logo from './logoPwC.png'
import navbar from './header.module.css'
import { Link } from "react-router-dom";
// import { IoMdLogOut } from "react-icons/io";

const Header = () => {
    return (
        <div className={navbar.navbar}>
            <div className={navbar.container}>
                <div className={navbar.logoContainer}>
                    <img src={logo} alt='logo' className={navbar.logo} />
                </div>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default Header;
