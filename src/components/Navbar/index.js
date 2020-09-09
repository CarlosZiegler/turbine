import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.svg'


import "./style.css"

export default function Navbar() {
    return (
        <div className="topnav">
            <Link to="/" className="logo">
                <img src={logo} alt="Turbine Kreuzberg" className="logo-img" />
            </Link>
        </div>
    )
}
