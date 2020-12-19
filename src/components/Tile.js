import * as React from "react"

const Tile = props => {
    const {title, flex, visual, altText, link} = props.experience
    return (
      <div style={{ display: 'flex', position:'relative', cursor:'pointer', flex:flex}}>
        <a href={link} target="_blank" >
          <img src={visual} alt={altText} style={{height:'100%', width:'100%', objectFit:'cover'}}/>
          <div style={{width:'100%', height:'55px', color:'white', fontSize:'25px', position:'absolute', bottom:'0px', left:'0px', backgroundColor:'#00000090'}}>
          <div style={{paddingLeft:'15px', paddingTop:'15px'}}>{title}</div>
          </div>
        </a>
      </div>
    )
  }

  export default Tile