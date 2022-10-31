import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductData from "./data";
class Products extends Component {
  render() {
    return (
      <div className="cards">
        {ProductData.map((product) => (
          <div className="product-card" key={product.id}>
            <i className="fa fa-heart favorite red"></i>
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <Link to={`${product.id}`} className="link">
              more info
            </Link>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <button
              className="btn btn-light btn-sm m-1"
              onClick={() => {
                this.props.addedToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
