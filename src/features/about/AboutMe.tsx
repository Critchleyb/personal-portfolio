import React from "react";
import Layout from "../utils/Layout";
import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <Layout className="aboutMe">
      <div className="aboutMe-container">
        <h2 className="aboutMe-header">About Me</h2>
        <div className="aboutMe-content">
          <h3>Welcome to my portfolio.</h3>
          <p>
            I'm a self taught full stack developer from Basingstoke with a
            background in IT Support.
            <br />
            <br />
            Since the beggining of the Covid-19 pandemic, I've set myself the
            goal of learning how to design, develop and deploy a web application
            from scratch. Since then, I have completed numerous online courses
            in order to gain an understanding of the different launguages and
            technologies used in web development and come away with a great
            understanding of how the internet works.
            <br />
            <br />
            I'm now looking to move into a full time role to further expand on
            my knowledge, and really take my skills to the next level.
            <br />
            <br />
            Whilst my personal focus is to carry on gaining the skills to work
            proffesionally as full stack developer, I am currently also open to
            front end development roles.
          </p>
          <h3>A bit about me</h3>
          <p>
            Outside of development, I am a tech crazed nerd with a love for
            gaming.
          </p>
        </div>
      </div>
    </Layout>
  );
}
