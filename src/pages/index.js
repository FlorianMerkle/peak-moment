import * as React from "react";
import { inject, observer } from "mobx-react";
import experiences from "../../content/de_experiences.json";

import Tile from "../components/Tile";
import Layout from "../components/Layout"


// markup

const IndexPage = props => {
  return(
  <Layout>
    {props.store.device==='desktop' && <Desktop/>}
    {props.store.device!=='desktop' && <Mobile/>}
    </Layout>)
};

const Desktop = () => {
  return(
  
        <div
          style={{
            width: "100%",
            minHeight: "99vh",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ height: "33vh", flexDirection: "row", display: "flex" }}
          >
            {experiences.experience.slice(0, 3).map((exp) => (
              <Tile experience={exp} device={'desktop'}/>
            ))}
          </div>
          <div
            style={{ height: "33vh", flexDirection: "row", display: "flex" }}
          >
            {experiences.experience.slice(3, 6).map((exp) => (
              <Tile experience={exp} device={'desktop'}/>
            ))}
          </div>
          <div
            style={{ height: "33vh", flexDirection: "row", display: "flex" }}
          >
            {experiences.experience.slice(6, 9).map((exp) => (
              <Tile experience={exp} device={'desktop'}/>
            ))}
          </div>
          </div>
          
  )
}

const Mobile = () => {
  return(
        <div
          style={{
            width: "100%",
            minHeight: "99vh",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          
            {experiences.experience.slice(0, 10).map((exp) => (
              <div style={{padding:'10px', margin:'10px'}}>
              <div
            style={{ height: "20vh", flexDirection: "row", display: "flex", borderRadius:'10px', boxShadow: "3px 5px 3px #ffffff30", overflow:'hidden' }}
          >
              <Tile experience={exp} device={'mobile'}/>
              </div>
              </div>
            ))}
          </div>
          )
}

export default inject("store")(observer(IndexPage));