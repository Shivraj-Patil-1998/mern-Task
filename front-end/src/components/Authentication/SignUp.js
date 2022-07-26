import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";
import axios from "axios";

function SignUp() {
  let history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = () => {
    axios.post(`http://localhost:8080/usrauth/register`,{
       name:data.name,
       email:data.email,
       password:data.password
    }).then((res=>{
      console.log(res)
      if(res.status === 200){
        history.push('/login')
      }
      setData({
        name:"",
        email:"",
        password:""
      })
    })).catch(err=>{
      console.log(err)
      if(err.response.status == 422){
        alert('email is taken or something went wrong')
      }
      setData({
        name:"",
        email:"",
        password:""
      })
    })
  };

  return (
    <div className="sign_Up_component">
      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <div className="form_div">
          <div className="form-item">
            <label htmlFor="name"></label>
            <input
              type="name"
              name="name"
              value={data.name}
              required="required"
              placeholder="Name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              value={data.email}
              required="required"
              placeholder="Email Address"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              value={data.password}
              required="required"
              placeholder="Password"
              onChange={handleChange}
            ></input>
          </div>
          <div className="button-panel">
            <button type="submit" className="button" onClick={submit}>
              Sign Up
            </button>
          </div>
          <Link to="/login">Already have account?<span>Login</span></Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
