import * as React from "react"

const Tile = props => {
    const {title, flex, visual, altText, link} = props.experience
    return (
      <div style={{ display: flex, position:'relative', cursor:'pointer', flex:flex}}>
        <a href={link}>
          <img src={visual} alt={altText} style={{height:'100%', width:'100%', objectFit:'cover'}}/>
          <div style={{color:'white', fontSize:'25px', position:'absolute', bottom:'15px', left:'15px'}}>{title}</div>
        </a>
      </div>
    )
  }

  export default Tile