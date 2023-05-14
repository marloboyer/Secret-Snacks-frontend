import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="container" id="signup">
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <div className="form-group">
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div className="form-group">
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <div className="form-group">
          Password confirmation: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <button type="submit" className="btn btn-dark">
          Sign Up
        </button>
      </form>
    </div>
  );
}
