import React, { useState } from "react";
import Layout from "../utils/Layout";
import "./projectsPage.scss";
import { Project, projects } from "./projects";
import ProjectCard from "./ProjectCard";
import { Divider } from "semantic-ui-react";

export default function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState("Personal");

  return (
    <Layout className="projectsPage">
      <div className="projectsPage-container">
        <h2 className="projectsPage">My Projects</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "80%",
            height: "80%",
            backgroundColor: "white",
            marginTop: "auto",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            boxShadow: "5px 5px 5px #111",
          }}
        >
          <div
            className="projectsPage-tab"
            style={{
              left: "45%",
              backgroundColor: selectedTab === "Personal" ? "white" : "gray",
            }}
            onClick={() => setSelectedTab("Personal")}
          >
            Personal
          </div>
          <div
            className="projectsPage-tab"
            style={{
              left: "55%",
              backgroundColor: selectedTab === "Course" ? "white" : "gray",
            }}
            onClick={() => setSelectedTab("Course")}
          >
            Course
          </div>
          <p>
            {selectedTab === "Personal"
              ? "These are my personal projects, source code is available on github."
              : "These are my course projects, source code is available on github."}
          </p>
          <Divider />
          <div className="projectsPage-projects">
            {projects.map((project) => {
              if (project.category === selectedTab) {
                return <ProjectCard project={project} />;
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
