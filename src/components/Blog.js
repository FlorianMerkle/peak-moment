import * as React from "react";

import Layout from "./Layout";
import Newsletter from "./Newsletter";
import ReactMarkdown from 'react-markdown'

const AboutPage = props => {
  const { item } = props.pageContext
  return (
    <Layout>
    <div style={{display:'flex', justifyContent:'center', backgroundColor:'white', minHeight:'70vh'}}>
    <div style={{display:'flex', maxWidth:'800px', flexDirection:'column', padding:'50px 0px'}}>
    
      <h1>{item.title}</h1>
      <p>{item.date}</p>
      <div style={{fontSize:'24px', textAlign:'justify'}}>
      <ReactMarkdown>{item.body}</ReactMarkdown>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default AboutPage;
