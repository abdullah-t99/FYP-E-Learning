import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { DefaultLayout } from "../components/layout/index";
import api from "../io/api";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40,
  },
};

const Profile = ({ data }) => {
  const userdetails = data.data[0];

  const [user, setUser] = useState({});

  const getUserInfo = () => {
    return setUser(userdetails);
  };

  useEffect(() => {
    getUserInfo();
  }),
    [];

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async ({ id, name, email, password }) => {
    const payLoad = {
      id,
      name,
      email,
      password,
    };
    const { status } = await api.post("/user-details", payLoad);
    if (status === 200) {
      return Router.push(`/dashboard?email=${email}&id=${id}`);
    }
    return window.alert("failed to update details");
  };
  return (
    <DefaultLayout>
      <div style={styles.wrapper}>
        <h1 style={{ fontSize: "-webkit-xxx-large", color: "#FC9246" }}>
          {user.name}'s profile page!
        </h1>
        <br />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="id" defaultValue={user.id} ref={register} hidden />
          <label style={{ marginLeft: "300px" }}>
            name:
            <input name="name" defaultValue={user.name} ref={register} />
          </label>
          <br />
          <label style={{ marginLeft: "242px" }}>
            email address:
            <input name="email" defaultValue={user.email} ref={register} />
          </label>
          <br />
          <div
            style={{
              border: "solid 1px black",
              padding: "20px",
              width: "300px",
              marginTop: "50px",
              marginLeft: "230px",
              background: "antiquewhite",
            }}
          >
            <label style={{ marginLeft: "47px" }}>
              update password:
              <input name="password" ref={register} type="password" />
            </label>
          </div>
          <br />
          <input type="submit" value="update" />
          <br />
          <p
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => Router.back()}
          >
            Go Back
          </p>
        </form>
      </div>
    </DefaultLayout>
  );
};

Profile.getInitialProps = async ({ query }) => {
  let user = query.email;
  const { data, status } = await api.get(`/user-details?user=${user}`);
  return { data };
};

export default Profile;
