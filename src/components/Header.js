import * as React from "react";
import { Link } from "gatsby";
import generalSettings from "../../content/general_settings.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const { title, invertedLogo } = generalSettings;
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        padding: "50px",
        flexDirection: "row",
      }}
    >
      <div style={{ flex: 1, paddingLeft: "50px" }}>
        <Link to="/">
          <img
            src={invertedLogo}
            alt={title}
            style={{
              flex: "2",
              height: "100%",
              maxWidth: "100%",
              objectFit: "scale-down",
            }}
          />
        </Link>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ flex: 2, display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
            <Link
              to="/about"
              style={{
                paddingLeft:'20px',
                textDecoration: "none",
                color: "white",
                fontSize: "30px",
              }}
            >
              About
            </Link>
            <Link
              to="/blog"
              style={{
                paddingLeft:'20px',
                textDecoration: "none",
                color: "white",
                fontSize: "30px",
              }}
            >
              Blog
            </Link>
          </div>
          <div
            style={{
              flex: 1,
              height: "50px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
          <a href={generalSettings.fb_link}>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color={"white"}
              style={{ height: "50px", width: "50px", padding: "0px 10px" }}
            />
            </a>
            <a href={generalSettings.insta_link}>
            <FontAwesomeIcon
              icon={faInstagram}
              color={"white"}
              style={{ height: "50px", width: "50px", padding: "0px 10px" }}
            />
            </a>
            <a href={generalSettings.linkedin_link}>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color={"white"}
              style={{ height: "50px", width: "50px", padding: "0px 10px" }}
            />
            </a>
          </div>
        </div>
        <div
          style={{
            fontSize: "35px",
            color: "grey",
            textAlign: "end",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Header;
