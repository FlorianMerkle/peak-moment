import * as React from "react";
import { Link } from "gatsby"



import experiences from "../../content/en_experiences.json";
import generalSettings from "../../content/general_settings.json";
import Tile from "../components/Tile";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "black",
  padding: "0",
  margin: "0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup

const IndexPage = () => {
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
          <Link to='/'>
            <img
              src={logo}
              alt={title}
              style={{ flex: "2", height: "100%", objectFit: "scale-down" }}
            />
          </Link>
          <div
            style={{
              display:'flex',
              justifyContent: "flex-start",
              alignItems: "center",
              fontSize: "35px",
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ flex: 2, display: 'flex', flexDirection:'row', justifyContent:'center' }}>
          <div style={{ flex: 1 }}>
            <Link to="/about" style={{textDecoration:'none', color:'white', fontSize:'50px'}}>About</Link>
          </div>
          <div style={{ flex: 1, height:'50px', width:'50px'}}>
            <FontAwesomeIcon icon={faFacebookSquare} color={'white'} style={{height:'50px', width:'50px', padding:'0px 10px'}}/>
            <FontAwesomeIcon icon={faInstagramSquare} color={'white'} style={{height:'50px', width:'50px', padding:'0px 10px'}}/>
            <FontAwesomeIcon icon={faLinkedinIn} color={'white'} style={{height:'50px', width:'50px', padding:'0px 10px'}}/>
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
        <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
          {experiences.experience.slice(0, 3).map((exp) => (
            <Tile experience={exp} />
          ))}
        </div>
        <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
          {experiences.experience.slice(3, 6).map((exp) => (
            <Tile experience={exp} />
          ))}
        </div>
        <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
          {experiences.experience.slice(6, 9).map((exp) => (
            <Tile experience={exp} />
          ))}
        </div>
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

export default IndexPage;
