import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h3>About</h3>
      <Link to="/" className="btn btn-primary btn-lg">
        Back Home
      </Link>
    </div>
  );
};

export default About;
