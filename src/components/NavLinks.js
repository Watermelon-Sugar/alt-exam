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

      <Link to="/error-page" className="links">
         Error Boundary
      </Link>
      
    </div>
  );
};

export default NavLinks;
