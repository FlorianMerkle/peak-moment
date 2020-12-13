import * as React from "react";

import experiences from "../../content/en_experiences.json";

import Tile from "../components/Tile";
import Layout from "../components/Layout"

// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "black",
  padding: "0",
  margin: "0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display:'flex',
  justifyContent:'center'
};

// markup

const IndexPage = () => {
  return (
    <Layout>
        <div
          style={{
            width: "100%",
            height: "99vh",
            backgroundColor: "darkgrey",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ height: "33vh", flexDirection: "row", display: "flex" }}
          >
            {experiences.experience.slice(0, 3).map((exp) => (
              <Tile experience={exp} />
            ))}
          </div>
          <div
            style={{ height: "33vh", flexDirection: "row", display: "flex" }}
          >
            {experiences.experience.slice(3, 6).map((exp) => (
              <Tile experience={exp} />
            ))}
          </div>
          <div
            style={{ height: "33vh", flexDirection: "row", display: "flex" }}
          >
            {experiences.experience.slice(6, 9).map((exp) => (
              <Tile experience={exp} />
            ))}
          </div>
          </div>
          </Layout>
  );
};

export default IndexPage;
