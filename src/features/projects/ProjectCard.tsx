import React from "react";
import { Image, List, Button, Label } from "semantic-ui-react";
import "./projectCard.scss";
import { Project } from "./projects";
import placeholderImage from "../../assets/images/placeholder.jpg";

interface Props {
  project: Project;
  openModal: (project: Project) => void;
}

export default function ProjectCard({ project, openModal }: Props) {
  return (
    <div
      className="project-card"
      onClick={() => openModal(project)}
      style={{ position: "relative" }}
    >
      <h3>{project.title}</h3>

      <div className="project-card-image-container">
        <Image
          className="project-card-image"
          src={project.image || placeholderImage}
          alt="project image"
        />
      </div>
      <Label
        color={project.category === "Personal" ? "green" : "red"}
        style={{ marginTop: "0.5rem" }}
      >
        {project.category} Project
      </Label>
      <p>{project.shortBio}</p>
      <List
        bulleted
        className="project-card-list"
        items={project.tools.map((el, i) => {
          if (i < 4) return el;
          return null;
        })}
      />
      <Button
        className="project-card-seeMore"
        color="facebook"
        size="medium"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        See more ...
      </Button>
    </div>
  );
}
