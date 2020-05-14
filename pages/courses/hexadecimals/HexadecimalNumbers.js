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

const hexadecimalNumbers = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero title="Hexadecimal Numbers" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What's a Hexadecimal</h3>
        </div>
        <p>
          The hexadecimal numeral system, often shortened to "hex", is a numeral
          system made up of 16 symbols (base 16). The standard numeral system is
          called decimal (base 10) and uses ten symbols:
          <b> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 </b>
          Hexadecimal uses the decimal numbers and six extra symbols which are:
          <b>A, B, C, D, E, F.</b> Here's what each symbol represent down below:
        </p>
        <table width="90%" border="0" align="center">
          <tbody>
            <tr>
              <th>Hexadecimal:</th>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
              <td>F</td>
            </tr>
            <tr>
              <th width="120">Decimal:</th>
              <td style={{ width: "21px" }}>0</td>
              <td style={{ width: "21px" }}>1</td>
              <td style={{ width: "21px" }}>2</td>
              <td style={{ width: "21px" }}>3</td>
              <td style={{ width: "21px" }}>4</td>
              <td style={{ width: "21px" }}>5</td>
              <td style={{ width: "21px" }}>6</td>
              <td style={{ width: "21px" }}>7</td>
              <td style={{ width: "21px" }}>8</td>
              <td style={{ width: "21px" }}>9</td>
              <td style={{ width: "21px" }}>10</td>
              <td style={{ width: "21px" }}>11</td>
              <td style={{ width: "21px" }}>12</td>
              <td style={{ width: "21px" }}>13</td>
              <td style={{ width: "21px" }}>14</td>
              <td style={{ width: "21px" }}>15</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h5>Subscripts</h5>
        <p>
          Decimal and hexadecimal have 10 digits in common, so they can create a
          lot of similar-looking numbers. But 10 in hex is a wholly different
          number from that in decimal. In fact hex 10 is equivalent to decimal
          16. We need a way to explicitly state whether a number we're talking
          about is base 10 or base 16 (or base 2). Enter base subscripts:
        </p>
        <p className="text-center" style={{ fontSize: "xx-large" }}>
          <b>
            16<sub>10</sub> =
          </b>
          <b style={{ color: "orange" }}>
            10<sub>16</sub>
          </b>
        </p>
        <p className="text-center">
          Hexadecimal 10, indicated by a subscript 16, is equivalent to decimal
          16 (notice the subscript 10).
        </p>

        <h5>Counting in Hex</h5>
        <p>
          Counting in hex is a lot like counting in decimal, except there are
          six more digits to deal with. Once a digit place becomes greater than
          "F", you roll that place over to "0", and increment the digit to the
          left by 1.
        </p>
        <p>
          And after that position reaches <b>F</b>, we do the same thing, and so
          on.
        </p>
        <p>Every time we move left, every number place is 16 times bigger.</p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example</b>
          <p>What is the decimal value of the hexadecimal number "7DE"</p>
        </div>
        <br />
        <div
          className="paddingExample"
          style={{ backgroundColor: "#dedede", border: "solid" }}
        >
          <p>7DE is a hex number</p>
          <p>
            7DE = (7 * 16<sup>2</sup>) + (13 * 16<sup>1</sup>) + (14 * 16
            <sup>0</sup>)
          </p>
          <p>7DE = (7 * 256) + (13 * 16) + (14 * 1) </p>
          <p>7DE = 1792 + 208 + 14 </p>
          <p className="text-center">
            <b>7DE = 2014</b> (in decimal number)
          </p>
          <br />
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 2</b>
          <p>What is the decimal value of the hexadecimal number "D1CE"</p>
        </div>
        <br />
        <div
          className="paddingExample"
          style={{ backgroundColor: "#dedede", border: "solid" }}
        >
          <br />
          <img
            src="/static/images/hex-example.gif"
            style={{ marginLeft: "250px" }}
          />

          <p className="text-center">= 53,248 + 256 + 192 + 14</p>
          <p className="text-center">
            = <b>53,710</b> in Decimal
          </p>
          <br />
        </div>
        <br />
        <h5>Hexadecimals with decimals</h5>
        <p>
          Numbers can be placed to the left or right of the point, to show
          values greater than one or less than one:
        </p>
        <div style={{ marginLeft: "50px" }}>
          <p>The number just to the left of the point is a whole number.</p>
          <p>
            As we move left, every number place is <b>16 times bigger.</b>
          </p>
          <p>
            The first digit on the right of the point means
            <b> sixteenths (1/16).</b>
          </p>
          <p>
            As we move further right, every number place is
            <b> 16 times smaller</b> (one sixteenth as big).
          </p>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 3</b>
          <p>What is the decimal value of the hexadecimal number "2AF.1D"</p>
        </div>
        <br />
        <div
          className="paddingExample"
          style={{ backgroundColor: "#dedede", border: "solid" }}
        >
          <br />
          <p className="text-center">
            2AF.1D = (2 × 16²) + (10 × 16¹) + (15 × 16⁰) + (1 × 16⁻¹) + (13 ×
            16⁻²)
          </p>
          <p className="text-center">
            (2 × 16²) + (10 × 16¹) + (15 × 16⁰) + (1 ×
            <div class="frac">
              <span>1</span>
              <span class="symbol">/</span>
              <span class="bottom">16</span>
            </div>
            ) + (13 ×{" "}
            <div class="frac">
              <span>1</span>
              <span class="symbol">/</span>
              <span class="bottom">16 x 16</span>
            </div>
            )
            <br />
            <p className="text-center" style={{ marginTop: "20px" }}>
              <b>2AF.1D = 687.11328125</b>
            </p>
          </p>
          <br />
        </div>
        <br />
        <p>Let's go through one more example:</p>
        <br />
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <h5>Example 4</h5>
          <p>What is 4B5 as a decimal </p>
        </div>
        <br />
        <div>
          <ul>
            <li>The "6" is in the "16×16" position, so that means 6 ×16×16</li>
            <li>The "A" (10) is in the "16" position, so that means 10 ×16</li>
            <li>The "2" is in the "1" position so that means 2.</li>
            <li>Answer: 4B5 = 6×16×16 + 10×16 + 5 (=1698) in Decimal</li>
          </ul>
        </div>
        <br />
        <h3 style={{ color: "#FC9246" }}>How to Hexadecimals to Binary</h3>
        <p>
          Converting from hex to binary is straightforward since hexadecimal
          numbers are simplified versions of binary strings. You just need to
          remember that each hex value will produce four binary digits. Just
          follow these steps:
        </p>
        <br />
        <p>
          <b>Step 1: </b>Write down the hex number. If there are any, change the
          hex values represented by letters to their decimal equivalents.
        </p>
        <p>
          <b>Step 2: </b>Each hex digit represents four binary digits and
          therefore is equal to a power of 2. The rightmost digit equals to 2
          <sup>0</sup>
          (1), the next one equals to 2<sup>1</sup> (2), the next one equals to
          2<sup>2</sup> (4) and the leftmost one equals to 2<sup>3</sup> (8).
          Write these numbers (8, 4, 2 and 1) below the hex values.
        </p>
        <p>
          <b>Step 3: </b>Determine which powers of two (8, 4, 2 or 1) sum up to
          your hex digits. For example, if one of your hex values is 10, this
          means 8 and 2 sum up to 10 (4 and 1 are not used). If your hex number
          is 2, only 2 is used; 8, 4 and 1 are not.
        </p>
        <p>
          <b>Step 4: </b>Write down 1 below those 8, 4, 2 and 1’s that are used
          to add up that number. Write down 0 below those that are not used.
        </p>
        <p>
          <b>Step 5: </b>Read the 1’s and 0’s from left to right to get the
          binary equivalent of the given hex number.
        </p>
        <p>Lets go through some examples:</p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example</b>
          <p>What's 2C1 in binary</p>
        </div>
        <br />
        <img
          src="/static/images/hextobinary.png"
          style={{ marginLeft: "308px", width: "290px" }}
        />
        <p className="text-center">
          So (2C1)<sub>16</sub> = (1011000001)<sub>2</sub>
        </p>

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 2</b>
          <p>What's 4FA in binary</p>
        </div>
        <img
          src="/static/images/hextobinary2.png"
          style={{ marginLeft: "290px", width: "330px" }}
        />
        <p className="text-center">
          So (4FA)<sub>16</sub> = (10011111010)<sub>2</sub>
        </p>
        <br />
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 3</b>
          <p>What's 9AC in binary</p>
        </div>
        <br />

        <div className="text-center">
          <label>The answer is:</label>
          <input type="text" value="100110101100" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "100110101100"
              ? "Well done!"
              : answer > 0 && answer != 100110101100
              ? "try again"
              : null}
          </h1>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 3</b>
          <p>What's 9AC in binary</p>
        </div>
        <br />

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                <p>11010</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="4EJay-6Bioo" opts={opts} />
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
              href="../../../static/worksheets/HEXADECIMAL/TODECIMAL.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Hexadecimals to a Decimal worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/HEXADECIMAL/TODECIMALANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Hexadecimals to a Decimal answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default hexadecimalNumbers;
