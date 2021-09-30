import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <>
      <footer class="page-footer page-footer1 font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <NavLink to="/"><img className="icon-bottom" src="https://i.ibb.co/dmZFYQ9/logo.png" alt="" /></NavLink><br/>
              <img className="social-icon-bottom" src="https://i.pinimg.com/originals/69/74/b5/6974b5f9158cbe064b8e465e68e52eed.png" alt="" />
              <img className="social-icon-bottom" src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png" alt="" />&nbsp;
              <img className="social-icon-bottom1" src="https://i.pinimg.com/originals/01/c0/88/01c0880579d2a4e4b1608ddf7c2390f4.png" alt="" />
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> &nbsp;Team W-Karya</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
