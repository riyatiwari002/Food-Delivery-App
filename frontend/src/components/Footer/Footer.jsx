import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at
            totam maxime itaque laboriosam incidunt commodi, eum fuga tempora
            nobis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>get In Touch</h2>
            <ul>
                <li>+1-9301838148</li>
                <li>Contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &reg; Tomato.com -All Right Reserved;
      </p>
    </div>
  );
};

export default Footer;
