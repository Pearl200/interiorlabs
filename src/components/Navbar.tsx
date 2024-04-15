/* eslint-disable jsx-a11y/anchor-is-valid */
// components/NavBar.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const NavBar: React.FC = () => {
  return (
    <nav className="border-b-1 flex flex-row justify-between items-center text-white p-4">
      <div>
        <p className="font-semibold ">
          INTERIOR
          <span className="font-semibold text-yellow-500">LABS</span>
        </p>
      </div>

      <ul className="flex items-center gap-x-2 ">
        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">Clients</a>
        </li>

        <li>
          <a href="#">About Us</a>
        </li>

        <li>
          <a href="#">Portfolio </a>
        </li>

        <li>
          <a href="#">Mobile App </a>
        </li>
      </ul>

      <div className="text-white ">
        <FontAwesomeIcon icon={faInstagram} className="text-white mr-2" />
        <FontAwesomeIcon icon={faGoogle} className="text-white mr-2" />
        <FontAwesomeIcon icon={faFacebook} className="text-white" />
      </div>
    </nav>
  );
};

export default NavBar;
