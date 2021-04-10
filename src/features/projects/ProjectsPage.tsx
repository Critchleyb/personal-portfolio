import React, { useState } from "react";
import Layout from "../utils/Layout";
import "./projectsPage.scss";
import { Project, projects } from "./projects";
import ProjectCard from "./ProjectCard";
import { Divider } from "semantic-ui-react";
import ProjectModal from "./ProjectModal";

export default function ProjectsPage() {
  // const [selectedTab, setSelectedTab] = useState("Personal");
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function handleOpenModal(project: Project) {
    setSelectedProject(project);
    setOpen(true);
  }

  function handleCloseModal() {
    setSelectedProject(null);
  }

  return (
    <>
      {open && (
        <ProjectModal
          project={selectedProject}
          clearProject={handleCloseModal}
        />
      )}
      <Layout className="projectsPage">
        <div className="projectsPage-container">
          <h2 className="projectsPage">My Projects</h2>
          <div className="projectsPage-projects">
            {/* <div
            className="projectsPage-projects-tab"
            style={{
              left: "45%",
              backgroundColor:
                selectedTab === "Personal" ? "rgb(240, 240, 240)" : "gray",
            }}
            onClick={() => setSelectedTab("Personal")}
          >
            Personal
          </div>
          <div
            className="projectsPage-projects-tab"
            style={{
              left: "55%",
              backgroundColor:
                selectedTab === "Course" ? "rgb(240, 240, 240)" : "gray",
            }}
            onClick={() => setSelectedTab("Course")}
          >
            Course
          </div> */}
            <p>
              {/* {selectedTab === "Personal"
              ? `These are my personal projects, I enjoy creating functional web applications from start to finish.`
              : "These are my guided course projects that I have built whilst learning to code."} */}
              These are the projects I have worked on so far. I'm always
              learning and creating more applications to show off my potential.
            </p>
            <Divider />
            <div className="projectsPage-projects-cards">
              {projects.map((project, i) => {
                // if (project.category === selectedTab) {
                //   return (
                //     <ProjectCard
                //       key={i}
                //       project={project}
                //       openModal={handleOpenModal}
                //     />
                //   );
                // }
                // return null;
                return (
                  <ProjectCard
                    key={i}
                    project={project}
                    openModal={handleOpenModal}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
