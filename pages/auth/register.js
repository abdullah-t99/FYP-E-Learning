import React from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import "./register.css";
import api from "../../io/api";

const Register = (props) => {
  const form = useForm();
  const { register, handleSubmit, errors, setError } = form;

  const onSubmit = async ({ username, email, password }) => {
    const userinfo = {
      user_name: username,
      user_email: email,
      user_password: password,
    };
    const user = JSON.stringify({ user_name: username, user_email: email });
    const { status } = await api.post("/register", userinfo);
    if (status === 200) {
      await sessionStorage.setItem("user_info", user);
      return Router.push(`/dashboard?email=${email}`);
    }
    setError("failed to register");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div
              className="card card-signin flex-row my-5"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-img-left d-none d-md-flex" />
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUserame"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      autoFocus
                      ref={register({ required: true })}
                    />
                    <label htmlFor="inputUserame">Username</label>
                  </div>
                  {/* include validation with required or other standard HTML validation rules */}
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      ref={register({ required: true })}
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      ref={register({ required: true })}
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <input
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    value="Register"
                  />
                  <a
                    className="d-block text-center mt-2 small"
                    href="/auth/login"
                  >
                    Sign In
                  </a>
                  <hr className="my-4" />
                  <p
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => Router.back()}
                  >
                    Go Back
                  </p>
                  {/* <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2" /> Sign up with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f mr-2" /> Sign up with
                    Facebook
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
