import React from "react";
import "./navbar.scss";
import {
  faCode,
  faHome,
  faFileCode,
  faAddressCard,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul>
          <li>
            <NavbarItem
              icon={"home"}
              name={"Summary"}
              linkPath={"/portfolio"}
            />
          </li>
          <li>
            <NavbarItem icon={"male"} name={"About Me"} linkPath={"/aboutme"} />
          </li>
          <li>
            <NavbarItem icon={"code"} name={"Skills"} linkPath={"/skills"} />
          </li>
          <li>
            <NavbarItem
              icon={"file code"}
              name={"Projects"}
              linkPath={"/projects"}
            />
          </li>
          <li>
            <NavbarItem
              icon={"address card"}
              name={"Contact"}
              linkPath={"/contact"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
