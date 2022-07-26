import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./signup.css";
import axios from "axios";

function Login() {
  let history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = () => {
    axios.post(`http://localhost:8080/usrauth/login`,{
       email:data.email,
       password:data.password
    }).then((res=>{
      console.log(res)
      if(res.status === 200){
        history.push('/welcomeuser')
        localStorage.setItem('access_token', res.data.token);
      }
      setData({
        email:"",
        password:""
      })
    })).catch(err=>{
      console.log(err)
      if(err.response.status == 422){
        alert('email or password is incorrect or something went wrong')
      }
      if(err.response.status == 404){
        alert('email or password is incorrect or something went wrong')
      }
      setData({
        email:"",
        password:""
      })
    })
  };

  return (
    <div className="sign_Up_component">
      <div className="form-wrapper">
        <h1>Sign In</h1>
        <div className="form_div">
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
              Sign In
            </button>
          </div>
          <Link to="/signup">Create Account?<span>Register</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

