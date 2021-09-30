import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section class="vh-100">
        <div class="col-md-12 text-center  ">
          <br /><br /><br /><br /><br />
          <h1> Choose Your Category </h1>
          <br />
          <NavLink to="/usersignup"><button type="button" class="btn  btn-primary btn-lg btn-block">
            User Signup
          </button></NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to="/compsignup"><button type="button" class="btn btn-secondary btn-lg btn-block">
            Company Signup
          </button></NavLink>
        </div>
      </section>
    </>
  );
};

export default Signup;
