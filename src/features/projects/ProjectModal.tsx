import React, { useEffect, useState } from "react";
import { Button, Header, Modal, Image, List, Divider } from "semantic-ui-react";
import { Project } from "./projects";
import "./projectModal.scss";
import placeholderImage from "../../assets/images/placeholder.jpg";

interface Props {
  project: Project | null;
  clearProject: () => void;
}

export default function ProjectModal({ project, clearProject }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (project != null) {
      setOpen(true);
    }
  }, [project]);

  function closeModal() {
    setOpen(false);
    clearProject();
  }

  return (
    <Modal
      className="projectModal"
      size="large"
      open={open}
      onClose={() => closeModal()}
      dimmer={"blurring"}
    >
      <Modal.Header
        style={{ fontFamily: "Quicksand, sans-serif" }}
        className="projectModal-header"
      >
        {project?.title}
      </Modal.Header>
      <Modal.Content scrolling>
        <div
          style={{
            height: "20rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={project?.image || placeholderImage}
            alt="project image"
            centered
          />
        </div>

        <Divider />
        <Modal.Description>
          <Header style={{ fontFamily: "Quicksand, sans-serif" }}>
            About this Project
          </Header>
          {project?.longBio?.map((bio, i) => (
            <p
              style={{
                fontFamily: "Quicksand, sans-serif",
                textAlign: "left",
                marginBottom: "0",
              }}
              key={i}
            >
              {bio}
            </p>
          ))}
          <Divider />
          <Header style={{ fontFamily: "Quicksand, sans-serif" }}>
            Things I Used
          </Header>
          <List bulleted items={project?.tools} style={{ padding: "1rem" }} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          as="a"
          href={project?.hostedLink}
          target="_blank"
          color="green"
          onClick={() => closeModal()}
          icon="eye"
          labelPosition="right"
          content="View"
          style={{ float: "left" }}
          disabled={!project?.hostedLink}
        />

        <Button
          as="a"
          href={project?.githubLink}
          target="_blank"
          content="Source Code"
          labelPosition="right"
          icon="github"
          onClick={() => closeModal()}
          color="black"
          style={{ float: "left" }}
          disabled={!project?.githubLink}
        />

        {project?.courseLink && (
          <Button
            as="a"
            href={project?.courseLink}
            target="_blank"
            content="View Course"
            labelPosition="right"
            icon="book"
            onClick={() => closeModal()}
            color="orange"
            style={{ float: "left" }}
            disabled={!project?.githubLink}
          />
        )}

        <Button
          content="Close"
          labelPosition="right"
          icon="close"
          onClick={() => closeModal()}
          color="red"
        />
      </Modal.Actions>
    </Modal>
  );
}
