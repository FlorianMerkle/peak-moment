import * as React from "react";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter"
import ContactForm from "../components/ContactForm"




const AboutPage = () => {
  
  return (
    <Layout>
    <div style={{display:'flex', backgroundColor:'white'}}>
    <div style={{flex:2}}>
      linke Seite
      <ContactForm/>
    </div>
    <div style={{flex:5}}>
      rechte Seite
    
    <div style={{ }}>
    <Newsletter/>
    </div>
    </div>
    </div>
    </Layout>
  );
};

export default AboutPage;
