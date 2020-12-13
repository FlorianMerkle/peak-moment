import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "black",
  padding: "0",
  margin: "0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup

const AboutPage = () => {

  return (
    <main style={pageStyles}>
      <title>PEAK Moment</title>
      <Header />
      <div></div>
      <Footer />
    </main>
  );
};

export default AboutPage;
