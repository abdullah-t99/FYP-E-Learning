import React from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import api from "../../io/api";
import "./register.css";

const Login = () => {
  const form = useForm();
  const { register, handleSubmit, errors, setError } = form;

  const onSubmit = async (data) => {
    await api
      .post("/login", data)
      .then((response) => {
        if (response.status === 200) {
          const user_info = response.data;
          sessionStorage.setItem("user_info", JSON.stringify(user_info));
          return Router.push(
            `/dashboard?email=${user_info.user_email}&id=${user_info.user_id}`
          );
        }
        return window.alert("invalid username or password");
      })
      .catch((err) => {
        console.log(err);
      });
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
                <h5 className="card-title text-center">Login</h5>
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
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
                    value="Login"
                  />
                  <a
                    className="d-block text-center mt-2 small"
                    href="/auth/register"
                  >
                    Register
                  </a>
                  <hr className="my-4" />
                </form>
                <p
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => Router.back()}
                >
                  Go Back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
