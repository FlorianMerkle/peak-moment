import * as React from "react";
import {Link} from 'gatsby'

const Footer = () =>{
return(
    <div
        style={{

          height: "100px",
          backgroundColor: "black",
          color: "white",
          padding:'50px',
          display:'flex',
          justifyContent:'flex-end',
          alignItems:'flex-start',
          flexDirection:'column'
        }}
      >
      <div>
        &copy; Peak Moment
      </div>
        <div style={{paddingTop:'20px'}}>
            <Link to="/" style={linkStyle}>Home</Link><Link to="/about" style={linkStyle}>About</Link><Link to="/impressum" style={linkStyle}>Impressum</Link><a href="https://hbr.org/1998/07/welcome-to-the-experience-economy" style={linkStyle}>The Experience Economy</a>
        </div>
      </div>
)}

const linkStyle={
    textDecoration: "none",
    color: "grey",
    fontSize: "20px",
    paddingRight:'20px'
}
export default Footer