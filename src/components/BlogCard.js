import * as React from "react"

const BlogCard = props => {
    
    return (
      <div {...props}>
        <a href={'link'} target="_blank" style={{ cursor:'pointer', height:'250px', backgroundColor:'green', display:'flex', textDecoration:'none', color:'black'}}>
        <div style={{backgroundColor:'yellow', height:'250px', minWidth:'250px'}}>

        </div>
        <div style={{padding:'25px', display:'flex', flexDirection:'column'}}>
            <div style={{fontSize:35, fontWeight:'bold', flex:1}}>Überschrift Überschrift Überschrift Überschrift</div>
            <div style={{ display:'webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp:3, overflow:'hidden'}}>
            
            Traditionelles Marketing zieht oft nicht mehr. Der Markt ist von den vielen Angeboten & konkurrierenden Werbebotschaften übersättigt und die rasante Entwicklung im E-Commerce macht alle denkbaren Ausführungen und Modelle für jedermann verfügbar.
            Traditionelles Marketing zieht oft nicht mehr. Der Markt ist von den vielen Angeboten & konkurrierenden Werbebotschaften übersättigt und die rasante Entwicklung im E-Commerce macht alle denkbaren Ausführungen und Modelle für jedermann verfügbar.
            Traditionelles Marketing zieht oft nicht mehr. Der Markt ist von den vielen Angeboten & konkurrierenden Werbebotschaften übersättigt und die rasante Entwicklung im E-Commerce macht alle denkbaren Ausführungen und Modelle für jedermann verfügbar.
            
            </div>
        </div>
          
          
        </a>
      </div>
    )
  }

  export default BlogCard