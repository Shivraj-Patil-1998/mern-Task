import React,{useState, useEffect} from 'react'
import axios from 'axios';
function AddUserData() {
  const access_token = localStorage.getItem('access_token')
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + access_token,
  };

  const [data, setData] = useState({
    text: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault()
    const access_token = localStorage.getItem("access_token");
    console.log(access_token)
    axios.post('http://localhost:8080/user/postuserdata',{
       text:"sdasdas"
    },{headers:headers}).then((res=>{
      console.log(res)
      setData({
        text:"",
      })
    })).catch(err=>{
      console.log(err)
      setData({
        text:"",
      })
    })
  };

    return (
        <div className="sign_Up_component">
        <div className="form-wrapper">
          <h1>Add More Information</h1>
          <div className="form_div">
            <div className="form-item">
              <label htmlFor="text"></label>
              <input
                type="text"
                name="text"
                id="text"
                value={data.text}
                required="required"
                placeholder="text"
                onChange={handleChange}
              ></input>
            </div>
            <div className="button-panel">
              <button type="submit" className="button" onClick={submit}>
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddUserData
