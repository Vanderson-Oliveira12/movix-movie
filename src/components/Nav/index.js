/* eslint-disable jsx-a11y/alt-text */
import { NavContainer, List, NavScroll } from "./style";
import { FaBars } from 'react-icons/fa';

import { Link } from "react-router-dom";

import Logo from '../../img/Logo.svg';
import { useState } from "react";
import { useEffect } from "react";

export default function Nav() {

    function getPosY() {
        let posY = window.pageYOffset;

        if (posY > 20) {
            setScrollY(true)
        } else {
            setScrollY(false)
        }
    }

    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', getPosY);
    }, [scrollY])

    return (
        <>
            <NavContainer style={scrollY === true ? {
                position: "fixed",
                zIndex: 99,
                inset: 0
            }
                : null}>
                <div className="nav">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>

                    <List className="nav-links">
                        <li>
                            <Link to="/movies">
                                Filmes
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv">
                                Séries
                            </Link>
                        </li>
                    </List>
                </div>
            </NavContainer>
        </>
    )
}