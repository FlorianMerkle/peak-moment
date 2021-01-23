import * as React from "react"
import { inject, observer } from "mobx-react";
const Tile = props => {
    const {title, flex, visual, altText, link} = props.experience
    
    const fontStyle= {padding:'15px', fontSize: props.store.device === 'desktop'? 25:20}
    return (
      <div style={{ display: 'flex', position:'relative', cursor:'pointer', flex:flex}}>
        <a href={link} target="_blank" >
          <img src={visual} alt={altText} style={{height:'100%', width:'100%', objectFit:'cover'}}/>
          <div style={{width:'100%', color:'white', fontSize:'25px', position:'absolute', bottom:'0px', left:'0px', backgroundColor:'#00000090'}}>
          <div style={fontStyle}>{title}</div>
          </div>
        </a>
      </div>
    )
  }

  
  export default inject("store")(observer(Tile));