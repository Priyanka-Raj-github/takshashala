import React from 'react';
import './navBar.css';
import fifth from '../images/fifth.jpg';
import first from '../images/first.avif';
import third from '../images/third.jpg';
import front from '../images/front.jpg';
import GWP_LOGO from '../images/GWP_LOGO.jpg';
import facebook_icon from '../images/facebook_icon.png';
import Priya from '../images/Priya.jpg';
import Nutan from '../images/Nutan.jpg';
import Dwarika2 from '../images/Dwarika2.jpg';
import new_home from '../images/new_home.png';
import twitter_icon from '../images/twitter_icon.png';
import google_map_college from '../images/google_map_college.jpg';
import google_plus_logo_4 from '../images/google_plus_logo_4.png';
// import googlePlus_icon from '../images/googlePlus.png';
import googleMap_icon from '../images/googleMap_icon.png';
import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <div>
        <div className="main_nav">
        <div className="navbar">
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/homePage" aria-current="page"><img src={new_home} alt="" id="imgs"/></Link></li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to="/homePage">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to="/about123">About</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to="/homePage">Academics</Link>
                            <ul class="dropdown">
                                <li id="l1">
                                    <Link aria-current="page" to="/principal">Principal</Link>
                                </li>
                                <li id="l2">
                                    <Link aria-current="page" to="/teachers">Teachers</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to="/registration4">Register</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to="/login5">Login</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to="/contact3">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <div className="col">
                <img src={GWP_LOGO} alt="college Image" id="logo"/>
                <span id="cloc">Established in 1985</span>
                <div>
                    <abbr title="click to view location and get direction">
                     <a href="https://maps.app.goo.gl/9DgFf6AM8AfkiBjGA">
                     <img src ={google_map_college} alt="google map of college" id="google_college" className="tooltip"/>
                     <span id="gloc">google location</span>
                     </a>
                    </abbr>
                     
                </div>
                <p id="name">GOVERNMENT&nbsp;WOMENS&nbsp;POLYTECHNIC</p>
            </div> */}
        
            
        </div>
    </div>
  );
}

export default NavBar;
