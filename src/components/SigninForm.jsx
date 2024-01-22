import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../app/modules/auth/index";

const SigninForm = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const LoginHandler = (e) => {
    if (email == "" || password == "") {
      alert("all filed is required to fill");
    } else {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          console.log(auth);
          navigate("/homepage");
        })
        .catch((err) => {
          alert("Enter Correct Email and Password");
        });
    }
  };
  return (
    <>
      <div className="loginContainer">
        <form action="" onSubmit={LoginHandler}>
          <div className="usename">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="pass">
            <input
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="login">
            <input type="submit" value="Login" className="lognbtn" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
