import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function WelcomeUser() {
    let history = useHistory();
  const access_token = localStorage.getItem("access_token");
  // console.log(access_token)
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/getuserdata`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          alert("Please login invalid credential");
        }
        if (err.response.status == 404) {
          alert("user not found");
        }
        if (err.response.status == 400) {
          alert("user data not found");
        } else {
          alert("Something went wrong");
        }
      });
  }, []);

  function addData() {
    history.push('/adduserdata')
  }
  return(
    <div>
    {
      data.map((item, i) => {
      return (
        <div key={item._id}>
          <div>{item.text}</div>
        </div>
      );
    })
    }
     <button onClick={addData}>Add Data</button>
    </div>
  ) 
}

export default WelcomeUser;
