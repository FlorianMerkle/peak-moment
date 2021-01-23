import React, { useState, useEffect } from 'react';
import { inject, observer } from "mobx-react"
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

const Layout = props => {
  console.log(props)
  const handleResize = () => {
    if (
      document.documentElement.clientWidth > 699 &&
      props.store.device !== "desktop"
    ) {
      props.store.setDevice('desktop')
    }
    if (
      document.documentElement.clientWidth < 900 &&
      props.store.device !== "mobile"
    ) {
      props.store.setDevice('mobile')
    }
    console.log(props.store.device)
  }

  useEffect(() => {
    handleResize()
    if (typeof window !=='undefined') window.addEventListener("resize", handleResize)

    // cleanup this component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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

export default inject("store")(observer(Layout))