import React from "react";

import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <div className="navlinks">
      <Link to="/" className="links">
        Counter
      </Link>

      <Link to="/test-error" className="links">
        Test Error
      </Link>
    </div>
  );
};

export default NavLinks;
