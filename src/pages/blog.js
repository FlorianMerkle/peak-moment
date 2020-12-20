import * as React from "react";

import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";

import aboutData from "../../content/de_about.json";
import generalData from "../../content/general_settings.json";
import blogData from "../../content/blog.json"
import BlogCard from "../components/BlogCard";


const BlogPage = () => {
  let blog = blogData.blog
  return (
    <Layout>
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
    </Layout>
  );
};

export default BlogPage;
