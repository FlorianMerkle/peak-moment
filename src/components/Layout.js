import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";


// styles
const pageStyles = {
    color: "#232129",
    backgroundColor: "black",
    padding: "0",
    margin: "0",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    display:'flex',
    justifyContent:'center'
  };

const Layout = (props) => {
    return (
        <main style={pageStyles}>
      <title>PEAK Moment</title>
      <div style={{ maxWidth: "1600px" }}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </main>
    )
}

export default Layout