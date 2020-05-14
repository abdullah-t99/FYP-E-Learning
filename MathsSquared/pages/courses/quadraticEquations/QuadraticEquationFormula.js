import React from "react";
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

const binaryDigits = () => {
  return (
    <DefaultLayout>
      <Hero title="Quadratic Equations" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is a Quadratic equation</h3>
        </div>
        <p>
          A quadratic equation is an equation of the second degree, meaning it
          contains at least one term that is squared. The standard form is ax² +
          bx + c = 0 with a, b, and c being constants, or numerical
          coefficients, and x is an unknown variable.
        </p>

        <br />
        <h5>Standard Form </h5>
        <p>
          The <b>standard form</b> of a quadratic equation looks like the
          following:
        </p>
        <p className="text-center" style={{ fontSize: "xx-large" }}>
          <b style={{ color: "#FC9246" }}>a</b>x<sup>2</sup> +{" "}
          <b style={{ color: "#FC9246" }}>b</b>x +{" "}
          <b style={{ color: "#FC9246" }}>c</b>
        </p>
        <p>a, b and c represent known values where a cannot be 0.</p>
        <p>x is the variable or unknown that we don't know yet.</p>
        <p>Here are some examples:</p>
        <br />

        <table align="center" border="0">
          <tbody>
            <tr>
              <td>
                <b>
                  2x<sup>2</sup> + 5x + 3 = 0
                </b>
              </td>
              <td width="20">&nbsp;</td>
              <td>
                In this one <b>a=2</b>, <b>b=5</b> and <b>c=3</b>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top" nowrap="nowrap">
                &nbsp;
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <b>
                  x<sup>2</sup> − 3x = 0
                </b>
              </td>
              <td>&nbsp;</td>
              <td height="91">
                {" "}
                This one is a little more tricky:
                <ul>
                  <li>
                    Where is <b>a</b>? Well <b>a=1</b>, as we don't usually
                    write "1x<sup>2</sup>"
                  </li>
                  <li>
                    <b>b = −3</b>
                  </li>
                  <li>
                    And where is <b>c</b>? Well <b>c=0</b>, so is not shown.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <b>5x − 3 = 0</b>
              </td>
              <td>&nbsp;</td>
              <td>
                This one is <b>not </b>a quadratic equation: it is missing{" "}
                <b>
                  x<sup>2</sup>{" "}
                </b>
                <br /> (in other words <b>a=0</b>, which means it can't be
                quadratic)
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p
          className="text-center"
          style={{ marginLeft: "90px", marginRight: "90px" }}
        >
          Just to know, you don't need to use x for your variable. You can use
          any letter of your choice but the standard choice of letter is x.
        </p>
        <br />
        <h5>How to solve</h5>
        <p>
          To solve quadratic equations, you will need to use the quadratic
          formula. The quadratic formula is seen below:
        </p>
        <img
          src="/static/images/quadratic-formula.png"
          style={{ marginLeft: "250px" }}
        />
        <p>
          To use this equation, you first need to know your values for a, b and
          c. Once you know, you simply but them into the equation. Let's go
          through an example:
        </p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          <b>Example</b>
          <p>
            -7q<sup>2</sup> + 2q + 9
          </p>
          <p>Solve for q</p>
        </div>
        <br />
        <p>
          This equation is already in the form ax<sup>2</sup> + bx + c = 0, so
          we can apply the quadratic formula where <b>a</b> = -7, <b>b</b> = 2
          and <b>c</b> = 9
        </p>
        <img
          src="/static/images/quadratic-formula.png"
          style={{ marginLeft: "290px", width: "300px" }}
        />
        <br />
        <br />
        <img
          src="/static/images/quad1.png"
          style={{ width: "300px", marginLeft: "300px" }}
        />
        <br />
        <br />
        <img
          src="/static/images/quad2.png"
          style={{ width: "300px", marginLeft: "300px" }}
        />
        <br />
        <br />
        <img
          src="/static/images/quad3.png"
          style={{ width: "300px", marginLeft: "300px" }}
        />
        <br />
        <br />
        <img
          src="/static/images/quad4.png"
          style={{ width: "262px", marginLeft: "300px" }}
        />
        <br />
        <br />
        <img
          src="/static/images/quad5.png"
          style={{ width: "300px", marginLeft: "300px" }}
        />
        <p>to check your answers, you put it back into the equation.</p>
        <img
          src="/static/images/quad6.png"
          style={{ width: "400px", marginLeft: "260px" }}
        />
        <br />
        <p>
          We can see that both solutions equal to 0 so we know we are correct.
        </p>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          <b>Example 2</b>
          <p>
            2x<sup>2</sup> + 5x - 3
          </p>
          <p>Solve for x</p>
        </div>

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get the following answers:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                <p>X = -3 and X = 0.5</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <p className="text-center">
          Here's another method for you to solve quadratic equations
        </p>
        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="ZGmKQa45PVw" opts={opts} />
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
              href="../../../static/worksheets/QUADRATICEQUATION/QuadraticEquations .pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              A Quadratic Equation worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/QUADRATICEQUATION/SOLUTIONS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Quadratic Equation answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default binaryDigits;
