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

const percentagesDecimals = () => {
  const [answer, setAnswer] = useState("");
  return (
    <DefaultLayout>
      <Hero
        title="Converting Percents to Decimals"
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
        <div>
          <div className="col-lg-12">
            <h3 style={{ color: "#FC9246" }}>Percentages to Decimals</h3>
            <p>
              Knowing how to convert percentages to decimals and back again is a
              valuable math skill and is certainly helpful for understanding
              your finances. Whether you’re making quick estimates in your head,
              using a calculator, or modeling your car loan on a spreadsheet,
              you need to know how decimals and percentages are related.
            </p>
            <p>
              Most interest rates are quoted and advertised in terms of a
              percentage. But if you want to run calculations using those
              numbers, you’ll need to convert to decimal format. There are
              serveral ways to do this.
            </p>
            <h3 style={{ color: "#FC9246" }}>Divide by 100</h3>
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              <h5>Example</h5>
              <p>Convert 75 percent to decimal format.</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                1. Divide 75 by 100 (this can also be written as 75 / 100 or 75
                ÷ 100).
              </p>
              <p className="paddingExample">
                2. The result is 0.75, meaning that 75 percent is the same as
                0.75.
              </p>
            </div>
            <br />

            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              {" "}
              <h5>Example 2</h5>
              <p>Convert 67.5 % to decimal format.</p>
            </div>
            <br />

            <div className="text-center">
              <label>The answer is:</label>
              <input type="text" value="0.675" hidden />
              <input
                name="intextanswer"
                type="text"
                onChange={(e) => setAnswer(e.target.value)}
              />
              <h1>
                {answer === "0.675"
                  ? "Well done!"
                  : answer > 0 && answer != 0.675
                  ? "try again"
                  : null}
              </h1>
            </div>
            <br />

            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              {" "}
              <h5>Example 3</h5>
              <p>Convert 3.5 % to decimal format.</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                1. Divide 3.5 by 100 (this can also be written as 3.5 / 100 or
                3.5 ÷ 100).
              </p>
              <p className="paddingExample">
                2. The result is 0.035, meaning that 3.5% = 0.035.
              </p>
            </div>
            <br />
            <h3 style={{ color: "#FC9246" }}>Move the decimal</h3>
            <p>
              Another way to convert a quoted percentage to decimal format is to
              move the decimal two places to the left. Remember, if you don’t
              see a decimal, just imagine that it’s at the end, or far right
              side, of the number. Imagine that the decimal is followed by two
              zeroes if that helps.
            </p>
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              {" "}
              <h5>Example 4</h5>
              <p>Convert 60% to decimal format.</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">1. 60% is the same as 60.00%</p>
              <p className="paddingExample">
                2. To convert to decimal format, move the decimal two places to
                the left so that it’s on the left of the 6
              </p>
              <p className="paddingExample">3. The result is 0.60 (0.6).</p>
            </div>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              <h5>Harder example</h5>
              <p>Convert 1.125% to decimal format.</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                Move the decimal point two places to the left: 1.25 --> 0.125
                --> 0.0125
              </p>
              <p className="paddingExample">
                This gives us an answer of 1.25% = 0.125.
              </p>
            </div>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              <h5>Example</h5>
              <p>Convert 250% to decimal format.</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                Move the decimal point two places to the left: 250 ➔ 25.0 ➔ 2.5
              </p>
              <p className="paddingExample">
                This gives us an answer of 250% = 2.5.
              </p>
            </div>
          </div>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <h5>Example</h5>
          <p>Convert 1594% to decimal format.</p>
        </div>

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                <p>15.94</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="u5WkQQB70qo" opts={opts} />
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
              href="../../../static/worksheets/PERCENTAGES/TODECIMAL.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Percentages to Decimals worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/PERCENTAGES/TODECIMALANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Percentages to Decimals answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default percentagesDecimals;
