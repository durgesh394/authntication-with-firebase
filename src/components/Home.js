import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../app/modules/auth";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div>
          <h1>Welcome here...!!</h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
