import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found:</h2>
      <Link to="/" className="btn btn-primary btn-lg">
        Back Home
      </Link>
    </div>
  );
}
