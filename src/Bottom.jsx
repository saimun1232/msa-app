import React from "react";
import "./index.css"; // Add your CSS file for custom styling
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Bottom = () => {
  return (
    <footer className="rounded-md mt-3 shadow-customInset bg-[]" style={{ backgroundColor: "", color: "black", padding: "20px 0" }}>
      <div className=" justify-center lg:flex lg:justify-around">
        {/* Get In Touch Section */}
        <div className="footer-section">
          <h1>Get In Touch</h1>
          <p style={{ color: "green",fontWeight:'bold' }}>Muslim Students Association</p>
          <p className="flex items-center gap-2">
            <span><MdLocationPin /></span> Begum Rokeya University,Rangpur
          </p>
          <p className="flex items-center gap-2">
            <span><SiMinutemailer/></span>commingsoon@gmail.com
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section text-left text-black">
          <h4>Links</h4>
          <ul  style={{ listStyleType: "none", padding: 0 }}>
            <li><a className="flex items-center"><span><IoIosArrowForward/></span>Qarze Hasana</a></li>
            <li><a className="flex items-center"><span><IoIosArrowForward/></span>BRUR Islamic Library</a></li>
            <li><a className="flex items-center"><span><IoIosArrowForward/></span>Practicing Bibaho</a></li>
            <li><a className="flex items-center"><span><IoIosArrowForward/></span>Staff Login</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h4 className="text-left">Newsletter</h4>
          <div style={{ display: "flex" }}>
            <input
              type="email"
              placeholder="Your Email Address"
              style={{
                padding: "8px",
                borderRadius: "4px 0 0 4px",
                border: "1px solid #ccc",
                outline: "none",
                width: "200px",
                color:"white"
              }}
            />
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <h5 className="text-left">Follow Us</h5>
          <div className="flex gap-3">
            <a href="#!" style={{ color: "black", fontSize: "20px" }}><FaTwitter/></a>
            <a href="#!" style={{ color: "black", fontSize: "20px" }}><FaFacebookF/></a>
            <a href="#!" style={{ color: "black", fontSize: "20px" }}><FaYoutube/></a>
            <a href="#!" style={{ color: "black", fontSize: "20px" }}><FaSquareInstagram/></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
        <p className="flex mt-6 justify-center items-center gap-3"><FaRegCopyright/> Muslim Students Association, All Right Reserved.</p>
    </footer>
  );
};

export default Bottom;
