import React from "react";
import Particle from "./Particle";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}>
    <Particle/>
  </div>;
}

export default Pre;