import React, { useState } from "react";
import "./sidebar.css";
import courses from "../../static/data";

const SideBar = () => {

  const [activeTopic, setActiveTopic] = useState(null);
  return (
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
              <h5 className="card-title">User name</h5>
              <h6 className="card-subtitle mb-2 text-muted">Update Profile</h6>
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
                return (
                  <li key={i} className="list-group-item">
                    {course.course_name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
