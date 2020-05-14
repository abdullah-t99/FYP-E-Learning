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

const decimalToPercentages = () => {
  const [answer, setAnswer] = useState("");
  return (
    <DefaultLayout>
      <Hero
        title="Converting Decimals to Percentages "
        extraShortBanner
        centreAllign
      />
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
              <h3 style={{ color: "#FC9246" }}>Decimal to Percentages</h3>
              <div className="addIntro">
                <p>
                  Converting a decimal to a percentage is the easiest conversion
                  to do. This is because both a decimal and a percentage is out
                  of 100. To do this conversion, just simply:
                </p>
                <div className="D2PIntro text-center">
                  <p>
                    Multiply the decimal number by <b>100</b> and then put the %
                    in front of it. Simple!
                  </p>
                </div>
                <p style={{ paddingTop: "10px" }}>
                  Lets begin with some examples:
                </p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "259px", marginLeft: "300px" }}
                >
                  <p className="text-center">
                    <b>Example</b>
                  </p>
                  <p className="text-center">Convert 0.548 as a percentage</p>
                </div>
                <br />

                <div style={{ backgroundColor: "#dedede", border: "solid" }}>
                  <p className="paddingExample">First multiply 0.548 by 100:</p>
                  <p className="example548">0.548 x 100 = 54.8</p>

                  <p className="paddingExample">
                    Finally, put the % sign to the number:
                  </p>
                  <p className="example548">
                    0.548 x 100 = <b>12.5%</b>
                  </p>

                  <br />
                </div>
                <p>
                  The easy was of multipying by 100 is to just move the decimal
                  point to the right by 2 places
                </p>
                <div
                  className="ExampleBoarder"
                  style={{ width: "259px", marginLeft: "300px" }}
                >
                  <p className="text-center">
                    <b>Example 2</b>
                  </p>
                  <p className="text-center">Convert 0.3964 as a percentage</p>
                </div>
                <br />

                <div style={{ backgroundColor: "#dedede", border: "solid" }}>
                  <p className="paddingExample">
                    Move the decimal point to the right 2 times:
                  </p>
                  <p className="example548">0.3964 → 3.964 → 39.64</p>

                  <p className="paddingExample">Put the % in:</p>
                  <p className="example548">
                    0.3964 = <b>39.64%</b>
                  </p>
                  <br />
                </div>
                <br />

                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 3</b>
                  </p>
                  <p className="text-center">What's 0.05913 as a percentage</p>
                </div>
                <br />

                <div className="text-center">
                  <label>The answer is:</label>
                  <input type="text" value="5.913" hidden />
                  <input
                    name="intextanswer"
                    type="text"
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <h1>
                    {answer === "5.913"
                      ? "Well done!"
                      : answer > 0 && answer != 5.913
                      ? "try again"
                      : null}
                  </h1>
                </div>
                <br />

                <p>
                  If you have a decimal number which is over 1, then you will
                  need to add zeros on the right.
                </p>

                <div
                  className="ExampleBoarder"
                  style={{ width: "259px", marginLeft: "300px" }}
                >
                  <p className="text-center">
                    <b>Example 4</b>
                  </p>
                  <p className="text-center">Convert 2.6 as a percentage</p>
                </div>
                <br />

                <div style={{ backgroundColor: "#dedede", border: "solid" }}>
                  <p className="paddingExample">
                    Move the decimal point to the right 2 times:
                  </p>
                  <p className="example548">2.6 → 26. → 260.</p>

                  <p className="paddingExample">Put the % in:</p>
                  <p className="example548">
                    2.6 = <b>260%</b>
                  </p>
                  <br />
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
        <p>Here's another method to convert decimals to percentages.</p>

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="s_DA3qW9pjc" opts={opts} />
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
              href="../../../static/worksheets/DECIMALS/DecimalToPercentages/WORKSHEET.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Decimals to Percentages worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/DECIMALS/DecimalToPercentages/ANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Decimals to Percentages answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default decimalToPercentages;
