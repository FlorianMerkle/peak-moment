import * as React from "react";

import { inject, observer } from "mobx-react";
import ReactMarkdown from 'react-markdown'

import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";

import aboutData from "../../content/de_about.json";
import generalData from "../../content/general_settings.json";
import blogData from "../../content/blog.json"
import BlogCard from "../components/BlogCard";

const BlogPage = props => {
  return(
    <Layout>
      {props.store.device==='desktop' && <Desktop/>}
      {props.store.device!=='desktop' && <Mobile/>}
      </Layout>
    )
}

const Mobile = () => {
  let blog = blogData.blog
  return (
    <div
          style={{
            width: "100%",
            minHeight: "99vh",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            //justifyContent:'center',
            alignItems:'center'
          }}
        >
          {blog.slice(0,2).map(item=> (
            <BlogCard data={item} />
          ))}
            
            <div style = {{width:'90vw'}}>
            <Newsletter theme={'light'}/>
            </div>
            {blog.slice(2,3).map(item=> (
            <BlogCard data={item} />
          ))}
        </div>
    )
}

const Desktop = () => {
  let blog = blogData.blog
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "white", padding: '50px 50px 50px 0px', justifyContent:'space-between' }}>
        <div
          style={{
            flex: 1,
            margin: "20px 20px",
            padding:'50px',
            display: "flex",
            flexDirection:'column',
            maxWidth: '600px',
            justifyContent:'space-between',
            alignItems:'flex-start',
            fontSize:18, lineHeight:1.4
          }}
        >
        <div style={{  
          width:'100%',
          display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              //padding: "20px",
              fontSize: 40,
              justifyContent: "center",
            }}>
        <div style={{ fontWeight: "bold", fontSize: 40, }}>PEAK MOMENT</div>
            <div style={{ fontSize: 40, }}>BLOG</div>
          </div>
          <div >
        <ReactMarkdown>
          {blogData.description}
        </ReactMarkdown>
        </div>
        
          
          <ContactForm/>
        </div>
        <div style={{ flex: 2, padding: "0px" }}>
          <div
            style={{
              borderLeftStyle: "solid",
              borderWidth: "thin",
              paddingLeft: "50px",
              marginBottom: "50px",
            }}
          >
          {blog.slice(0,2).map(item=> (
            <BlogCard data={item} />
          ))}
            
            <Newsletter />
            {blog.slice(2,3).map(item=> (
            <BlogCard data={item} />
          ))}

          </div>
        </div>
      </div>
      <div style={{padding:'50px', backgroundColor:'white'}}>
        
      </div>
      </div>
  );
};

export default inject("store")(observer(BlogPage));
