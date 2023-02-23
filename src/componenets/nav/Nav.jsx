import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { SiNewjapanprowrestling } from "react-icons/si";
import { links } from "../../constant";
import "./nav.css";
function Nav() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="links logo-icon">
          <SiNewjapanprowrestling />
        </Link>
      </div>

      <ul className="nav__links">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url} className="links">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
