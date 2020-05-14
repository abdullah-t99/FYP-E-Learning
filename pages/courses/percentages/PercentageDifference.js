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

const percentages = () => {
  const [answer, setAnswer] = useState("");
  return (
    <DefaultLayout>
      <Hero title="Percentage Difference" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is percentage difference</h3>
          <div className="col-lg-12">
            <p>
              Percentage difference is the <b>difference</b> between two values
              divided by the<b> average</b> of the two values. It's shown as a
              percentage.
            </p>
            <p>Difference means to subtract one value from another.</p>
            <p className="col-lg-12 text-center">
              <u>
                <b>Example</b>
              </u>
            </p>
            <div
              className="text-center"
              style={{ backgroundColor: "#dedede", border: "solid" }}
            >
              <p>John sold 15 tickets, and Dwayne sold 25</p>
              <p>The difference between 25 and 15 is: 25 − 15 = 10</p>
            </div>
            <p>Average is the value halfway between:</p>
            <div style={{ paddingLeft: "250px" }}>
              Average =
              <div className="frac" style={{ paddingLeft: "10px" }}>
                <span>first value + second value</span>
                <span className="symbol">/</span>
                <span className="bottom">2</span>
              </div>
            </div>
            <p>Example continued</p>
            <div
              className="text-center"
              style={{ backgroundColor: "#dedede", border: "solid" }}
            >
              <p>The average of 25 and 15 is:</p>
              <p>(25 + 15) / 2 = 40/2 = 20</p>
            </div>
            <p>We then use these calculation to calculate the difference so:</p>
            <div
              className="text-center"
              style={{ backgroundColor: "#dedede", border: "solid" }}
            >
              <p>
                Difference is 25 - 15 = <b>10</b>
              </p>
              <p>Average is (25 + 15) / 2 = 20</p>
              <p>10 as a percentage of 20 is:</p>
              <div className="frac" style={{ paddingLeft: "10px" }}>
                <span>10</span>
                <span className="symbol">/</span>
                <span className="bottom">20</span>
              </div>{" "}
              x 100% = <b>50%</b>
            </div>
            <br />
            <h5>When should it be used?</h5>
            <p>
              Percentage difference should be used when both values have the
              same meaning. For example, the weight of two people.
            </p>
            <p>Example continued:</p>
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p style={{ marginLeft: "29px" }}>
                If we use "15" we get 10/15 = 66.66...%
              </p>
              <p style={{ marginLeft: "29px" }}>
                If we use "25" we get 10/25 = 40%
              </p>
              <p style={{ marginLeft: "29px" }}>But which one should we use?</p>
              <p style={{ marginLeft: "29px" }}>
                So it is best to choose a value halfway between so there is no
                confusion.
              </p>
            </div>
            <br />
            <h5>What if the difference is negative?</h5>
            <p>
              What we simply do is ignore the minus sign. This is because we
              can't see which value is more important.
            </p>
            <div
              className="ExampleBoarder text-center"
              style={{ width: "310px", marginLeft: "259px" }}
            >
              <b>Example</b>
              <p>
                John lives 8 miles away whereas Abdullah lives 12 miles away
              </p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p style={{ marginLeft: "29px" }}>The difference is:</p>
              <p className="text-center" style={{ marginLeft: "29px" }}>
                <b>8 - 12 = -4</b>
              </p>
              <p style={{ marginLeft: "29px" }}>
                Here we ignore the minus sign as say the difference is:
                <b> 4.</b>
              </p>
              <p className="text-center">
                We could have done the calculation as 12 − 8 = 4 anyway, as John
                and Abdullah are equally important!
              </p>
              <p style={{ marginLeft: "29px" }}>The average is:</p>
              <p className="text-center">
                {" "}
                (8+12)/2 = <b>10</b>
              </p>
              <p style={{ marginLeft: "29px" }}>Percentage difference is:</p>
              <p className="text-center" style={{ paddingBottom: "25px" }}>
                (4/10) x 100% = <b>40%</b>
              </p>
            </div>
            <h5>How to calculate</h5>
            <div className="D2PIntro" style={{ paddingLeft: "15px" }}>
              <p>
                <b>Step 1: </b>Calculate the <b>difference</b> (subtract values
                from eachother) ingoring any negative signs.
              </p>
              <p>
                <b>Step 2: </b>Calculate the <b>average</b>(add the values and
                divide by how many values you have.)
              </p>
              <p>
                <b>Step 3: </b> <b>Divide</b> the difference by the average.
              </p>
              <p>
                <b>Step 4:</b> Convert it to a <b>percentage</b> by multiplying
                by 100.
              </p>
            </div>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "396px", marginLeft: "220px" }}
            >
              <h5>Example</h5>
              <p>
                There are 144 people in one room and 120 in another room. What's
                the percentage difference?
              </p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p style={{ marginLeft: "29px" }}>The difference is:</p>
              <p className="text-center" style={{ marginLeft: "29px" }}>
                <b>144 - 120 = 24</b>
              </p>

              <p style={{ marginLeft: "29px" }}>The average is:</p>
              <p className="text-center">
                {" "}
                (144+120)/2 = <b>132</b>
              </p>
              <p style={{ marginLeft: "29px" }}>Percentage difference is:</p>
              <p className="text-center" style={{ paddingBottom: "25px" }}>
                (24/132) x 100% = <b>18.1818...%</b>
              </p>
              <p style={{ marginLeft: "29px" }}>
                So the percentage difference is: <b>18.18%</b>
              </p>
            </div>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "396px", marginLeft: "220px" }}
            >
              <h5>Example</h5>
              <p>
                There are 280 cars in a BMW showroom in one room and 186 in
                another room. What's the percentage difference? (3 Decimal
                Places)
              </p>
            </div>
            <br />

            <div className="text-center">
              <label>The answer is:</label>
              <input type="text" value="40.343" hidden />
              <input
                name="intextanswer"
                type="text"
                onChange={(e) => setAnswer(e.target.value)}
              />
              <h1>
                {answer === "40.343"
                  ? "Well done!"
                  : answer > 0 && answer != 40.343
                  ? "try again"
                  : null}
              </h1>
            </div>

            <h5>The Formula</h5>
            <p>
              You can also use the formula and put all the numbers in all at
              once.
            </p>
            <img
              className="percentageDiff"
              src="/static/images/percentageDiffFormula.png"
            />
            <br />
            <p style={{ marginTop: "10px" }}>
              The '|' means that any negative values become positive.
            </p>
            <br />
          </div>
        </div>
        <p className="text-center">
          Heres a video on how you find out the percentage of change.
        </p>

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="T6-0MwmCpE8" opts={opts} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default percentages;
