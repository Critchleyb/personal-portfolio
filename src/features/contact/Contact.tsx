import React from "react";
import { Button, Divider } from "semantic-ui-react";
import Layout from "../utils/Layout";
import "./contact.scss";

export default function Contact() {
  return (
    <Layout className="contact">
      <div className="contact-container">
        <h2>Contact me</h2>
        <div className="contact-content">
          <h3>Thanks for taking the time to reach out</h3>
          <p>
            If you would like to get in touch to talk to me about a project,
            role, or just say hi, you can contact me using email below. Let's
            talk!
          </p>
          <span className="contact-email">Critchley_11@hotmail.co.uk</span>
          <Divider />
          <h3>Let's Get Social</h3>
          <div className="contact-buttons-container">
            <Button
              as="a"
              href="https://github.com/Critchleyb"
              target="_blank"
              content="Github"
              labelPosition="right"
              icon="github"
              color="black"
            />
            <Button
              as="a"
              href="https://www.linkedin.com/in/ben-critchley-855b08105/"
              target="_blank"
              content="LinkedIn"
              labelPosition="right"
              icon="linkedin"
              color="linkedin"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
