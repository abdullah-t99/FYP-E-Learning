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

const fractionToPercentages = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero
        title="Convert Fractions to a Percentage"
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
            How to convert fractions to a percentage
          </h3>
        </div>
        <p>
          To convert a fraction into a percentage, you will need to know how to
          first convert a fraction into a decimal. This is because getting the
          decimal, you can then convert it into a percentage. To do this you
          divide the top of the fraction by the bottom and then multiply it by
          100.
        </p>
        <h5>Method 1 - Calculator</h5>
        <p>
          The easiest method is to use a calculator as some number maybe to
          complex to divide mentally.
        </p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <p>
            <b>Example</b>
          </p>
          <p>
            What's
            <div class="frac" style={{ padding: "6px" }}>
              <span>5</span>
              <span class="symbol">/</span>
              <span class="bottom">16</span>
            </div>
            as a percentage
          </p>
        </div>
        <br />
        <div
          className="text-center"
          style={{ backgroundColor: "#dedede", border: "solid" }}
        >
          <p>
            In your calculator, type in "5 ÷ 16 = <b>0.3125</b>"
          </p>
          <p>With this answer, multiply it by 100</p>
          <p>
            so 0.3125 x 100 = <b>31.25%</b>
          </p>
          So
          <div class="frac" style={{ padding: "6px" }}>
            <span>5</span>
            <span class="symbol">/</span>
            <span class="bottom">16</span>
          </div>
          = <b>31.25%</b>
          <br />
        </div>
        <br />
        <h5>Method 2 - Move the decimal point</h5>
        <p>
          After dividing, instead of multiplying by 100, you can instead move
          the decimal point 2 places to the right.
        </p>
        <br />
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <p>
            <b>Example 2</b>
          </p>
          <p>
            What's
            <div class="frac" style={{ padding: "6px" }}>
              <span>3</span>
              <span class="symbol">/</span>
              <span class="bottom">4</span>
            </div>
            as a percentage
          </p>
        </div>
        <br />
        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">Divide 3 by 4:</p>
          <p className="text-center" style={{ fontSize: "x-large" }}>
            <b>3 ÷ 4 = 0.75</b>
          </p>
          <p className="paddingExample">
            Move the decimal point 2 places to the right:
          </p>
          <div>
            <p className="text-center" style={{ fontSize: "x-large" }}>
              0.75 <b>→</b> 75
            </p>
          </div>
          <p>
            <p className="paddingExample">So: </p>
            <div className="text-center">
              <div className="frac" style={{ padding: "6px" }}>
                <span>3</span>
                <span class="symbol">/</span>
                <span class="bottom">4</span>
              </div>
              = <b>75%</b>
            </div>
          </p>
          <br />
        </div>
        <br />
        <h5>Method 3 - Make denominator equal 100</h5>
        <p>
          Because percent means 'per 100', you can attempt to change the
          denominator to 100 and make your fraction look like this:
        </p>
        <div class="frac" style={{ marginLeft: "350px" }}>
          <span>
            <b>X</b>
          </span>
          <span class="symbol">
            <b>/</b>
          </span>
          <span class="bottom">
            <b>100</b>
          </span>
        </div>
        <p>To do this, follow these steps:</p>
        <div style={{ marginLeft: "40px" }}>
          <p>
            <b>Step 1: </b> Find a number you can multiply the bottom of the
            fraction by to get 100. To find this number do: (100 ÷ denominator).
          </p>
          <p>
            <b>Step 2: </b> Multiply both top and bottom of the fraction by the
            number.
          </p>
          <p>
            <b>Step 3: </b> Then write down just the top number with the % sign.
          </p>
        </div>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <p>
            <b>Example 3</b>
          </p>
          <p>
            What's
            <div class="frac" style={{ padding: "6px" }}>
              <span>7</span>
              <span class="symbol">/</span>
              <span class="bottom">20</span>
            </div>
            as a percentage
          </p>
        </div>
        <br />
        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            <b>Step 1: </b>We first do 100 ÷ 20 = <b>5</b>. So we multiply the
            top and bottom by 5.
          </p>
          <p className="paddingExample">
            <b>Step 2: </b> Multiply the top and bottom by 5:
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
                  <b>×5</b>
                </td>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr class="large" align="center">
                <div class="frac">
                  <span>7</span>
                  <span class="symbol">/</span>
                  <span class="bottom">20</span>
                </div>
                <td>&nbsp; = &nbsp;</td>
                <div class="frac">
                  <span>35</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr align="center">
                <td colspan="3">
                  <b>×5</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Step 3: </b>Write down 35 as a percentage
          </p>
          <div>
            <p className="text-center" style={{ fontSize: "x-large" }}>
              Answer:
              <b> 35%</b>
            </p>
          </div>

          <br />
        </div>
        <br />
        {/* EXAMPLE 4 */}
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <p>
            <b>Example 4</b>
          </p>
          <p>
            What's
            <div class="frac" style={{ padding: "6px" }}>
              <span>7</span>
              <span class="symbol">/</span>
              <span class="bottom">20</span>
            </div>
            as a percentage
          </p>
        </div>
        <br />
        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            <b>Step 1: </b>We first do 100 ÷ 20 = <b>5</b>. So we multiply the
            top and bottom by 5.
          </p>
          <p className="paddingExample">
            <b>Step 2: </b> Multiply the top and bottom by 5:
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
                  <b>×5</b>
                </td>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr class="large" align="center">
                <div class="frac">
                  <span>7</span>
                  <span class="symbol">/</span>
                  <span class="bottom">20</span>
                </div>
                <td>&nbsp; = &nbsp;</td>
                <div class="frac">
                  <span>35</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr align="center">
                <td colspan="3">
                  <b>×5</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Step 3: </b>Write down 35 as a percentage
          </p>
          <div>
            <p className="text-center" style={{ fontSize: "x-large" }}>
              Answer:
              <b> 35%</b>
            </p>
          </div>

          <br />
        </div>
        <br />
        {/* EXMAPLE 5 */}
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <p>
            <b>Example 5</b>
          </p>
          <p>
            What's
            <div class="frac" style={{ padding: "6px" }}>
              <span>13</span>
              <span class="symbol">/</span>
              <span class="bottom">16</span>
            </div>
            as a percentage
          </p>
        </div>
        <br />
        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            <b>Step 1: </b>We first do 100 ÷ 16 = <b>6.25</b>. So we multiply
            the top and bottom by 6.25.
          </p>
          <p className="paddingExample">
            <b>Step 2: </b> Multiply the top and bottom by 6.25:
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
                  <b>×6.25</b>
                </td>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr class="large" align="center">
                <div class="frac">
                  <span>13</span>
                  <span class="symbol">/</span>
                  <span class="bottom">16</span>
                </div>
                <td>&nbsp; = &nbsp;</td>
                <div class="frac">
                  <span>81.25</span>
                  <span class="symbol">/</span>
                  <span class="bottom">100</span>
                </div>
              </tr>
              <tr align="center">
                <td colspan="3" />
              </tr>
              <tr align="center">
                <td colspan="3">
                  <b>×6.25</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Step 3: </b>Write down 81.25 as a percentage
          </p>
          <div>
            <p className="text-center" style={{ fontSize: "x-large" }}>
              Answer:
              <b> 81.25%</b>
            </p>
          </div>
          <br />
        </div>
        <br />
        <h5>Method 4 - Proportions</h5>
        <p>
          Because a percent is actually a ratio (parts per 100) we can also use
          Proportions to do the conversion. To use this method, it's best to use
          a calculator.
        </p>
        <p>Begin by putting it into this form:</p>
        <div style={{ marginLeft: "280px" }}>
          <div class="frac">
            <span>Top of Fraction</span>
            <span class="symbol">/</span>
            <span class="bottom">Bottom of Fraction</span>
          </div>{" "}
          =
          <div class="frac">
            <span>Percent</span>
            <span class="symbol">/</span>
            <span class="bottom">100</span>
          </div>
        </div>
        <p>
          Then solve this by multiplying both sides by 100, cancelling out the
          fraction on the right giving you only the percentage.
        </p>
        <br />
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 6</b>
          <div className="text-center">
            Convert
            <div class="frac text-center" style={{ margin: "6px" }}>
              <span>7</span>
              <span class="symbol">/</span>
              <span class="bottom">18</span>
            </div>
            to a percentage
          </div>
        </div>
        <br />
        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">First fill in what you know:</p>
          <div style={{ marginLeft: "330px" }}>
            <div class="frac" styl={{ margin: "6px" }}>
              <span>
                <b>7</b>
              </span>
              <span class="symbol">
                <b>/</b>
              </span>
              <span class="bottom">
                <b>18</b>
              </span>
            </div>
            =
            <div class="frac">
              <span>
                <b>Percent</b>
              </span>
              <span class="symbol">
                <b>/</b>
              </span>
              <span class="bottom">
                <b>100</b>
              </span>
            </div>
          </div>
          <br />
          <p className="paddingExample">
            Multiply across the known corners, then divide by the third number.
            The "known corners" are top left and bottom right:
          </p>
          <div>
            <p style={{ marginLeft: "250px" }}>Percentage = (7 x 100) / 18</p>
            <p style={{ marginLeft: "333px" }}>= 700 / 18</p>
            <p style={{ marginLeft: "333px" }}>
              = <b>38.88%</b>
            </p>
          </div>
          <p className="paddingExample">
            So:
            <div class="frac" style={{ margin: "9px" }}>
              <span>7</span>
              <span class="symbol">/</span>
              <span class="bottom">18</span>
            </div>{" "}
            is <b>38.88%</b>
          </p>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 6</b>
          <div className="text-center">
            Convert
            <div class="frac text-center" style={{ margin: "6px" }}>
              <span>22</span>
              <span class="symbol">/</span>
              <span class="bottom">32</span>
            </div>
            to a percentage
          </div>
        </div>
        <br />

        <div className="text-center">
          <label>The answer is:</label>
          <input type="text" value="68,75" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "68.75"
              ? "Well done!"
              : answer > 0 && answer != 68.75
              ? "try again"
              : null}
          </h1>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="8hkRcYWQiFg" opts={opts} />
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
              href="../../../static/worksheets/FRACTIONS/TOPERCENTAGE.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Fractions to Percentages worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/FRACTIONS/TOPERCENTAGEANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Fractions to Percentages answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default fractionToPercentages;
