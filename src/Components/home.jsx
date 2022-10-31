import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/login" className="btn btn-primary btn-lg">
          Login
        </Link>
      </div>
    );
  }
}
export default Home;
