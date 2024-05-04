import React from "react";
import "../components/Login.css";
import img from "../assets/image.png";
import logo from "../assets/image copy 2.png";

const Login = () => {
  return (
    <div>
      <nav
        class="navbar bg-body-tertiary"
        style={{ backgroundColor: "darkblue", height: "10px" }}
      >
        <div class="container-fluid" style={{ backgroundColor: "darkblue" }}>
          <a
            class="navbar-brand"
            href="#"
            style={{
              backgroundColor: "darkblue",
              fontWeight: "bold",
              paddingLeft: "30px",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="40"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
      <div className="login-containerL">
        <div className="left-sectionL">
          <div className="headingL">
            <h2 style={{ color: "darkblue", fontWeight: "bolder" }}>
              Welcom back
            </h2>
            <h7>Sign in to youe account</h7>
          </div>
          <br />
          <br></br>
          <form>
            <div className="form-groupL">
              <label
                htmlFor="exampleInputEmail1"
                style={{
                  color: "darkblue",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                Email address
              </label>
              <input
                type="email"
                className="form-controlL"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="you@example.com"
              />
            </div>
            <div className="form-groupL">
              <label
                htmlFor="exampleInputPassword1"
                style={{
                  color: "darkblue",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-controlL"
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                marginTop: "20px",
                backgroundColor: "darkblue",
                width: "300px",
              }}
            >
              Login
            </button>
          </form>
        </div>
        <div className="right-sectionL">
          <img src={img} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
