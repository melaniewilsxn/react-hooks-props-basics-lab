import React from "react";

function getBio(bio){
  if(bio === null || bio == ""){
    return null
  } else return <p>{bio}</p>
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {getBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
