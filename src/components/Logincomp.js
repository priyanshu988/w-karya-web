import React from "react";
import './Loginuser.css';


const Logincomp = () => {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <img
            src="https://static.thenounproject.com/png/509354-200.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form>
          <input
            type="email"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="Password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Logincomp;
