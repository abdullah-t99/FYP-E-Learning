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

const dividingDecimals = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero title="Dividing Decimals numbers" extraShortBanner centreAllign />
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
              <h3 style={{ color: "#FC9246" }}>Dividing decimals</h3>
              <div className="addIntro">
                <p>
                  To divide decimals, the trick is to get rid of the decimal
                  point from the number with decimals points.
                </p>
                <p>
                  To do this, we can "shift the decimal point" out of the way by
                  multiplying by 10, as many times as we need to. If this is the
                  case, we must do the same thing to both numbers in the
                  division to make they are still equal.
                </p>
                <p>Lets begin with some examples:</p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example</b>
                  </p>
                  <p className="text-center">What's 64 ÷ 0.4</p>
                </div>
                <br />

                <div class="dividingDecimalExample" style={{ border: "solid" }}>
                  <p className="paddingExample">
                    Let's begin by multiplying the 0.4 by 10, which shifts the
                    decimal point out of the way:
                  </p>
                  <p class="so">0.4 × 10 = 4</p>
                  <p className="paddingExample">
                    But we must <b>also</b> do it to the 64:
                  </p>
                  <p class="so">64 × 10 = 640</p>
                  <p className="paddingExample">
                    So 64 ÷ 0.4 has now become 640 ÷ 4 (they are <b>both</b> 10
                    times larger):
                  </p>
                  <p class="center">640 ÷ 4 = 160</p>
                  <p className="paddingExample">And so the final answer is:</p>
                  <p class="center-larger">
                    <b>64 ÷ 0.4 = 160</b>
                  </p>
                </div>

                <p>Just remember, to divide decimal numbers:</p>
                <div className="remember">
                  <p className="text-center" style={{ fontSize: "x-large" }}>
                    <b>
                      Multiply the divisor by as many 10's as necessary until we
                      get a whole number. Remember to multiply the dividend by
                      the same number of 10's.
                    </b>
                  </p>
                </div>

                {/* example 2 */}
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 2</b>
                  </p>
                  <p className="text-center">What's 3.8 ÷ 0.2</p>
                </div>
                <br />

                <div class="dividingDecimalExample" style={{ border: "solid" }}>
                  <p className="paddingExample">
                    Let's begin by multiplying the 0.2 by 10, which shifts the
                    decimal point out of the way:
                  </p>
                  <p class="so">0.2 × 10 = 2</p>
                  <p className="paddingExample">
                    But we must <b>also</b> do it to the 3.8:
                  </p>
                  <p class="so">3.8 × 10 = 38</p>
                  <p className="paddingExample">
                    So 3.8 ÷ 0.2 has now become 38 ÷ 2:
                  </p>
                  <p class="center">38 ÷ 2 = 19</p>
                  <p className="paddingExample">And so the final answer is:</p>
                  <p class="center-larger">
                    <b>3.8 ÷ 0.2 = 19</b>
                  </p>
                </div>

                <p>For harder questions, we may have to use long division.</p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 3</b>
                  </p>
                  <p className="text-center">What's 0.539 ÷ 0.11</p>
                </div>
                <br />
                <div class="dividingDecimalExample" style={{ border: "solid" }}>
                  <p className="paddingExample">
                    Let's begin by multiplying the 0.11 by 10 twice, which
                    shifts the decimal point out of the way:
                  </p>
                  <p class="so">0.11 × 10 x 10 = 11</p>
                  <p className="paddingExample">We do the same for 0.0539:</p>
                  <p class="so">0.0539 × 10 x 10 = 53.9</p>
                  <p className="paddingExample">
                    We keep it as 53.9 as dividing '539 by 110' will be too
                    difficult to divide by long division. Instead, we ignore the
                    decimal point in the dividend so long as we remember to put
                    it back later. First we do the calculation without the
                    decimal point:
                  </p>
                  <img className="longdiv" src="/static/images/Picture1.png" />
                  <p className="paddingExample">
                    Now put the decimal point in the answer directly above the
                    decimal point in the dividend:
                  </p>
                  <img
                    className="longdivision"
                    src="/static/images/Picture2.png"
                  />
                  <br />
                  <p className="paddingExample">
                    So 0.539 ÷ 0.11 = <b>4.9</b>
                  </p>
                </div>
                <br />
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 4</b>
                  </p>
                  <p className="text-center">What's 1.53 ÷ 0.25</p>
                </div>
                <br />

                <div className="text-center">
                  <label>The answer is:</label>
                  <input type="text" value="6.12" hidden />
                  <input
                    name="intextanswer"
                    type="text"
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <h1>
                    {answer === "6.12"
                      ? "Well done!"
                      : answer > 0 && answer != 6.12
                      ? "try again"
                      : null}
                  </h1>
                </div>
                <br />

                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 5</b>
                  </p>
                  <p className="text-center">What's 4.05 ÷ 0.06</p>
                </div>
                <br />

                <div className="text-center">
                  <p>Try this out on paper</p>
                  <div className="row align-items-center justify-content-center">
                    <p>You should get:</p>
                    <div id="DivForHoverItem">
                      <div id="HiddenText">
                        <p>67.5</p>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
        <p>
          Here's a video down below for more information on how to divide
          decimals numbers.
        </p>

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="YKfYBNpFJJ4" opts={opts} />
          </div>
        </div>
        <br />

        <h3 style={{ color: "#FC9246" }}>Worksheets</h3>
        <p>
          If you want to do more work to master your skills, download some
          worksheets down below with the answers to check your solutions.
        </p>
        <div className="row">
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/DECIMALS/DIVDINGDECIMALS/WORKSHEET.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Dividing Decimals worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/DECIMALS/DIVDINGDECIMALS/ANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Dividing Decimals answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default dividingDecimals;
