import React from 'react'
import './Footer.css'
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";


function Footer() {
  return (
    <div className="footer">
        <div className="footer-icons">
            <img src={youtube_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={facebook_icon} alt="" />
        </div>
        <ul>
            <li>Audio Description</li>
            <li>He1p Centre</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>lnvestor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>PrivacY</li>
            <li>Lega1 Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <p className="copyright-text">
        © 2002-2024 Netflix, Inc.
        </p>
    </div>
);
}

export default Footer