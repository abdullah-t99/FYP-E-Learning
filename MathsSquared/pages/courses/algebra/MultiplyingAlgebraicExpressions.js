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

const multiplyingAlgebra = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero
        title="Multiplying Algebraic Expressions"
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
          <h3 style={{ color: "#FC9246" }}>How to format</h3>
        </div>
        <h5>A simple puzzle </h5>
        <p>What's the missing number</p>

        <table border="0" width="250" align="center">
          <tbody>
            <tr valign="middle">
              <td align="center" width="50">
                <table
                  border="2"
                  width="35"
                  height="50"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td
                align="center"
                width="50"
                class="huge"
                style={{ fontSize: "x-large" }}
              >
                <b>×</b>
              </td>
              <td
                align="center"
                width="50"
                class="huge"
                style={{ fontSize: "x-large" }}
              >
                <b>3</b>
              </td>
              <td
                align="center"
                width="50"
                class="huge"
                style={{ fontSize: "x-large" }}
              >
                <b>=</b>
              </td>
              <td
                align="center"
                width="50"
                class="huge"
                style={{ fontSize: "x-large" }}
              >
                <b>9</b>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          The answer is 3 because <b>3 x 3 = 9</b>
        </p>
        <p>
          In algebra, we don't leave a blank space if we don't know the value,
          instead we use <b>letters</b> so we write:
        </p>
        <div className="text-center" style={{ fontSize: "x-large" }}>
          <p>
            <b>X x 3 = 9</b>
          </p>
        </div>
        <p>
          But if look above, the letter (X) looks very similar to the
          multiplication sign (x). This can be very confusing to understand.
          Instead, we don't use the multiply symbol (×) between numbers and
          letters. Instead, we write it down like this:
        </p>
        <div className="text-center" style={{ fontSize: "x-large" }}>
          <p>
            <b>3X = 9</b>
          </p>
        </div>
        <p className="text-center">
          We say in english 'three x equal nine' which means 3 x's will make 9.
        </p>
        <p>And so the answer is:</p>
        <p className="text-center" style={{ fontSize: "x-large" }}>
          <b>X = 3</b>
        </p>
        <p>Lets go through an exmaple</p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "200px", marginLeft: "345px" }}
        >
          <b>Example</b>
          <p>5X = 30</p>
        </div>
        <h5>How to solve</h5>
        <p>To solve it, follow these simple steps:</p>
        <ul>
          <li>Work out what you need to get rid of to get X on it's own.</li>
          <li>
            Remove it by doing the opposite (opposite of multiplying is
            division)
          </li>
          <li>Then do that to both sides</li>
        </ul>

        <div className="row">
          <div className="col-lg-2 text-center" />
          <div className="col-lg-8 text-center">
            <div style={{ marginTop: "20px" }}>
              <table className="table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <p>We want to remove the 5</p>
                    </td>
                    <td>
                      <p>
                        <b>5X = 30</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>To remove it, do the opposite by dividing it by 5.</p>
                    </td>
                    <td>
                      <p>
                        5X <b>/ 5</b> = 30
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Do it to both sides.</p>
                    </td>
                    <td>
                      <p>
                        5X / 5 =<b> 30 / 5</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Which is:</p>
                    </td>
                    <td>
                      <p>
                        1X = <b>6</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>So:</p>
                    </td>
                    <td>
                      <p>
                        <b>X = 6</b>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-1 text-center" />
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "200px", marginLeft: "345px" }}
        >
          <b>Example</b>
          <p>
            {" "}
            Whats X when{" "}
            <div class="frac" style={{ marginLeft: "5px" }}>
              <span>3X</span>
              <span class="symbol">/</span>
              <span class="bottom">5</span>
            </div>{" "}
            = 30
          </p>
        </div>
        <br />

        <div className="text-center">
          <label>The answer is:</label>
          <input type="text" value="50" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "50"
              ? "Well done!"
              : answer > 0 && answer != 50
              ? "try again"
              : null}
          </h1>
        </div>

        <h5>Final problem</h5>
        <p>Attempt to solve this problem.</p>
        <p>
          <b>
            <div className="text-center" style={{ fontSize: "x-large" }}>
              <div class="frac ">
                <span>X</span>
                <span class="symbol">/</span>
                <span class="bottom">2</span>
              </div>
              = 8
            </div>
          </b>
        </p>
        <p>We want to have X on it's own where 'X = ...'</p>
        <p>
          To get X on it's own, we need to multiply both sides by 2 (because
          <sup> 1</sup>&frasl;<sub>2</sub> x 2 = 1)
        </p>
        <p style={{ marginLeft: "150px" }}>
          So let's begin by multiplying 2 to both sides:
          <div class="frac" style={{ margin: "6px" }}>
            <span>1</span>
            <span class="symbol">/</span>
            <span class="bottom">2</span>
          </div>
          <b>x 2</b> = 8 <b>x 3</b>
        </p>
        <p style={{ marginLeft: "350px" }}>
          This becomes: <b>X = 16</b>
        </p>
        <br />
        <p>
          With algebra, you are always able to check your answers by simply
          subsituting your answer back into the equation.
        </p>
        <p>
          <b>
            <div className="text-center" style={{ fontSize: "x-large" }}>
              <div class="frac " style={{ margin: "9px" }}>
                <span>16</span>
                <span class="symbol">/</span>
                <span class="bottom">2</span>
              </div>
              = 8 which is correct!
            </div>
          </b>
        </p>

        <br />
        <br />
        <br />

        {/* GET RID */}
        <p>
          Algebra is a branch of mathematics dealing with symbols and the rules
          for manipulating those symbols. Those symbols (today written as Latin
          and Greek letters) represent quantities without fixed values, known as
          variables.
        </p>
        <h5>The use of letters</h5>
        <p>
          In algebra, you will see the a lot of letters being used. The letter
          represents a value which we don't know. It's better to use letters
          than to leave it empty as it gives a visual representation of what we
          need to find out.
        </p>
        <p>
          If there are several 'unknowns', then we can use different letters for
          each value. And it doesn't have to be x, it could be y, a ... or any
          letter or symbol we like but in algebra, x is used the most and is
          standard for the first 'unknown' variable.
        </p>
        <br />
        <h5>How to solve</h5>
        <p>
          Algebra is just like a puzzle where we start with something like 'x −
          6 = 5' and we want to end up with something where 'x = 11'. But
          instead of saying 'x = 11', it's better to use a step-by-step
          approach.
        </p>
        <ul>
          <li>Work out what to remove to get x on it's own.</li>
          <li>
            Remove it by doing the opposite (adding is the opposite of
            subtracting and multiplying is the opposite of dividing)
          </li>
          <li>Do that to both sides of the equation.</li>
        </ul>
        <p>Here is the example:</p>
        {/* TEST */}

        <h5>Why do we do it to both sides</h5>
        <p>
          Whatever you have done to one side of the equal sign, it <b>must </b>
          be done on the other side. This is because you must keep the equation
          equal and make sure to keep it balanced.
        </p>
        <br />
        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="2QhPDNqMmZY" opts={opts} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default multiplyingAlgebra;
