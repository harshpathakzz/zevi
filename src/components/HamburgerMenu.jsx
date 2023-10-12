import { useState } from "react";
import "./HamburgerMenu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu ${isMenuOpen ? "open" : ""}`}>
      <ul>
        <h1>Filters</h1>
        <li>SFilters</li>
        <li>Filters</li>
      </ul>
      <IconContext.Provider value={{ color: "#000", size: "16px" }}>
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default HamburgerMenu;
