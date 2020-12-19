import React from "react";
const Newsletter = () => {
  return (
    <div>
    <div style={{ backgroundColor: "white", height:'50px', borderStyle: 'solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'20px', fontWeight:'bold', borderWidth:'3px'}}> <span>Get in Touch</span></div>
    <div style={{ backgroundColor: "black", padding: "30px", color: "white" }}>
    
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: "flex", padding: "10px 0px" }}>
          <label style={{ flex: 1 }}>Name</label>
          <input style={{ flex: 2 }} type="text" name="name" id="name" />
        </div>
        <div style={{ display: "flex", padding: "10px 0px" }}>
          <label style={{ flex: 1 }}>Email</label>
          <input style={{ flex: 2 }} type="email" name="email" id="email" />
        </div>
        <div style={{ display: "flex", padding: "10px 0px" }}>
          <label style={{ flex: 1 }}>Firma</label>
          <input style={{ flex: 2 }} type="text" name="subject" id="subject" />
        </div>
        <div style={{ display: "flex", padding: "10px 0px" }}>
          <label style={{ flex: 1 }}>Nachricht</label>
          <textarea
            style={{ flex:2, resize: "none" }}
            name="message"
            id="message"
            rows="10"
          />
        </div>
        <div style={{ display: "flex", padding: "10px 0px" }}>
          <button
            style={{
              flex: 1,
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              padding: "10px 0px",
              margin: "5px 0px",
            }}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Newsletter;
