import React from 'react'
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <>
            <section class="vh-100">
                <div class="col-md-12 text-center  ">
                <br /><br /><br /><br /><br />
                <h1> Choose Your Category </h1>
                <br />
                <NavLink to="/usersignin"><button type="button" class="btn  btn-primary btn-lg btn-block">
                    User Login
                </button></NavLink>&nbsp;&nbsp;&nbsp;
                <NavLink to="/compsignin"><button type="button" class="btn btn-secondary btn-lg btn-block">
                    Company Login
                </button></NavLink>
                </div>
            </section>
            </>
        </div>
    )
}

export default Login
