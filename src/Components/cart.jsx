import React from "react";
import { Link } from "react-router-dom";
function Cart(props) {
  let total = 0;
  props.product.map((e) => (total += e.price));
  const handleRemove = (itemId) => {
    return props.handleValues(itemId);
  };
  return (
    <div>
      <span className="text-warning">
        {props.product.length > 0 ? (
          <h1>Total: ${total}</h1>
        ) : (
          <h1>Your Cart is Empty 😔</h1>
        )}
      </span>
      <div className="cards">
        {props.product.map((item) => {
          return (
            <div className="cart-item " key={item.id}>
              <span className="badge">${item.price}</span>
              <img src={item.img} alt="No Logo Found" />
              <h3>{item.title}</h3>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <button className="btn btn-sm btn-warning">Buy</button>
              <button
                className="btn btn-danger m-2 btn-sm"
                onClick={() => {
                  handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <Link to="/products" className="btn btn-primary m-3">
        Add products
      </Link>
    </div>
  );
}

export default Cart;
