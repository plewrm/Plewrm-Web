import React from 'react'
import "../../Styles/style.css"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div>
                {/*Navbar Section */}
                <nav class="navbar navbar-expand-lg bg-color py-5 pt-lg-5">
                    <div class="container">
                        {/* <div class="container-fluid"> */}
                        {/* here flude are use all area and only container make maintained sapce around */}
                        <a class="navbar-brand text-white" href="#">PLEWRM</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}
                                {/* Home/Link are movie to start position */}
                                <li class="nav-item">
                                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-capitalize" href="#online-section">services</a>
                                    {/* <NavLink
                                        // className="nav-link"
                                        class="nav-link text-capitalize"
                                        to="/service">
                                        Services
                                    </NavLink> */}
                                </li><li class="nav-item">
                                    <a class="nav-link text-capitalize" href="#about-services">about </a>
                                </li><li class="nav-item">
                                    <a class="nav-link text-capitalize" href="#contact-us">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*Navbar Section */}
            </div>
        </>

    )
}

export default Navbar
