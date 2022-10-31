import React from "react";
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1>
          Welcome{" "}
          <span className="user-name">
            {this.props.user.name.toUpperCase()}
          </span>
        </h1>
        <Link to="/" className="btn btn-primary m-2">
          Back home
        </Link>
      </div>
    );
  }
}
export default Dashboard;
