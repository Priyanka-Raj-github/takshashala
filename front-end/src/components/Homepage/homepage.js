import React from 'react';
import './homePage.css';
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


function HomePage () {
  return (
    <div>
        <div className="main">
            <div className="col">
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
            </div>
            <div className="about_homes">
                 <section id='mine'>
                 <span id="about_clg">Government Women's Polytechnic</span> Located in Phulwarisharif, Patna, an AICTE-approved college.<br/>
                     It was founded in 1986 under the auspices of the Bihar government's Department of Science and Technology. <br/>
                     Thirty students were enrolled in two divisions of the polytechnic college,<br/>
                     one for secretarial practice and the other for library science.<br/>
                 </section>
            </div>
            <footer><p id="visit">visit us at:</p>
                <a href="https://www.facebook.com/help/668969529866328/?helpref=uf_share"><img src={facebook_icon} alt="facebook_icon" id="facebook"/></a>&nbsp; &nbsp;
                <a href="https://twitter.com/"><img src={twitter_icon} alt="twitter_icon" id="twitter"/></a>&nbsp; &nbsp;
                <a href="https://support.google.com/answer/2451065?hl=en"><img src={google_plus_logo_4} alt="googlePlus_icon" id="googlePlus"/></a>
            </footer>
            <div id="location_copy">
                <span id="location"><i>Location:</i>
                     GWP, Patna <br/>
                     Sahay Nagar <br/>
                     Phulwarisharif, Patna - 801506
                </span>
                <span id="copy">&copy;Copyright 2019 GWP,Patna
                </span>
            
            </div>
        </div>
    </div>
  );
}

export default HomePage;
