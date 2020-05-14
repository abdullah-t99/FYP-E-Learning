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

const percentagesFractions = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero
        title="Converting Percents to Fractions"
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
            <h3 style={{ color: "#FC9246" }}>Percentages to Fractions</h3>
            <p>
              Converting percents to fractions is fairly straightforward.
              Remember that the word percent means “out of 100.” So changing
              percents to fractions naturally involves the number 100.
            </p>
            <b>
              To convert a percentage into a fraction, do the following steps:
            </b>
            <br />
            <br />
            <p style={{ paddingLeft: "60px" }}>
              Step 1: Use the number in the percent as your numerator (top
              number) and the number 100 as your denominator (bottom number):
            </p>
            <p style={{ paddingLeft: "60px" }}>
              Step 2: If the percent is not a whole number, then multiply both
              top and bottom by 10 for every number after the decimal point.
              (For example, if there is one number after the decimal point, then
              use 10, if there are two then use 100 and so on.)
            </p>
            <p style={{ paddingLeft: "60px" }}>
              Step 3: Simplify the fraction if possible.
            </p>
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              {" "}
              <h5>Example</h5>
              <p>Convert 29% as a fraction</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                <b>Step 1: </b> Begin by writing it down as a fraction.
              </p>
              <div class="frac" style={{ paddingLeft: "360px" }}>
                <span>29</span>
                <span class="symbol">/</span>
                <span class="bottom">100</span>
              </div>
              <p className="paddingExample">
                <b>Step 2:</b> There are no decimals so you can attempt to
                simplify.
              </p>
              <p className="paddingExample">
                <b>Step 3:</b> As there are no common factors, the fraction
                cannot be simplified any further.
              </p>
              <p className="paddingExample">
                Answer is:
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>29</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </p>
            </div>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              {" "}
              <h5>Example 2</h5>
              <p>Convert 75% as a fraction</p>
            </div>
            <br />

            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                <b>Step 1:</b> Begin by writing it down as a fraction.
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>75</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </p>
              <p className="paddingExample">
                <b>Step 2:</b> As there are no decimals, you can attempt to
                simplify straight away..
              </p>
              <p className="paddingExample">
                <b>Step 3:</b> Next, we look for the highest common factor. I
                can see that 5 will go into both numbers. There may be higher
                numbers but if you divide the highest number you know, you can
                break it down further.
              </p>
              <p className="paddingExample">
                This leaves us with:
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>15</span>
                  <span class="symbol">/</span>
                  <span class="bottom">20</span>
                </div>
              </p>
              <p className="paddingExample">
                This also has a comon factor of 5 as well so we divide it by 5
                again leaving us with:
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>3</span>
                  <span class="symbol">/</span>
                  <span class="bottom">4</span>
                </div>
              </p>
            </div>

            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              {" "}
              <h5>Example 3</h5>
              <p>Convert 62.5% as a fraction</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                <b>Step 1:</b> Begin by writing it down as a fraction.
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>62.5</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </p>
              <p className="paddingExample">
                <b>Step 2:</b> As the numerator is a decimal point, we make it
                into an integer. We do this by multiplying both the numerator
                and denominator (top and bottom numbers) by 10. This is because
                there is only 1 digit after the decimal point. This leaves us
                with:
              </p>
              <div class="frac" style={{ paddingLeft: "350px" }}>
                <span>625</span>
                <span class="symbol">/</span>
                <span class="bottom">1000</span>
              </div>
              <p className="paddingExample">
                <b>Step 3:</b> We now simplify the fraction. The highest number
                that i can see that will go into both numbers is 25.
              </p>
              <p className="paddingExample">
                This leaves us with:
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>25</span>
                  <span class="symbol">/</span>
                  <span class="bottom">40</span>
                </div>
              </p>
              <p className="paddingExample">
                We can then see that this fraction has a common factor of 5 so
                we divide both numbers by 5 leaving us with:
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>5</span>
                  <span class="symbol">/</span>
                  <span class="bottom">8</span>
                </div>
                <p>
                  This is the smallest we can get the fraction so we have
                  simplifed <sup>62.5</sup>&frasl;<sub>100</sub> to <sup>5</sup>
                  &frasl;
                  <sub>8</sub>.
                </p>
              </p>
            </div>
            <br />
            <p>
              To see what the highest common was, we simply multiply the numbers
              we used to divide the fractions. In this example we used 25 and 5.
              so we do 25 x 5 = 125.
            </p>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              {" "}
              <h5>Example 4</h5>
              <p>Convert 125% as a fraction</p>
            </div>
            <br />
            <div style={{ backgroundColor: "#dedede", border: "solid" }}>
              <p className="paddingExample">
                <b>Step 1:</b> Begin by writing it down as a fraction. As it's
                over 100%, we know that the answer will be over 1 and that the
                numerator will be greater than the denominator.
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>125</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </p>
              <p className="paddingExample">
                <b>Step 2:</b> As there is no decimal point, we can go straight
                to step 3.
              </p>
              <p className="paddingExample">
                <b>Step 3:</b> We now simplify the fraction. The highest number
                that I can see that will go into both numbers is 25.
              </p>
              <p className="paddingExample">
                This leaves us with:
                <br />
                <div class="frac" style={{ paddingLeft: "350px" }}>
                  <span>5</span>
                  <span class="symbol">/</span>
                  <span class="bottom">4</span>
                </div>
              </p>
              <div style={{ paddingLeft: "300px" }}>
                <p className="paddingExample">
                  Or 1<sup>1</sup>&frasl;<sub>4</sub> as a mixed fraction.
                </p>
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <h5>Example 5</h5>
          <p>Convert 180% as a fraction into its simpliest form (X / Y)</p>
        </div>
        <br />

        <div className="text-center">
          <label>The answer is:</label>
          <input type="text" value="9/5" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "9/5"
              ? "Well done!"
              : answer > 0 && answer != 9 / 5
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
          <h5>Example 6</h5>
          <p>Convert 72% as a fraction into its simpliest form (X / Y)</p>
        </div>
        <br />

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                <div class="frac">
                  <span>18</span>
                  <span class="symbol">/</span>
                  <span class="bottom">25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="5ZHccsyr_JI" opts={opts} />
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
              href="../../../static/worksheets/PERCENTAGES/TOFRACTION.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Percentages to Fractions worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/PERCENTAGES/TOFRACTIONANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Percentages to Fractions answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default percentagesFractions;
