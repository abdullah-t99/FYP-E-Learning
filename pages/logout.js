import React, { useEffect } from "react";
import Router, { useRouter } from "next/router";
import api from "../io/api";
const Logout = () => {
  const router = useRouter();
  // running on the client
  useEffect(() => {
    (async function() {
      const { data, status } = await api.post("/logout");

      // throw an client error when logout failed
      if (status !== 200) {
        console.error(`${status}: Logout failure - ${data.message}`);
      }
      Router.push("/");
    })();
  }, []);

  return <></>;
};

export default Logout;
