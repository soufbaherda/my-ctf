import React from 'react';
import style from './home.module.css'
import Header from '../header/Header';

import { Link } from "react-router-dom";
import { grey } from '@mui/material/colors';


const Home = () => {
    return (
        <div>
            <Header />
            <div className={style[`rect`]} />
            <div className={style[`rect1`]}>
                <div>
                    <p>
                        Vous êtes sur le point de plonger dans un monde de défis en cybersécurité !<br />
                        Bienvenue sur notre site Web de compétitions CTF, où les experts en sécurité numérique et les passionnés de technologie se rassemblent pour tester leurs connaissances et relever des défis stimulants.
                    </p>
                </div>

            </div>
            <div className={style[`cards`]}>
                <a className={style[`card`]} href='https://www.youtube.com/'>
                    <p style={{ color: 'black' }}>Cyber Recruitement</p>
                </a>
                <a className={style[`card`]} href='https://www.google.com/'>
                    <p style={{ color: 'black' }}>Cyber Training</p>
                </a>

            </div>
            <div className={style[`rect2`]} />
            <div className={style[`footer`]} >
                <p1 style ={{color:"grey"}}>Powered by PwC Morocco Cybersecurity </p1>
            </div>

            {/* <div className={style[`rect1`]}> */}

        </div>

    );
}
export default Home;
