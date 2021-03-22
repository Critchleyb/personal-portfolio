import React from "react";
import { NavLink, NavLinkProps, useHistory } from "react-router-dom";
import "./navButton.css";

interface Props {
  content: string;
  to: string;
}

export default function Button({ content, to }: Props) {
  const history = useHistory();
  return (
    <div className="navButton" onClick={() => history.push(to)}>
      {content}
    </div>
  );
}
