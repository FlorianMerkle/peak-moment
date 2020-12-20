import * as React from "react"
import {  navigate } from "gatsby"
import ReactMarkdown from 'react-markdown'


const BlogCard = props => {
    let { data } = props
    return (
      <div {...props} style={{padding:'25px 0px'}}>
        <a  onClick={() => navigate(props.data.path)} target="_blank" style={{ cursor:'pointer', height:'250px', backgroundColor:'#eEeEeE', display:'flex', textDecoration:'none', color:'black', borderRadius:'10px', boxShadow: "3px 5px 3px #9E9E9E80"}}>
        <div style={{backgroundColor:'lightgrey', height:'250px', minWidth:'250px', maxWidth:'250px', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px'}}>
          <img src={data.visual} alt={data.title} style={{height:'100%', width:'100%', objectFit:'cover', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px'}}/>

        </div>
        <div style={{padding:'25px', display:'flex', flexDirection:'column'}}>
            <div style={{fontSize:35, fontWeight:'bold', flex:1}}>{data.title}</div>
            <div style={{ flex: 3, fontSize:18, lineHeight:1.4}}>
            
            <ReactMarkdown>{data.intro}</ReactMarkdown>
            </div>
        </div>
          
          
        </a>
      </div>
    )
  }

  export default BlogCard