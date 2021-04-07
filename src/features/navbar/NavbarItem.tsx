import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbaritem.scss";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  faIcon: IconDefinition;
  name: string;
  linkPath: string;
}

export default function NavbarItem({ faIcon, name, linkPath }: Props) {
  return (
    <NavLink
      to={linkPath}
      exact
      className="hover-highlight"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "25rem",
        transition: "0.2s",
        textDecoration: "none",
        textTransform: "uppercase",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
      activeStyle={{
        backgroundColor: "#273c75",
      }}
    >
      <div style={{ width: "6rem", display: "flex", justifyContent: "center" }}>
        <FontAwesomeIcon icon={faIcon} size="3x" color="white" />
      </div>
      <span
        style={{
          color: "white",
          fontSize: "2.5rem",
          marginLeft: "0.1rem",
          cursor: "default",
        }}
      >
        {name}
      </span>
    </NavLink>
  );
}
