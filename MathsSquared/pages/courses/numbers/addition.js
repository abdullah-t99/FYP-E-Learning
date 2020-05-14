import React, { useState } from "react";
import Hero from "../../../components/common/hero/index";
import { DefaultLayout } from "../../../components/layout/index";
import Router from "next/router";
import YouTube from "react-youtube";
//import ADDWORKSHEET from "../../../static/worksheets/NUMBERS/ADDITION/ADDWORKSHEET.pdf";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40,
  },
};

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const addition = ({ id }) => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero title="Addition" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 style={{ color: "#FC9246" }}>What is Addition</h3>
              <div className="addIntro">
                <p>
                  Addition is one of the four basic operation of arithmetic with
                  the others being subtraction, multiplication and division.
                  Addition is bringing two or more numbers (or things) together
                  to make a new total.
                </p>
                <h3 style={{ color: "#FC9246" }}>Other names</h3>
                <p>
                  For addition, there is many names to which it can go by such
                  as 'Sum', 'Plus', 'Total', 'Increase'.
                </p>
              </div>
            </div>
          </div>
          <h3 style={{ color: "#FC9246" }}>Visual, Numerical and Text</h3>
          <div className="row">
            <div className="col-lg-2 text-center" />
            <div className="col-lg-8 text-center">
              <div style={{ marginTop: "20px" }}>
                <table className="table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          Here there is 1 ball added to another ball making it 2
                          balls in total.
                        </p>
                      </td>
                      <td>
                        <img src="/static/images/add-object.jpg" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Using numericals it is:</p>
                      </td>
                      <td>
                        <b>1 + 1 = 2</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>and in words it is: "One plus one equals two"</p>
                      </td>
                      <td>
                        <p>"One plus one equals two"</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-1 text-center" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h5 className="col-lg-12 text-center">Example</h5>
              <div className="addIntro">
                <p>
                  When we add <b>2</b> and <b>4</b> together, we will get{" "}
                  <b>6 </b>
                  we can write it like this as: <b>2 + 4 = 6</b>
                </p>
                <p> Now here is a question for you to try! </p>
                <b>Try this</b>
                <div className="text-center">
                  <p>For this, write down what you think the answer is</p>
                  <b>7 + 5</b>
                  <div className="row align-items-center justify-content-center">
                    <p>You should get:</p>
                    <div id="DivForHoverItem">
                      <div id="HiddenText">
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </div>
                <b>Question for you!</b>
                <div className="text-center">
                  <p>
                    Write down the answer using <b>numerals</b>
                  </p>
                  <img src="/static/images/add-4-3.jpg" />
                  <label>The answer is:</label>
                  <input type="text" value="7" hidden />
                  <input
                    name="intextanswer"
                    type="text"
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <h1>
                    {answer === "7"
                      ? "Well done!"
                      : answer > 0 && answer != 7
                      ? "try again"
                      : null}
                  </h1>
                </div>
                <br />
                <h3 style={{ color: "#FC9246" }}>Swapping Places</h3>
                <br />
                <p>
                  When it comes to addition, the position of the numbers doesn't
                  matter.Swapping the numbers that we are adding, we will still
                  get the same result. This is the same when we are adding with
                  2 or more numbers.
                </p>
                <div className="text-center">
                  <img src="/static/images/add-3-2.jpg" />
                  <p>which is the same as...</p>
                  <img src="/static/images/add-2-3.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <br />
              <br />
              <div className="row align-items-center justify-content-center">
                <div className="card text-white bg-warning mb-3">
                  <div className="card-header">
                    <h6>More Examples</h6>
                  </div>
                  <div className="card-body">
                    <p>
                      8 + 3 = <font color="#ed7a00"> 3 + 8 </font> = 11
                    </p>
                    <p>
                      56 + 6 = <font color="#ed7a00"> 6 + 56 </font> = 62
                    </p>
                    <p>
                      102 + 8 = <font color="#ed7a00"> 8 + 102 </font> = 110
                    </p>
                  </div>
                </div>
              </div>
              <h3 style={{ color: "#FC9246" }}>
                Addition using the column method
              </h3>
              <h5>What is the column method</h5>
              <p>
                The column method is a mathematical method of calculation where
                the numbers to be added or subtracted are set out above one
                another in columns. The calculation is done by ‘carrying’ and
                ‘borrowing’ numbers from column to column.
              </p>
              <h5>How to do Column Addition</h5>
              <p>
                The numbers to be added together are written down one on top of
                the other so that the units, tens, and hundreds etc of each
                number are aligned. For example, adding 23 to 67 the 7 and 3 are
                aligned since they are the units, and the 2 and the 6 are
                aligned as they are the tens.
              </p>
              <div className="text-center">
                <h6>EXAMPLE</h6>
                <div className="pt1">
                  <img src="/static/images/pt1.png" />

                  <hr />
                  <p>You first begin by adding the 1's column:</p>
                  <img src="/static/images/pt2.png" />
                  <p>
                    9 + 0 = <b> 9</b> so you enter <b>9</b> in the 1's column.
                  </p>
                  <img src="/static/images/pt3.png" />
                  <hr />
                  <p>Next, you begin to add the 10's column:</p>
                  <img src="/static/images/pt4.png" />
                  <p>
                    3 + 5 = <b>8</b> so you enter <b>8</b> in the 10's column.
                  </p>
                  <img src="/static/images/pt5.png" />
                  <hr />
                  <p>
                    So the final answer is <b>89</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <YouTube videoId="jmIM5txH0oM" opts={opts} />
            </div>
          </div>
          <br />

          <h3 style={{ color: "#FC9246" }}>A quiz!</h3>
          <p>If you are ready to do a quiz click the link below!</p>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a
                href={`/courses/numbers/additionquiz?id=${id}`}
                style={{ fontSize: "x-large" }}
              >
                Ready to take the quiz?
              </a>
            </div>
          </div>
          <h3 style={{ color: "#FC9246" }}>Worksheets</h3>
          <p>
            If you want to do more work to master your skills, download some
            worksheets down below with the answers to check your solutions.
          </p>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a
                href="../../../static/worksheets/NUMBERS/ADDITION/AddWorksheets.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Addition worksheet
              </a>
            </div>
            <div className="col-lg-12 text-center">
              <a
                href="../../../static/worksheets/NUMBERS/ADDITION/AddAnswers.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Addition worksheet answers
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

addition.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default addition;
