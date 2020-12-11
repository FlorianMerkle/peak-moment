import * as React from "react"

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
  return (
    <main style={pageStyles}>
      <title>PEAK Moment</title>
      <div style={{width:'100%', height:'200px', backgroundColor:'black', color:'white'}}>
        <div style={{display:'flex'}}>
          <img></img>
        </div>        
      </div>
      <div style={{width:'100%', height:'100vh', backgroundColor:'darkgrey', color:'white', display:'flex', flexDirection:'column'}}>
        <div style={{flex:1, flexDirection:'row', display:'flex'}}>
          <div style={{backgroundColor:'green', flex:2}}></div>
          <div style={{backgroundColor:'blue', flex:3}}></div>
          <div style={{backgroundColor:'yellow', flex:3}}></div>
          

          

        </div>
        <div style={{flex:1, flexDirection:'row', display:'flex'}}>
          <div style={{backgroundColor:'black', flex:5}}></div>
          <div style={{backgroundColor:'orange', flex:3}}></div>
          <div style={{backgroundColor:'red', flex:3}}></div>
          
        </div>
        <div style={{flex:1, flexDirection:'row', display:'flex'}}>
          <div style={{backgroundColor:'violete', flex:2}}></div>
          <div style={{backgroundColor:'darkblue', flex:3}}></div>
          <div style={{backgroundColor:'gold', flex:3}}></div>
          
        </div>

      </div>
      <div style={{width:'100%', height:'300px', backgroundColor:'black', color:'white'}}>
        Footer
      </div>
    </main>
  )
}

export default IndexPage
