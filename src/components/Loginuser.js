import React from "react";
import './Loginuser.css';

const Loginuser = () => {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <img
            src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="Mobile Number"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="OTP"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>

        
      </div>
    </div>
  );
};

export default Loginuser;
