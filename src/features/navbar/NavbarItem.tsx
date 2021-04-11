import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbaritem.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

interface Props {
  icon: SemanticICONS;
  name: string;
  linkPath: string;
}

export default function NavbarItem({ icon, name, linkPath }: Props) {
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
        <Icon name={icon} color="grey" inverted size="big" />
      </div>
      <span
        style={{
          color: "white",
          fontSize: "2.5rem",
          marginLeft: "0.1rem",
          cursor: "pointer",
        }}
      >
        {name}
      </span>
    </NavLink>
  );
}
