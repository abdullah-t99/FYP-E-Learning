import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "antd/lib/layout";
import DefaultHeader from "./default-header";
import DefaultFooter from "./default-footer";

const { Content } = Layout;

const DefaultLayout = ({ children }) => {
  const [isUser, setIsUser] = useState({});
  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("user_info"));
    if (!userInfo) {
      console.log("user is NOT logged in");
      setIsUser(false);
    } else {
      setIsUser(userInfo);
    }
  }, []);
  const { user_name = null, id = null, user_email = null } = isUser;
  return (
    <>
      <Layout>
        <DefaultHeader
          isUser={isUser}
          username={user_name && user_name}
          user_id={id && id}
          user_email={user_email && user_email}
        />
        <Content>{children}</Content>
        <DefaultFooter />
      </Layout>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
