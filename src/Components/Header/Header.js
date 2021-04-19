import React from 'react';
import {
  Link
  } from "react-router-dom";
const Header = () => {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="navbar-brand" href="#">
                        <h3>Weedding <br /> Planner</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/" className="nav-link mr-5" >About us</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="/review" className="nav-link mr-5" >Review</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="/orderlist"  className="nav-link mr-5" >Admin</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="/login"  className="nav-link mr-5" >login</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;