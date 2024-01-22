import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router";
import auth from "../app/modules/auth";

const RegistrationForm = () => {
  const navigate = useNavigate(); //after create accout  it's redirect page
  const [isErrotMsg, setIsErroMsg] = useState(false); // for error message
  const [value, setValue] = useState("");
  const [formvalue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  //funtion for from data handling
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formvalue.name == "" ||
      formvalue.email == "" ||
      formvalue.password == ""
    ) {
      setIsErroMsg(true); // if form field is empaty then show error message
    } else {
      setValue(value);

      //create new user with firebase
      createUserWithEmailAndPassword(auth, formvalue.email, formvalue.password)
        .then((auth) => {
          navigate("/homepage");
        }) //after create accout  it's redirect page
        .catch((error) => {
          console.log(error);
        });

      //Empaty form value
      setFormValue({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className="registration_container">
        <div>
          <form action="" onSubmit={submitHandler}>
            <div className="name">
              <label htmlFor="name" className="lable">
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter Name"
                value={formvalue.name}
                onChange={(e) => {
                  setFormValue({ ...formvalue, name: e.target.value });
                }}
              />
            </div>
            <div className="email">
              <label htmlFor="firstname" className="lable">
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="Example@gmail.com"
                value={formvalue.email}
                onChange={(e) => {
                  setFormValue({ ...formvalue, email: e.target.value });
                }}
              />
            </div>
            <div className="password">
              <lable htmlFor="password" className="lable">
                password
              </lable>
              <br />
              <input
                type="text"
                placeholder="password"
                value={formvalue.password}
                onChange={(e) => {
                  setFormValue({ ...formvalue, password: e.target.value });
                }}
              />
            </div>
            <div className="errorMsg">
              {isErrotMsg ? (
                <b style={{ color: "#ccc" }}>All field is required</b>
              ) : null}
            </div>
            <input
              type="submit"
              name="submit"
              value="create account"
              className="createuser"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
