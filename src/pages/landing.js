import * as React from "react";
import ReactMarkdown from "react-markdown";
import { inject, observer } from "mobx-react";

import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import generalData from "../../content/general_settings.json";
import aboutData from "../../content/de_about.json";


const LandingPage = props => {
  return(
  <div>
    {props.store.device==='desktop' && <Desktop/>}
    {props.store.device!=='desktop' && <Mobile/>}
    </div>)
};

const Desktop = () => {
  return (
    
      <div>
        
      </div>
    
  );
};

const Mobile = () => {
  return (
    
      <div>
      </div>
    
  );
};

export default inject("store")(observer(LandingPage));
