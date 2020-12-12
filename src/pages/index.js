import * as React from "react"
import experiences from "../../content/en_experiences.json"
import generalSettings from "../../content/general_settings.json"
import Tile from "../components/Tile"


// styles
const pageStyles = {
  color: "#232129",
  backgroundColor:'black',
  padding: "0",
  margin:'0',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup

const IndexPage = () => {
  const {title, logo} = generalSettings
  return (
    <main style={pageStyles}>
      <title>PEAK Moment</title>
      <div style={{width:'100%', height:'200px', backgroundColor:'black', color:'white', display:'flex', }}>
          <img src={logo} alt={title} style={{flex:'2',height:'100%', width:'100%', objectFit:'cover'}}/>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'35px', flex:'5'}}>{title}</div>
      </div>
      <div style={{width:'100%', height:'100vh', backgroundColor:'darkgrey', color:'white', display:'flex', flexDirection:'column'}}>
        <div style={{flex:1, flexDirection:'row', display:'flex'}}>
        {experiences.experience.slice(0,3).map(exp => <Tile experience = {exp}/>)}
        </div>
        <div style={{flex:1, flexDirection:'row', display:'flex'}}>
        {experiences.experience.slice(3,6).map(exp => <Tile experience = {exp}/>)}
          
        </div>
        <div style={{flex:1, flexDirection:'row', display:'flex'}}>
        {experiences.experience.slice(6,9).map(exp => <Tile experience = {exp}/>)}
          
        </div>

      </div>
      <div style={{width:'100%', height:'300px', backgroundColor:'black', color:'white'}}>
        Footer
      </div>
    </main>
  )
}

export default IndexPage
