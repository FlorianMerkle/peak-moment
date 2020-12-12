import * as React from "react";
import { Link } from "gatsby"



import generalSettings from "../../content/general_settings.json";

// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "black",
  padding: "0",
  margin: "0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup

const AboutPage = () => {
  const { title, logo } = generalSettings;
  return (
    <main style={pageStyles}>
      <title>PEAK Moment</title>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          padding: "50px",
        }}
      >
        <div style={{ flex: 1, paddingLeft: "50px" }}>
          <img
            src={logo}
            alt={title}
            style={{ flex: "2", height: "100%", objectFit: "scale-down" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "35px",
              flex: "5",
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div style={{ flex: 1 }}>
            <Link to="/about">About</Link>
          </div>
          <div style={{ flex: 1 }}>
            
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "darkgrey",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        
      </div>
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Footer
      </div>
    </main>
  );
};

export default AboutPage;
