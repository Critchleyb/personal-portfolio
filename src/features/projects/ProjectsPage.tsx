import React, { useState } from "react";
import Layout from "../utils/Layout";
import "./projectsPage.scss";
import { Project, projects } from "./projects";

export default function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState("Personal");

  return (
    <Layout className="projectsPage">
      <div className="projectsPage-container">
        <h2 className="projectsPage">My Projects</h2>
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "70%",
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
          <div>
            <ul>
              {projects.map((project) => {
                if (project.category === selectedTab) {
                  return <li style={{ color: "black" }}>{project.title}</li>;
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
