import React from "react";
import { Link } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleGeneralAudienceSubscription = async (event) => {
    event.preventDefault();
    try {
      let res = await addToMailchimp(this.state.email);

      if (res.result === "success") {
        alert(res.msg);
      } else {
        alert(res.msg);
      }
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  };

  render() {
    return (
      <div
        style={{
          boxShadow: "3px 5px 3px #9E9E9E80",
          borderRadius:'10px',
          backgroundColor: "black",
          color: "white",
          padding: "25px",
        }}
      >
        <div style={{display:'flex'}}>
          <input
            label="email address"
            style={{flex:2, marginRight:'100px'}}
            type="text"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
            placeholder={"Email Addresse"}
          />

          <button
            onClick={this.handleGeneralAudienceSubscription}
            style={{
              flex: 1,
              backgroundColor: "#F9C8B7",
              color: "black",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              padding: "10px 0px",
              margin: "5px 0px",
            }}
          >
            {" "}
            Sign Up{" "}
          </button>
        </div>
        <div style={{}}>
          <p style={{ paddingBottom: "0px", fontSize: "1rem" }}>
            {
              "Ja, ich will den Newsletter mit Informationen zur Experience Economy und dem Angebot von Peak Moment abonnieren"
            }
          </p>

          <p style={{ paddingBottom: "0px", fontSize: "1rem" }}>
            Hinweise zur von der Einwilligung umfassten Erfolgsmessung, dem
            Protokollieren ihrer Anmeldung, dem Einsatz des
            Versanddienstleisters Mailchimp sowie zu ihren Widerrufsrechten
            finden Sie in der{" "}
            <Link style={{ color: "black" }} to="/">
              Datenschutzerklärung
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default Newsletter;
