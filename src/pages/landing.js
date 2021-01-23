import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { inject, observer } from "mobx-react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import generalData from "../../content/general_settings.json";
import landingData from "../../content/de_landing.json";

const pageStyles = {
    color: "#232129",
    backgroundColor: "black",
    padding: "0",
    margin: "0",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    minHeight:'100vh'
    //display:'flex',
    //justifyContent:'center'
  };

const LandingPage = (props) => {
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
    <div style={pageStyles}>
      {props.store.device === "desktop" && <Desktop />}
      {props.store.device !== "desktop" && <Mobile />}
      <Footer/>
    </div>
  );
};

const Desktop = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <div style={{position:'relative', marginBottom:'-4px'}}>
        <img
          src={landingData.visual}
          alt={landingData.title}
          style={{
            //height: "100%",
            width: "100%",
            objectFit: "scale-down",
          }}
        />
        <div style={{position:'absolute', top:'20%', left:'10%', width:'30%'}}>
            <div style={{fontSize:22, fontWeight:'bold'}}>{landingData.title}</div>
            <div style={{fontSize:40, fontWeight:'bold'}}>{landingData.subTitle}</div>
        </div>
      </div>
      <div style={{backgroundColor:'white', maxWidth:'1600px'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{flex:3, padding:'50px 50px 0px 50px'}}>
              <ReactMarkdown>{landingData.block1}</ReactMarkdown>
              <ReactMarkdown>{landingData.block2}</ReactMarkdown>
          </div>
          <div style={{flex:3, padding:'50px', justifyContent:'center', alignItems:'center'}}>
            <div style={{maxWidth:'600px'}}>
              <ContactForm/>
              </div>
          </div>
      </div>
      <div style={{padding:'0px 50px 50px 50px'}}>
        <ReactMarkdown>{landingData.block3}</ReactMarkdown>
        <ReactMarkdown>{landingData.block4}</ReactMarkdown>
        <div style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
          <ReactMarkdown>{landingData.valueTitle}</ReactMarkdown>
          <div style={{display:'flex'}}>
              <div style={{}}>
                  {landingData.value1}
              </div>
              <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
                  {landingData.value2}
              </div>
              <div>
                  {landingData.value3}
              </div>
          </div>
        </div>
      </div>
          
      </div>
    </div>
  );
};

const Mobile = () => {
  return(
    
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
    
    <div style={{position:'relative', marginBottom:'-4px'}}>
    <Link to="/" style={{}}>
    <img
    src={landingData.visual}
    alt={landingData.title}
    style={{
      height: "100vh",
      width: "100vw",
      objectFit: "cover",
    }}
  />
  </Link>
      <div style={{position:'absolute', top:'5%', left:'10%', width:'80%'}}>
          <div style={{fontSize:22, fontWeight:'bold', padding:'50px 0px'}}>{landingData.title}</div>
          <div style={{fontSize:40, fontWeight:'bold'}}>{landingData.subTitle}</div>
      </div>
    </div>
    <div style={{backgroundColor:'white', maxWidth:'1600px'}}>
    <div style={{padding:'0px 50px 50px 50px'}}>
    <ReactMarkdown>{landingData.block1}</ReactMarkdown>
    <ReactMarkdown>{landingData.block2}</ReactMarkdown>
    <ContactForm/>
      <ReactMarkdown>{landingData.block3}</ReactMarkdown>
      <ReactMarkdown>{landingData.block4}</ReactMarkdown>
      <div style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
        <ReactMarkdown>{landingData.valueTitle}</ReactMarkdown>
        <div >
        <div style={{padding:'0px 50px 0px 0px'}}>
                {landingData.value1}
            </div>
            <div style={{padding:'20px 0px 20px 50px'}}>
                {landingData.value2}
            </div>
            <div style={{padding:'0px 50px 0px 0px'}}>
                {landingData.value3}
            </div>
        </div>
      </div>
    </div>
        
    </div>
  </div>
  );
};



export default inject("store")(observer(LandingPage));
