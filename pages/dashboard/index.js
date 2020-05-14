import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardContainer from "../../components/dashboardContainer/index";
import api from "../../io/api";

const Dashboard = ({ account }) => {
  const router = useRouter();
  const [isUser, setIsUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("user_info"));
    if (!userInfo) {
      console.log("user is NOT logged in");
      router.push("/auth/login");
    } else {
      api
        .get(`/results?user=${account.userinfo.data[0].id}`)
        .then((response) => {
          if (response.status === 200) {
            const quiz_data = response.data;
            setQuizResults(quiz_data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setIsUser(true);
      setUserName(account && account.userinfo.data[0].name);
      setUserEmail(account && account.userinfo.data[0].email);
      setUserId(account && account.userinfo.data[0].id);
    }
  }, []);

  return (
    <>
      {isUser && (
        <DashboardContainer
          userName={userName}
          userResults={quizResults}
          userEmail={userEmail}
          userId={userId}
          userData={account.userinfo.data[0]}
        />
      )}
    </>
  );
};

Dashboard.getInitialProps = async ({ query }) => {
  const { email, id } = query;
  const results = await Promise.all([
    api.get(`/user-details?user=${email}`),
    api.get(`/results?user=${id}`),
  ]);

  const { status: userDetailStatus, data: userData } = results[0];

  return { account: { userinfo: userData } };
};

export default Dashboard;
