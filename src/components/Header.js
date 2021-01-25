import React, { useState } from "react";
import { Link } from "gatsby";
import { inject, observer } from "mobx-react";
import generalSettings from "../../content/general_settings.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Header = (props) => {
  const [showMenu, setMenu] = useState(false);
  if (props.store.device !== "desktop") {
    return (
      <Mobile showMenu={showMenu} setMenu={setMenu}/>
    );
  }
  if (props.store.device === "desktop") {
    return (
      <Desktop/>
    );
  }
};
export default inject("store")(observer(Header));

const Desktop = () => {
  const { title, logoInverted } = generalSettings;
  return(
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
              src={logoInverted}
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
            <div
              style={{
                flex: 2,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Link
                to="/about"
                style={{
                  paddingLeft: "20px",
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
                  paddingLeft: "20px",
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
  )
}
const Mobile = props =>{
  let {showMenu, setMenu} = props
  const { title, logoInverted } = generalSettings;
  return(
    <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", height: "70px" }}>
          <BurgerMenuButton
            showMenu={showMenu}
            toggleMenu={() => setMenu(!showMenu)}
          />
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Link to="/" style={{ height: "100%", justifyContent: "center" }}>
              <img
                src={logoInverted}
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
        </div>
        {showMenu && (
          <div
            style={{
              width: "100%",
              height: "20vh",
              backgroundColor: "#ffe8e0",
            }}
          >
            <Link
              to="/"
              activeStyle={{
                paddingLeft: "30px",
                backgroundColor: "#F9C8B7",
                color: "white",
                height: "33.333333333%",
              }}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px",
                paddingRight: 10,
                color: "darkgrey",
                height: "33.333333333%",
                backgroundColor: "transparent",
                outline: "none",
                margin: 0,
                border: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              activeStyle={{
                paddingLeft: "30px",
                backgroundColor: "#F9C8B7",
                color: "white",
                height: "33.333333333%",
              }}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px",
                paddingRight: 10,
                color: "darkgrey",
                height: "33.333333333%",
                backgroundColor: "transparent",
                outline: "none",
                margin: 0,
                border: "none",
              }}
            >
              About
            </Link>

            <Link
              to="/blog"
              activeStyle={{
                paddingLeft: "30px",
                backgroundColor: "#F9C8B7",
                color: "white",
                height: "33.333333333%",
              }}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px",
                paddingRight: 10,
                color: "darkgrey",
                height: "33.333333333%",
                backgroundColor: "transparent",
                outline: "none",
                margin: 0,
                border: "none",
              }}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
  )
}

const BurgerMenuButton = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        cursor: "pointer",
        flex: 1,
        margin: "auto",
        paddingLeft: "10px",
      }}
      onClick={() => props.toggleMenu()}
    >
      <BurgerPiece showMenu={props.showMenu} />
      <BurgerPiece showMenu={props.showMenu} />
      <BurgerPiece showMenu={props.showMenu} />
    </div>
  );
};

const BurgerPiece = (props) => {
  return (
    <div
      style={
        props.showMenu
          ? {
              width: "35px",
              height: "5px",
              borderRadius: "5px",
              backgroundColor: "#F9C8B7",
              margin: "6px 0",
            }
          : {
              width: "35px",
              height: "5px",
              borderRadius: "5px",
              backgroundColor: "#ffe8e0",
              margin: "6px 0",
            }
      }
    ></div>
  );
};
