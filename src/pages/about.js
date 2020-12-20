import * as React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import generalData from "../../content/general_settings.json";
import aboutData from "../../content/de_about.json";

const AboutPage = () => {
  return (
    <Layout>
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <div
          style={{
            flex: 1,
            padding: "50px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
        
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "20px",
              fontSize: 40,
              justifyContent: "center",
            }}
          >
            
            <div style={{ fontWeight: "bold" }}>PEAK MOMENT</div>
            <div>ÜBER UNS</div>
          </div>
          <img
              src={generalData.logo}
              alt={aboutData.title}
              style={{
                //height: "100%",
                maxWidth: "100%",
                objectFit: "scale-down",
                paddingRight: "20px",
              }}
            />
          <ContactForm />
        </div>
        <div style={{ flex: 2, padding: "50px" }}>
          <div
            style={{
              borderLeftStyle: "solid",
              borderWidth: "thin",
              paddingLeft: "50px",
              marginBottom: "50px",
              fontSize: "24px",
              textAlign: "justify",
            }}
          >
          <h1>{aboutData.title}</h1>
            <ReactMarkdown>{aboutData.aboutText}</ReactMarkdown>
          </div>

          <div style={{}}>
            <Newsletter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
