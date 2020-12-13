import * as React from "react";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter"
import ContactForm from "../components/ContactForm"




const AboutPage = () => {
  
  return (
    <Layout>
    <div style={{display:'flex', backgroundColor:'white'}}>
    <div style={{flex:1, padding:'50px 20px', display:'flex', flexDirection:'column'}}>
      <div style={{flex:2, display:'flex', flexDirection:'column', alignItems:'flex-end', padding:'20px',fontSize:40, justifyContent:'center'}}>
        <a style={{fontWeight:'bold'}}>PEAK MOMENT</a>
        <a>ÜBER UNS</a>
      </div>
      <ContactForm/>
    </div>
    <div style={{flex:2, padding:'50px'}}>
    <div style={{borderLeftStyle:'solid', borderWidth:'thin', paddingLeft:'50px', marginBottom:'50px'}}>
    <p>Ja, ich will den Newsletter mit Informationen zur Experience Economy und dem Angebot von Peak Moment abonnieren Hinweise zur von der Einwilligung umfassten Erfolgsmessung, dem Protokollieren ihrer Anmeldung, dem Einsatz des Versanddienstleisters Mailchimp sowie zu ihren Widerrufsrechten finden Sie in der Datenschutzerklärung</p>
    <p>Ja, ich will den Newsletter mit Informationen zur Experience Economy und dem Angebot von Peak Moment abonnieren Hinweise zur von der Einwilligung umfassten Erfolgsmessung, dem Protokollieren ihrer Anmeldung, dem Einsatz des Versanddienstleisters Mailchimp sowie zu ihren Widerrufsrechten finden Sie in der Datenschutzerklärung</p>
    <p>Ja, ich will den Newsletter mit Informationen zur Experience Economy und dem Angebot von Peak Moment abonnieren Hinweise zur von der Einwilligung umfassten Erfolgsmessung, dem Protokollieren ihrer Anmeldung, dem Einsatz des Versanddienstleisters Mailchimp sowie zu ihren Widerrufsrechten finden Sie in der Datenschutzerklärung</p>
    <p>Ja, ich will den Newsletter mit Informationen zur Experience Economy und dem Angebot von Peak Moment abonnieren Hinweise zur von der Einwilligung umfassten Erfolgsmessung, dem Protokollieren ihrer Anmeldung, dem Einsatz des Versanddienstleisters Mailchimp sowie zu ihren Widerrufsrechten finden Sie in der Datenschutzerklärung</p>
    </div>

    <div style={{}}>
    <Newsletter/>
    </div>
    </div>
    </div>
    </Layout>
  );
};

export default AboutPage;
