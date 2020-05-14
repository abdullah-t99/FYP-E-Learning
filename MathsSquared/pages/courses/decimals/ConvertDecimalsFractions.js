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

const decimalToFractions = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero
        title="Converting Decimals to Fractions "
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
              <h3 style={{ color: "#FC9246" }}>Decimal to Fractions</h3>
              <div className="addIntro">
                <p>
                  To convert a decimal to a fraction, follow these 3 simple
                  steps:
                </p>
                <div style={{ marginLeft: "35px" }}>
                  <p>
                    <b>Step 1:</b> Write down the decimal divided by 1. Should
                    look like:
                    <div class="frac" style={{ marginLeft: "10px" }}>
                      <span>decimal</span>
                      <span class="symbol">/</span>
                      <span class="bottom">1</span>
                    </div>
                  </p>
                  <p>
                    <b>Step 2: </b> Multiply both the top and bottom by 10 for
                    every number after the decimal point. For example, if
                    there's 2 numbers after the decimal point, multiply by 100.
                  </p>
                  <p>
                    <b>Step 3: </b>Simplify the fraction if possible.
                  </p>
                </div>
                <p>Lets go through some examples.</p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example</b>
                  </p>
                  <p className="text-center">Convert 0.75 as a fraction.</p>
                </div>
                <br />

                <div style={{ backgroundColor: "#dedede", border: "solid" }}>
                  <p className="paddingExample">
                    <b>Step 1: </b> Begin by writing 0.75 as a fraction.
                  </p>
                  <div class="frac" style={{ marginLeft: "300px" }}>
                    <span>0.75</span>
                    <span class="symbol">/</span>
                    <span class="bottom">1</span>
                  </div>
                  <p className="paddingExample">
                    <b>Step 2: </b> Multiply both numbers by 100 as there are
                    two numbers after the decimal point for 0.75
                  </p>
                  <img
                    className="dectofraction"
                    src="/static/images/decimaltofraction.png"
                  />
                  <br />
                  <br />
                  <p style={{ marginLeft: "90px" }}>
                    By multiplying both numbers by 100, they are know whole
                    numbers.
                  </p>
                  <p className="paddingExample">
                    <b>Step 3:</b> Simplify the fraction.
                  </p>
                  <img
                    className="dectofraction2"
                    src="/static/images/decimaltofraction2.png"
                  />
                  <br />
                  <br />
                  <b style={{ marginLeft: "300px" }}>Answer</b>
                  <br />
                  <p style={{ marginLeft: "265px" }}>
                    So 0.75 =
                    <div class="frac" style={{ marginLeft: "5px" }}>
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
                  <p className="text-center">
                    <b>Example 2</b>
                  </p>
                  <p className="text-center">Convert 0.625 as a fraction.</p>
                </div>
                <br />

                <div style={{ backgroundColor: "#dedede", border: "solid" }}>
                  <p className="paddingExample">
                    <b>Step 1: </b> First write 0.625.
                  </p>
                  <div class="frac" style={{ marginLeft: "300px" }}>
                    <span>0.625</span>
                    <span class="symbol">/</span>
                    <span class="bottom">1</span>
                  </div>
                  <p className="paddingExample">
                    <b>Step 2: </b> As there is three numbers after 0.625, you
                    multiply both number's by 1000.
                  </p>
                  <div class="frac" style={{ marginLeft: "300px" }}>
                    <span>625</span>
                    <span class="symbol">/</span>
                    <span class="bottom">1000</span>
                  </div>
                  <br />
                  <br />
                  <p className="paddingExample">
                    <b>Step 3:</b> Finally, simplify the fraction.
                  </p>
                  <img
                    className="dectofraction2"
                    src="/static/images/decimaltofraction3.png"
                  />
                  <br />
                  <br />
                  <b style={{ marginLeft: "300px" }}>Answer</b>
                  <br />
                  <p style={{ marginLeft: "265px" }}>
                    So 0.625 =
                    <div class="frac" style={{ marginLeft: "5px" }}>
                      <span>5</span>
                      <span class="symbol">/</span>
                      <span class="bottom">8</span>
                    </div>
                  </p>
                </div>
                <p>
                  Another potential scenario is when you have a decimal which is
                  over 1. In this case put the whole number aside and bring it
                  back at the end as shown below.
                </p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 3</b>
                  </p>
                  <p className="text-center">Convert 8.35 as a fraction.</p>
                </div>
                <br />

                <div style={{ backgroundColor: "#dedede", border: "solid" }}>
                  <p style={{ marginLeft: "202px" }}>
                    <b>Put the 8 aside and convert 0.35 into a fraction.</b>
                  </p>
                  <p className="paddingExample">
                    <b>Step 1: </b> First write 0.35.
                  </p>
                  <div class="frac" style={{ marginLeft: "300px" }}>
                    <span>0.35</span>
                    <span class="symbol">/</span>
                    <span class="bottom">1</span>
                  </div>
                  <p className="paddingExample">
                    <b>Step 2: </b> As there is two numbers after 0.35, you
                    multiply both number's by 100.
                  </p>
                  <div class="frac" style={{ marginLeft: "300px" }}>
                    <span>35</span>
                    <span class="symbol">/</span>
                    <span class="bottom">100</span>
                  </div>
                  <br />
                  <br />
                  <p className="paddingExample">
                    <b>Step 3:</b> Finally, simplify the fraction.
                  </p>
                  <img
                    className="dectofraction4"
                    src="/static/images/decimaltofraction4.png"
                  />
                  <br />
                  <br />
                  <p style={{ marginLeft: "140px" }}>
                    Now that we have solved 0.35 we now bring the 8 back.
                  </p>
                  <b style={{ marginLeft: "300px" }}>Answer</b>
                  <br />
                  <p style={{ marginLeft: "265px" }}>
                    So 8.35 = 8
                    <div class="frac" style={{ marginLeft: "5px" }}>
                      <span>7</span>
                      <span class="symbol">/</span>
                      <span class="bottom">20</span>
                    </div>
                  </p>
                  <p className="paddingExample">
                    Any number of 1 will make a mixed fraction as it has done
                    with this example.
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <p className="text-center">
            <b>Example 6</b>
          </p>
          <p className="text-center">Whats 9.48 as a fraction</p>
        </div>
        <br />

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                9
                <div class="frac" style={{ marginLeft: "5px" }}>
                  <span>2</span>
                  <span class="symbol">/</span>
                  <span class="bottom">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>
          Here's a video converting decimals into improper and mixed fractions
        </p>

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="m6LYf0BdPKM" opts={opts} />
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
              href="../../../static/worksheets/DECIMALS/DecimalToFraction/WORKSHEET.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Decimals to Fractions worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/DECIMALS/DecimalToFraction/ANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Decimals to Fractions answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default decimalToFractions;
