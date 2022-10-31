import React from "react";
import { Link, useParams } from "react-router-dom";
import productData from "./data";
const SingleProduct = () => {
  const { productId } = useParams();
  const products = productData.find(
    (product) => product.id === parseInt(productId)
  );
  return (
    <div>
      <div className="cards">
        <div className="single-card">
          <span className="badge">${products.price}</span>
          <img src={products.img} alt="No Logo Found" />
          <h3>{products.title}</h3>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <button className="btn btn-sm btn-warning">Buy</button>
        </div>
      </div>
      <Link to="/products" className="btn btn-primary">
        Back to Products
      </Link>
    </div>
  );
};

export default SingleProduct;
