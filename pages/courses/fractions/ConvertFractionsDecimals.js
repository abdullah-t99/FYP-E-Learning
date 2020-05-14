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

const fractionToDecimal = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero
        title="Convert Fractions to Decimals"
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
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>
            How to convert fractions to decimals
          </h3>
        </div>
        <p>
          A fraction is made up of two parts: a <b>numerator</b> and a
          <b> denominator</b>. It is used to represent how many parts we have
          out of the total number of parts.
        </p>
        <p>
          The line in a fraction that separates the numerator and denominator
          can be rewritten using the <b>division</b> symbol.
        </p>
        <p>
          So, to convert a fraction to a decimal, divide the numerator by the
          denominator. This will give us our answer as a decimal.
        </p>
        <h5>The easiest method</h5>
        <p>
          The easiest method is to use a calculator as some division are far to
          complex and may sometimes gives us some horrible numbers. For example:
        </p>
        <p className="text-center">
          What is
          <div class="frac" style={{ padding: "6px" }}>
            <span>5</span>
            <span class="symbol">/</span>
            <span class="bottom">13</span>
          </div>{" "}
          as a decimal.
        </p>

        <div style={{ backgroundColor: "#dedede" }}>
          <p className="text-center">
            To do <sup>5</sup>&frasl;<sub>13</sub>
          </p>
          <p style={{ marginLeft: "280px" }}>
            In your calculator, type "5 ÷ 13 ="
          </p>
          <p style={{ marginLeft: "30px" }}>The answer is:</p>
          <p style={{ marginLeft: "330px" }}>
            <p>
              <b>1.3&#775;84615&#775;</b>
            </p>
          </p>
          <br />
        </div>
        <br />
        <h5>What if I don't have a calculator?</h5>
        <p>
          If you don't have a calculator, you can still convert fractions to
          decimal but instead, you will need to do long division which is a
          longer process.
        </p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example</b>
          <p className="text-center">
            What is
            <div class="frac" style={{ padding: "6px" }}>
              <span>3</span>
              <span class="symbol">/</span>
              <span class="bottom">8</span>
            </div>
            as a decimal.
          </p>
        </div>
        <br />
        <div style={{ backgroundColor: "#f7f7f7", border: "solid" }}>
          <p className="paddingExample">
            Begin by setting up the long division and begin.
          </p>
          <img
            className="fractionToDecimal"
            src="/static/images/fractionToDecimal.png"
          />
          <br />
          <p style={{ paddingLeft: "10px" }}>
            So we know that
            <div class="frac" style={{ paddingLeft: "10px" }}>
              <span>5</span>
              <span class="symbol">/</span>
              <span class="bottom">8</span>
            </div>
            = <b>0.375</b>
          </p>
          <br />
        </div>
        <br />
        <h5>Another method</h5>
        <p>
          There's another method for which you can do. To do it, follow these
          steps:
        </p>
        <div style={{ marginLeft: "50px" }}>
          <p>
            <b>Step 1: </b> Find a number you can multiply the bottom of the
            fraction to make it 10, 100, 1000, etc.
          </p>
          <p>
            <b>Step 2: </b> Multiply both top and bottom by that number.
          </p>
          <p>
            <b>Step 3: </b> Then write down just the top number, putting the
            decimal point in the correct spot (one space from the right hand
            side for every zero in the bottom number)
          </p>
        </div>
        <p>
          However for some fraction, you may never be able to make the
          denominator into 10,100 etc. If you can't, then use the long division
          method.
        </p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example</b>
          <p className="text-center">
            What is
            <div class="frac" style={{ padding: "6px" }}>
              <span>1</span>
              <span class="symbol">/</span>
              <span class="bottom">4</span>
            </div>
            as a decimal.
          </p>
        </div>
        <br />
        <div style={{ backgroundColor: "#f7f7f7", border: "solid" }}>
          <p className="paddingExample">
            <b>Step 1: </b> Multiply 4 by <b>25</b> to make 100
          </p>
          <p className="paddingExample">
            <b>Step 2: </b> Multiply both numbers by 25:
          </p>
          <table
            align="center"
            border="0"
            cellspacing="5"
            cellpadding="0"
            class="larger"
          >
            <tbody>
              <tr align="center">
                <td colspan="3">
                  <b>×25</b>
                </td>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr class="larger" align="center">
                <div class="frac" style={{ marginRight: "10px" }}>
                  <span>1</span>
                  <span class="symbol">/</span>
                  <span class="bottom">4</span>
                </div>
                <td>&nbsp;=&nbsp;</td>
                <div class="frac" style={{ marginLeft: "10px" }}>
                  <span>25</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr align="center">
                <td colspan="3">
                  <b>×25</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Step 3: </b> Write down 25 with the decimal point 2 spaces from
            the right (because 100 has 2 zeros);
          </p>
          <p className="text-center">
            Answer = <b>0.25</b>
          </p>

          <br />
        </div>
        <br />

        {/* TEST */}

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 2</b>
          <p className="text-center">
            What is
            <div class="frac" style={{ padding: "6px" }}>
              <span>9</span>
              <span class="symbol">/</span>
              <span class="bottom">16</span>
            </div>
            as a decimal.
          </p>
        </div>
        <br />
        <div style={{ backgroundColor: "#f7f7f7", border: "solid" }}>
          <p className="paddingExample">
            <b>Step 1: </b> Multiply 16 by <b>625</b> to make 10,000
          </p>
          <p className="paddingExample">
            <b>Step 2: </b> Multiply both numbers by 625:
          </p>
          <table
            align="center"
            border="0"
            cellspacing="5"
            cellpadding="0"
            class="larger"
          >
            <tbody>
              <tr align="center">
                <td colspan="3">
                  <b>×625</b>
                </td>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr class="larger" align="center">
                <div class="frac" style={{ marginRight: "10px" }}>
                  <span>9</span>
                  <span class="symbol">/</span>
                  <span class="bottom">16</span>
                </div>
                <td>&nbsp;=&nbsp;</td>
                <div class="frac" style={{ marginLeft: "10px" }}>
                  <span>5625</span>
                  <span class="symbol">/</span>
                  <span class="bottom">10000</span>
                </div>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr align="center">
                <td colspan="3">
                  <b>×625</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Step 3: </b> Write down 5625 with the decimal point 4 spaces from
            the right (because 100 has 2 zeros);
          </p>
          <p className="text-center">
            Answer = <b>0.5625</b>
          </p>
          <br />
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 3</b>
          <p className="text-center">
            What is
            <div class="frac" style={{ padding: "6px" }}>
              <span>14</span>
              <span class="symbol">/</span>
              <span class="bottom">20</span>
            </div>
            as a decimal.
          </p>
        </div>
        <br />

        <div className="text-center">
          <label>The answer is:</label>
          <input type="text" value="0.7" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "0.7"
              ? "Well done!"
              : answer > 0 && answer != 0.7
              ? "try again"
              : null}
          </h1>
        </div>

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 4</b>
          <p className="text-center">
            What is
            <div class="frac" style={{ padding: "6px" }}>
              <span>16</span>
              <span class="symbol">/</span>
              <span class="bottom">25</span>
            </div>
            as a decimal.
          </p>
        </div>
        <br />

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                <p>0.64</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="iHEsQVWzzEA" opts={opts} />
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
              href="../../../static/worksheets/FRACTIONS/TODECIMAL.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Fractions to Decimals worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/FRACTIONS/TODECIMALANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Fractions to Decimals answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default fractionToDecimal;
