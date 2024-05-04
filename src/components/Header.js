import React from "react";
import logo from "../assets/image copy.png";
import { Button } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#"
            style={{
              color: "darkblue",
              fontWeight: "bold",
              paddingLeft: "30px",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="40"
              class="d-inline-block align-text-top"
            />
            QuickCast Content Authoring for Internal Communication
          </a>
          <a>
            <FontAwesomeIcon icon={faCog} />

            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
