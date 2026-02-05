import logo from "../assets/img/logo.JPG";
import schoolName from "../assets/img/schoolNameonly.png";
import { Outlet, Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBookOpen,
  FaHeadphones,
  FaFileAlt,
} from "react-icons/fa";
import MainMenu from "./Menu";

function Header() {
  return (
    <div className="">
      {/* Top Info Bar */}
      <div
        style={{
          backgroundColor: "#04309c",
          color: "#fff",
          fontSize: "14px",
          padding: "6px 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          📖 Run and managed by the Catholic Fathers of the MCBS Congregation
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            textDecoration: "none",
            color: "white",
          }}
        >
          {/* <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            📘 View Jubilee Souvenir
          </a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            📹 Campus Virtual Tour
          </a> */}
          <a
            href="https://www.instagram.com/st_joseph_cbse_school/"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@saintjosephpublicschool"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Main Header Section */}
      <div
        style={{
          background: "#fff",
          padding: "10px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
        <a href="/">
            <img src={logo} alt="Logo" width="65" height="65"  />
        </a>
          <div style={{ marginLeft: "15px" }}>
            <h1 style={{ fontWeight: "800", fontSize: "20px", color: "#a10d0d" }}>St. JOSEPH PUBLIC SCHOOL</h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <div>
            <FaFileAlt /> <strong>AFFILIATED TO CBSE</strong>
            <br />
            Affl. No : 1931328
            <br />
            School Code: 56341
          </div>
          <div>
            <FaHeadphones /> <strong>ADMISSION ENQUIRY</strong>
            <br />
            <a href="tel:+919047906080">9047906080</a>
          </div>
          <div>
            {/* <a
              href="#"
              style={{
                backgroundColor: "red",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                width="20"
                style={{ marginRight: "5px" }}
              />
              Pay Fees Online
            </a> */}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <MainMenu />
    </div>
  );
}

export default Header;
