import * as React from "react";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter"
import ContactForm from "../components/ContactForm"




const AboutPage = () => {
  
  return (
    <Layout>
    <div style={{display:'flex', backgroundColor:'white'}}>
    <div style={{flex:1, padding:'20px', borderRight:'5px', }}>
      <div stlye={{display:'flex', flexDirection:'column'}}>
        <a>PEAK MOMENT</a>
        <a>ÜBER UNS</a>
      </div>
      <ContactForm/>
    </div>
    <div style={{flex:2}}>
      rechte Seite
    
    <div style={{}}>
    <Newsletter/>
    </div>
    </div>
    </div>
    </Layout>
  );
};

export default AboutPage;
