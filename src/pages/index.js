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
      <div style={{width:'100%', height:'80vh', backgroundColor:'darkgrey', color:'white'}}>

      </div>
      <div style={{width:'100%', height:'300px', backgroundColor:'black', color:'white'}}>
        Footer
      </div>
    </main>
  )
}

export default IndexPage
