import React from 'react';
import './navbar.css';
import logo from './images/logo.png'
export default function Navbar() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                
                <div class="container-fluid ">
                <img className="logo" src={logo} alt="" />
                    <a class="navbar-brand fs-2 fw-bold" href="#">Emergency.NET</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" className="text">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" className="text">About</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <button className="show">Join Us</button>
            </nav>
        </div>
    );
}