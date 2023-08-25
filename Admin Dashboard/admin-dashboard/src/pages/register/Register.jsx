import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
    address: "",
    isBusinessOwner: true,
    occupation: "",

  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        // img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Register as A Business Owner</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          {/* <label htmlFor="">Profile Picture</label>
          <input
            name="profilePicture"
            type="profilePicture"
            placeholder="Profile Picture URL"
            onChange={handleChange}
          /> */}
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
{/*           
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
           */}
          <label htmlFor="">Address</label>
          <input
            name="address"
            type="text"
            placeholder="Adama"
            onChange={handleChange}
          />
          <label htmlFor="">Occupation</label>
          <input
            name="occupation"
            type="text"
            placeholder="Manager"
            onChange={handleChange}
          />
          <a href="http://127.0.0.1:5173/login">Sign In</a>
          <button type="submit">Register</button>
        </div>
       
      </form>
    </div>
  );
}


export default Register