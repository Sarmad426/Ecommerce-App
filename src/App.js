import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/posts";
import Home from "./Components/home";
import About from "./Components/about";
import Login from "./Components/login";
import Navbar from "./Components/navbar";
import Products from "./Components/products";
import ProtectedRoute from "./Components/protectedRoute";
import Error from "./Components/error";
import SingleProduct from "./Components/singleProduct";
import Dashboard from "./Components/dashboard";
import React from "react";
import Cart from "./Components/cart";
function App() {
  const [user, setUser] = React.useState({ name: "", email: "" });
  const [addedProducts, setAddedProducts] = React.useState([]);
  const addedToCart = (product) => {
    setAddedProducts([...addedProducts, product]);
  };
  const handleRemove = (productId) => {
    const products = addedProducts.filter((e) => e.id !== productId);
    setAddedProducts(products);
  };
  return (
    <BrowserRouter>
      <Navbar counter={addedProducts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="products"
          element={<Products addedToCart={addedToCart} />}
        />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="posts" element={<Post />} />
        <Route path="login" element={<Login setValues={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}></Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="cart"
          element={<Cart product={addedProducts} handleValues={handleRemove} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
