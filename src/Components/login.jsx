import React from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setValues({ name, email });
    navigate("/dashboard");
  };
  return (
    <div className="login">
      <h1>Login here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="password">Email</label>
        <input
          type="email"
          className="form-control"
          id="password"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary m-3">Login</button>
      </form>
    </div>
  );
};

export default Login;
