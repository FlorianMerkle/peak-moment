import React from "react"
import {Link} from 'gatsby'
import addToMailchimp from "gatsby-plugin-mailchimp"



class Newsletter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
          }
    }


    handleGeneralAudienceSubscription = async event => {
        event.preventDefault()
        try {
          let res = await addToMailchimp(this.state.email)
    
          if (res.result === "success") {
            alert(res.msg)
          } else {
            alert(res.msg)
          }
        } catch (err) {
          console.log("error")
          console.log(err)
        }
      }

    render() {
    return(
        <div style={{}}>
            <div style={{ maxWidth: this.props.news? '80%' : "1080px" }}>
              <div
                style={{}}
              >
                <div
                  style={{}}
                >
                  <h1 style={{}}>
                    {"Bleib auf dem Laufenden"}
                  </h1>
                  <p style={{}}>
                    {"Melde dich bei unserem Newsletter an um alle News zu erfahren"}
                  </p>
                </div>
                <input
                  label="email address"
                  style={{}}
                  type="text"
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                  placeholder={"Email Addresse"
                  }
                />

                <button
                  onClick={this.handleGeneralAudienceSubscription}
                  style={{}}
                >
                  {" "}
                  Sign Up{" "}
                </button>
              </div>
              <div
                style={{}}
              >
                
                  <p style={{paddingBottom:'20px', fontSize:'1rem'}}>
                    {'Ja, ich will den Newsletter mit Informationen zur Experience Economy und dem Angebot von Peak Moment abonnieren'}
                  </p>
                

                
                  <p style={{paddingBottom:'0px', fontSize:'1rem'}}>
                    Hinweise zur von der Einwilligung umfassten Erfolgsmessung,
                    dem Protokollieren ihrer Anmeldung, dem Einsatz des
                    Versanddienstleisters Mailchimp sowie zu ihren
                    Widerrufsrechten finden Sie in der{" "}
                    <Link style={{color:'black'}} to="/">Datenschutzerklärung</Link>
                  </p>
                
              </div>
            </div>
          </div>
    )
    }
}
export default Newsletter