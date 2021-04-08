import React from "react";
import { Divider, Image, List } from "semantic-ui-react";
import "./projectCard.scss";
import { Project } from "./projects";
import placeholderImage from "../../assets/images/placeholder.jpg";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <Image
        className="project-card-image"
        src={project.image || placeholderImage}
      />
      <p>{project.shortBio}</p>
      <List
        bulleted
        className="project-card-list"
        items={project.tools.map((el, i) => {
          if (i < 4) return el;
        })}
      />
    </div>
  );
}
