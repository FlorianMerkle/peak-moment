import * as React from "react";
import { Link } from "gatsby";
import generalSettings from "../../content/general_settings.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const { title, logo } = generalSettings;
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
      <div style={{ flex: 2, paddingLeft: "50px" }}>
        <Link to="/">
          <img
            src={logo}
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
          <div style={{ flex: 1, textAlign: "end" }}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "50px",
              }}
            >
              About
            </Link>
          </div>
          <div
            style={{
              flex: 1,
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color={"white"}
              style={{ height: "50px", width: "50px", padding: "0px 10px" }}
            />
            <FontAwesomeIcon
              icon={faInstagramSquare}
              color={"white"}
              style={{ height: "50px", width: "50px", padding: "0px 10px" }}
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color={"white"}
              style={{ height: "50px", width: "50px", padding: "0px 10px" }}
            />
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
