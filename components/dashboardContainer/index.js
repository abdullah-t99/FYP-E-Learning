import React, { useState, useEffect } from "react";
import { DefaultLayout } from "../layout";
import SideBar from "./sidebar";
import "./styles.css";
import courses from "../../static/data";

const DashboardContainer = ({ userName, userResults, userEmail, userId }) => {
  const [activeTopics, setActiveTopic] = useState([]);
  const [activeCourse, setActiveCourse] = useState({});
  const [addResults, setAddQuizResults] = useState(0);
  const [subtractionResults, setSubtractionResults] = useState(0);
  const [mixedFractionResults, setMixFractionResults] = useState(0);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Select a course on the left to get started"
  );
  const getTopic = (course) => {
    setWelcomeMessage(null);
    setActiveCourse(course.course_name);
    return setActiveTopic(course.topics);
  };
  const results = userResults ? (
    userResults &&
    userResults.results
      .slice(Math.max(userResults.results.length - 3, 0))
      .map((a, i) => (
        <div className="card" style={{ marginBottom: "20px" }} key={i}>
          <h5 className="card-header">Quiz Results</h5>
          <div className="card-body">
            <h5 className="card-title">{a.quiz_name}</h5>
            <p className="card-text">
              Last time you scored:{" "}
              <strong>{a.quiz_result || "failed to get results"}</strong>
            </p>
            <a
              href={`/courses/numbers/additionquiz?id=${userId}`}
              className="btn btn-primary"
            >
              Try again?
            </a>
          </div>
        </div>
      ))
  ) : (
    <div className="card" style={{ marginBottom: "20px" }}>
      <h5 className="card-header">Quiz Results</h5>
      <div className="card-body">
        <h5 className="card-title">Looks like you haven't taken a quiz yet</h5>
        <a
          href={`/courses/numbers/additionquiz?id=${userId}`}
          className="btn btn-primary"
        >
          Take a quiz now
        </a>
      </div>
    </div>
  );

  return (
    <DefaultLayout>
      <div className="container" style={{ padding: "20px" }}>
        <div className="row justify-content-center">
          <div className="col" />
          <div className="col-6 text-center">
            <h1>Welcome {userName}</h1>
          </div>
          <div className="col text-center" />
        </div>
        <div className="row">
          <div className="col">
            {/* BEGIN SIDEBAR */}
            <>
              <div className="row">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img
                      src="http://placehold.it/64x64"
                      className="float-left rounded-circle"
                      style={{ margin: "10px" }}
                    />
                    <div className="message">
                      <h5 className="card-title">
                        {userName ? userName : "Username"}
                      </h5>
                      <a
                        className="card-subtitle mb-2 text-muted"
                        href={`/profile?email=${userEmail}`}
                      >
                        Update Your Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="row">
                  <div className="col" style={{ width: "20rem" }}>
                    <h6 className="text-muted">Courses</h6>
                    <ul className="list-group">
                      {courses.map((course, i) => {
                        const { course_name } = course;
                        return (
                          <li
                            key={i}
                            className="list-group-item"
                            onClick={() => getTopic(course)}
                          >
                            {course_name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </>
            {/* END SIDE BAR */}
          </div>
          <div className="col-6 text-center">
            <div
              className="dashboar-body"
              style={{ backgroundColor: "white", height: "576px" }}
            >
              <h6 className="text-muted">Topics</h6>
              <hr />
              <h3
                className="col-6 text-center"
                style={{
                  marginLeft: "140px",
                  marginTop: "100px",
                  color: "#FC9246",
                }}
              >
                {welcomeMessage}
              </h3>
              <div className="topicwrapper">
                {activeTopics &&
                  activeTopics.map((topic, i) => {
                    return (
                      <div className="topicbox">
                        <a href={`${topic.url}?id=${userId}`}>
                          <p>{topic.topic_name}</p>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col text-center">
            <h4>Last 3 Quiz Results</h4>
            {results}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DashboardContainer;
