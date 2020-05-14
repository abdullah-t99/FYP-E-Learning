import React, { useState } from "react";
import Hero from "../../../components/common/hero/index";
import { DefaultLayout } from "../../../components/layout/index";
import Router from "next/router";
import YouTube from "react-youtube";

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

const subtraction = ({ id }) => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero title="Subtraction" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div style={{ margin: "20px" }}>
          <div>
            <div className="col-lg-12">
              <h3 style={{ color: "#FC9246" }}>What is Subtraction</h3>
              <div className="subIntro">
                <p>
                  Subtraction in mathematics means you are taking something away
                  from a group or number of things. When you subtract, what is
                  left in the group becomes less. An example of a subtraction
                  problem is the following: 5 - 3 = 2.
                </p>
                <h4>Other names</h4>
                <p>
                  For subtraction, there is many names to which it can go by
                  such as 'minus', 'take away', 'difference', 'less'.
                </p>
              </div>
              <br />
              <h3 style={{ color: "#FC9246" }}>Methods for subtraction</h3>
              <h5>The diagram method</h5>
              <p>
                There are various methods of subtraction. One method is to use a
                diagram showing what you start with, what you are taking away,
                and what you are left with. For example, the problem 5 - 3 might
                be described with this diagram.
              </p>
              <div className="col-lg-12 text-center">
                <img src="/static/images/numberline.png" />
              </div>
              <p>
                To indicate the problem 5 - 3, an arrow is drawn starting at the
                number 5, moving three units in the direction of the smaller
                numbers, and ending on the final difference 2.
              </p>
              <div className="col-lg-12 text-center">
                <img src="/static/images/numberline-sub.png" />
              </div>
              <p>
                However, if you are subtracting numbers with two or more digits,
                it's best to use the column method where you write the numbers
                on top of eachother so that the same place values are lined up.
              </p>
              <h5>Example</h5>
              <div className="text-center">
                <p>For this, write down what you think the answer is</p>
                <b>9 - 4</b>
                <div className="row align-items-center justify-content-center">
                  <p>You should get:</p>
                  <div id="DivForHoverItem">
                    <div id="HiddenText">
                      <p>3</p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h4>Column subtraction</h4>
              <p>
                If you have large numbers, it's best to use the column method.
                Lets do 57 - 23 as an example.
              </p>
              <div className="col-lg-12 text-center">
                <img src="/static/images/pt1sub.png" />
              </div>
              <p>
                First begin to put the numbers in the correct format. Make sure
                the numbers are on top of eachother where the units, tens,
                hundreds etc are allign as seen above.
              </p>
              <p>
                Next, begin by subtracting the <b>unit column</b> first. In this
                case we have <b>7 - 3 = 4</b> so you write 4 at the bottom of
                the unit column.
              </p>
              <hr />
              <div className="col-lg-12 text-center">
                <img src="/static/images/pt2sub.png" />
              </div>
              <p>
                Next look at the tens column. We have <b>5 - 2 = 3</b> so you
                write 3 at the bottom of the tens column. (This is actually
                <b>50 - 20 = 30 </b> but placed within the tens column we don’t
                need to worry about using the zero as a placeholder)
              </p>
              <hr />
              <div className="col-lg-12 text-center">
                <img src="/static/images/pt3sub.png" />
              </div>
              <p>
                So using the subtraction column method, we have worked out that
                <b> 57 - 23 = 34</b>
              </p>
              <h5>Column subtraction with borrowing</h5>
              <p>
                In some situation, you will have a problem where the top digit
                in any of the columns is smaller than the bottom digit such as
                13 - 5 where 3 is smaller than 5. In these situations, you will
                need to borrow.
              </p>
              <hr />
              <p>
                Tip - You cannot just swap the numbers over and subtract the top
                from the bottom. Lots of people try this, but it won’t give you
                the right answer!
              </p>
              <hr />
              <br />
              <div
                className="ExampleBoarder text-center"
                style={{ width: "160px", marginLeft: "329px" }}
              >
                <h6>
                  <b>EXAMPLE</b>
                </h6>
              </div>
              <p>
                Lets work out <b>62 - 24</b>. Lets first begin to put the
                numbers in column so it better to visualise.
              </p>
              <div className="col-lg-12 text-center">
                <img src="/static/images/pt1borrow.png" />
              </div>
              <p>
                Look at the <b>units</b> column. 2 is less than 4 so we do this
                by borrowing. There are 6 tens or 60 in 62. We simply ‘borrow’
                one of the tens. 60 becomes 60 and then the extra ten is added
                to the 4 units to make 14.
                <br />
                So now we have <b>12 - 4 = 8</b>, so we write 8 at the bottom of
                the unit column.
              </p>
              <hr />
              <div className="col-lg-12 text-center">
                <img src="/static/images/pt2borrow.png" />
              </div>
              <p>
                Now looking at the <b>tens</b> column, we have <b>6 - 2 </b> -1
                <b>= 3</b>, so we write 3 at the bottom of the tens column.
              </p>
              <hr />
              <div className="col-lg-12 text-center">
                <img src="/static/images/pt3borrow.png" />
              </div>
              <p>
                So using the borrowing method for the column method, we have
                worked out that <b>62 - 24 = 38</b>
              </p>
            </div>
          </div>
          <br />

          {/* TEST */}

          <h5>Question for you!</h5>
          <div className="text-center">
            <p>Write down the answer</p>
            <div>
              <img
                src="/static/images/subtractionExample.png"
                style={{ width: "400px" }}
              />
            </div>
            <br />

            <label>The answer is:</label>
            <input type="text" value="7" hidden />
            <input
              name="intextanswer"
              type="text"
              onChange={(e) => setAnswer(e.target.value)}
            />
            <h1>
              {answer === "9"
                ? "Well done!"
                : answer > 0 && answer != 9
                ? "try again"
                : null}
            </h1>
          </div>

          {/* END */}

          <p className="text-center">
            For some tips on how to subrtract numbers where you can avoid
            borrowing, wtatch the numbers below:
          </p>
          <div className="row">
            <div className="col-lg-12 text-center">
              <YouTube videoId="wCw9iuQICy4" opts={opts} />
            </div>
          </div>
          <br />

          <h3 style={{ color: "#FC9246" }}>A quiz!</h3>
          <p>If you are ready to do a quiz click the link below!</p>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a
                href={`/courses/numbers/subtractionquiz?id=${id}`}
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
                href="../../../static/worksheets/NUMBERS/SUBTRACTION/SubtractionWorksheets.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Subtraction worksheet
              </a>
            </div>
            <div className="col-lg-12 text-center">
              <a
                href="../../../static/worksheets/NUMBERS/SUBTRACTION/SubtractionAnswers.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Subtraction worksheet answers
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

subtraction.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default subtraction;
