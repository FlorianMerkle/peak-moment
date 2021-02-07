import * as React from "react";

import Layout from "./Layout";
import Newsletter from "./Newsletter";
import ReactMarkdown from 'react-markdown'

const Blog = props => {
  const { item } = props.pageContext
  //console.log(item.body)
  return (
    <Layout>
    <div style={{display:'flex', justifyContent:'center', backgroundColor:'white', minHeight:'70vh'}}>
    <div style={{display:'flex', maxWidth:'800px', flexDirection:'column', padding:'0px 50px', borderStyle:'solid', borderWidth:'0px 1px', borderColor: 'lightgray', margin:'100px 0px'}}>
    
      <h1>{item.title}</h1>
      <p>{item.date}</p>
      <div style={{fontSize:'24px', textAlign:'justify'}}>
      <ReactMarkdown>{item.intro}</ReactMarkdown>

      <img src={item.visual} alt={item.title} style={{height:'250px', width:'100%', objectFit:'cover'}}/>
      <ReactMarkdown>{item.body}</ReactMarkdown>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default Blog;
