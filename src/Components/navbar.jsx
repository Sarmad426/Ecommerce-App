import React from "react";
import { NavLink, Outlet } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1>ABP Motors</h1>
        </div>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="about" className="nav-link ">
          About
        </NavLink>
        <NavLink to="products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="posts" className="nav-link">
          Posts
        </NavLink>
        <NavLink to="login" className="nav-link">
          Login
        </NavLink>
        <NavLink to="cart" className="cart-link">
          <i className="fa fa-shopping-cart shopping-cart"></i>
          <span className="badge bg-danger counter-badge">
            {this.props.counter.length}
          </span>
        </NavLink>

        <Outlet />
      </nav>
    );
  }
}

export default Navbar;
