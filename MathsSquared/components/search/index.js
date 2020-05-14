// import React, { useEffect, useState } from "react";
// import courses from "../../static/data";

// const Search = ({ items }) => {
//   const [searchString, setSearchString] = useState("");
//   const [courses, setCourses] = useState([]);
//   const [hideResults, setHideResults] = useState(true);

//   useEffect(() => {
//     setCourses(items);
//     if (searchString === "" || null) {
//       setHideResults(true);
//     }
//   });

//   const handleChange = () => {
//     setSearchString(e.target.value);
//     hideResults(false);
//   };

//   //const _courses = courses;
//   const search = searchString.trim().toLowerCase();

//   if (search.length > 0) {
//     courses.filter(function(course) {
//       return course.course_name.toLowerCase().match(search);
//     });
//   }

//   return (
//     <>
//       <input
//         type="text"
//         className="flipkart-navbar-input col-lg-11"
//         value={searchString}
//         onChange={handleChange()}
//         placeholder="Search for Courses, Topics and more"
//       />
//       <button className="flipkart-navbar-button col-lg-1">
//         <svg width="15px" height="15px">
//           <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
//         </svg>
//       </button>
//       {hideResults && (
//         <div className="row">
//           <div
//             className="col-lg-11"
//             style={{
//               background: "lightgrey",
//               width: "745px",
//               marginLeft: "15px"
//             }}
//           >
//             <ul>
//               {Object.keys(courses).map(l => {
//                 return <li>{l.course_name}</li>;
//               })}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Search;
import React from "react";
import courses from "../../static/data";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      courses: [],
      hideResults: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      courses: courses
    });
    // this.refs.search.focus();
  }

  handleChange(e) {
    this.setState({
      searchString: e.target.value,
      hideResults: false
    });
  }

  render() {
    let _courses = this.state.courses;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _courses = _courses.filter(function(course) {
        return course.course_name.toLowerCase().match(search);
      });
    }

    // if(this.state.searchString === '' || null) {
    //     this.setState({
    //         hideResults: true
    //     })
    // }

    return (
      <>
        <input
          type="text"
          className="flipkart-navbar-input col-lg-11"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Search for Courses, Topics and more"
        />
        <button className="flipkart-navbar-button col-lg-1">
          <svg width="15px" height="15px">
            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 " />
          </svg>
        </button>
        {!this.state.hideResults && (
          <div className="row">
            <div
              className="col-lg-11"
              style={{
                background: "lightgrey",
                width: "745px",
                marginLeft: "15px"
              }}
            >
              <ul style={{ listStyleType: "none", margin: "0" }}>
                {_courses.map(l => {
                  return (
                    <>
                      <li style={{ padding: "10px" }}>{l.course_name}</li>
                      <ul>
                        {l.topics.map(topic => {
                          return (
                            <li style={{ padding: "10px" }}>
                              <a href={topic.url}>{topic.topic_name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}
