import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "./Accordion.scss";

const Accordion = ({ title, children, customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${customStyle ? customStyle : ""}`}>
      <div
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
        {isOpen ? (
          <KeyboardArrowUpOutlinedIcon style={{ marginLeft: "auto" }} />
        ) : (
          <KeyboardArrowDownOutlinedIcon style={{ marginLeft: "auto" }} />
        )}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
