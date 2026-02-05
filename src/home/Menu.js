import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Menu =( props ) =>{
  const [selected, setSelected] = useState(0);
return (
    <ul
            className="nav"
            style={{
              backgroundColor: "#a10d0d",
              color: "#fff",
              padding: "0 15px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={()=> setSelected(1)} style={{ color: '#fff', backgroundColor: selected === 1 ? 'blue':'' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/princialNotes" className="nav-link" onClick={()=> setSelected(2)} style={{ color: '#fff', backgroundColor: selected === 2 ? 'blue':'' }}
              >
                Principal’s Desk
              </Link>
            </li>
             <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                About Us
              </a>
              <div className="dropdown-menu">
                <Link to="/AboutUS" className="dropdown-item">
                  Overview
                </Link>
                <Link to="/statusAffiliation" className="dropdown-item">
                  Status of affiliation
                </Link>
                <Link to="/infraDetails" className="dropdown-item">
                  Infrastructure details
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Academic
              </a>
              <div className="dropdown-menu">
                <Link to="/academic/1" className="dropdown-item">
                  Faculty
                </Link>
                <Link to="/academic/2" className="dropdown-item">
                  Student Enrollment
                </Link>
                <Link to="/academic/3" className="dropdown-item">
                  Book list
                </Link>
                <Link to="/academic/4" className="dropdown-item">
                  Transfer certificate
                </Link>
                <Link to="/academic/5" className="dropdown-item">
                  Academic planner
                </Link>
                {/* <Link to="/academic/6" className="dropdown-item">
                  Exam schedule
                </Link> */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Activities
              </a>
              <div className="dropdown-menu">
                <Link to="/sports" className="dropdown-item">
                  Sports
                </Link>
                <Link to="/curricular" className="dropdown-item">
                  Extra Curricular
                </Link>
                <Link to="/houseSystem" className="dropdown-item">
                  House
                </Link>
                <Link to="/club" className="dropdown-item">
                  Club
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/facilities"
                className="nav-link"
                style={{ color: "#fff" }}
              >
                Facilities
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Admission
              </a>
              <div className="dropdown-menu">
                <Link to="/AdmissionNotes" className="dropdown-item">
                    Admission Procedure
                </Link>
                <Link to="/FeesStructure" className="dropdown-item">
                    Fees Structure
                </Link>
                <Link to="/transport" className="dropdown-item">
                    Transport Routes
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Management
              </a>
              <div className="dropdown-menu">
                <Link to="/smc" className="dropdown-item">
                  School Management Committee
                </Link>
                <Link to="/SaftyCommittee" className="dropdown-item">
                  Discipline Committee
                </Link>
              </div>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/AdmissionNotes"
                className="nav-link"
                style={{ color: "#fff" }}
              >
                Admission Criteria
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/princialNotes"
                className="nav-link"
                style={{ color: "#fff" }}
              >
                Principal’s Desk
              </Link>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Facilities
              </a>
              <div className="dropdown-menu">
                <Link to="/sports" className="dropdown-item">
                  Sports
                </Link>
                <Link to="/curricular" className="dropdown-item">
                  Co-Curricular
                </Link>
                <Link to="/houseSystem" className="dropdown-item">
                  House System
                </Link>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <Link to="/gallery" className="nav-link" style={{ color: "#fff" }}>
                Gallery
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Gallery
              </a>
              <div className="dropdown-menu">
                <Link to="/gallery" className="dropdown-item">
                  Photos
                </Link>
                {/* <Link to="/" className="dropdown-item">
                  Videos
                </Link> */}
                <Link to="/yvideo" className="dropdown-item">
                  Inspection video
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/mandatory" className="nav-link" style={{ color: "#fff" }}>
                Mandatory Disclosure
              </Link>
            </li>
          </ul>
)
}

export default Menu;