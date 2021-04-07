import React from "react";
import { Divider, Image } from "semantic-ui-react";
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
      <Image src={project.image || placeholderImage} />
    </div>
  );
}
