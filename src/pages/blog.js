import * as React from "react";

import { inject, observer } from "mobx-react";

import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";

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
            justifyContent:'center',
            alignItems:'center'
          }}
        >
        {blog.map(item=> (
            <BlogCard data={item} />
          ))}
            
            <div style = {{width:'90vw'}}>
            <Newsletter theme={'light'}/>
            </div>
            {blog.map(item=> (
            <BlogCard data={item} />
          ))}
        </div>
    )
}

const Desktop = () => {
  let blog = blogData.blog
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "white", padding: '50px' }}>
        <div
          style={{
            flex: 1,
            padding: "0px 0px",
            display: "flex",
            
            maxWidth: '600px',
            justifyContent:'flex-start',
            alignItems:'flex-start'
          }}
        >
          <img
            src={generalData.logo}
            alt={aboutData.title}
            style={{
              //height: "100%",
              maxWidth: "100%",
              objectFit: "scale-down",
              paddingRight:'20px'
            }}
          />
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
          {blog.map(item=> (
            <BlogCard data={item} />
          ))}
            
            <Newsletter />
            {blog.map(item=> (
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
