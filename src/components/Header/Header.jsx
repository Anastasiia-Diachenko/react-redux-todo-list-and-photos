import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="nav-home-page">
        <li className="nav-item">
          <Link to="/todos" className="nav-item">
            Todos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/photos" className="nav-item">
            Photos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
