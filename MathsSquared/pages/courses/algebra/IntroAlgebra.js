import React from "react";
import Hero from "../../../components/common/hero/index";
import { DefaultLayout } from "../../../components/layout/index";
import Router from "next/router";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40
  }
};

const introductionAlgebra = () => {
  return (
    <DefaultLayout>
      <Hero title="Introduction to Algebra" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is algebra</h3>
        </div>
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
        <div
          className="ExampleBoarder text-center"
          style={{ width: "500px", marginLeft: "170px" }}
        >
          <div className="row">
            <div className="col-lg-2 text-center" />
            <div className="col-lg-8 text-center">
              <div style={{ marginTop: "20px" }}>
                <table className="table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          We want to remove the '-6'. Make sure to include the
                          symbol (-).
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>X - 6 = 5</b>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>To remove it, do the opposite by adding 6.</p>
                      </td>
                      <td>
                        <p>
                          X - 6 <b>+ 6</b> = 5
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Do it to both sides</p>
                      </td>
                      <td>
                        <p>
                          X - 6 + 6 = 5 <b>+ 6</b>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Meaning X is.</p>
                      </td>
                      <td>
                        <p>
                          X = <b>11</b>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-1 text-center" />
          </div>
        </div>
        <br />

        <h5>Why do we do it to both sides</h5>
        <p>
          Whatever you have done to one side of the equal sign, it <b>must </b>
          be done on the other side. This is because you must keep the equation
          equal and make sure to keep it balanced.
        </p>

        <h5>A problem</h5>
        <p>Attempt to solve this problem.</p>
        <b>
          <div className="text-center" style={{ fontSize: "x-large" }}>
            X + 4 = 11
          </div>
        </b>
        <p>We want to have X on it's own where 'X = ...'</p>
        <p>
          To get X on it's own, we need to subtract both sides by 4 (because 4 -
          4 = 0)
        </p>
        <p style={{ marginLeft: "150px" }}>
          So let's begin by subtract 4 to both sides: X + 4<b>- 4</b> = 11
          <b>- 4</b>
        </p>
        <p style={{ marginLeft: "412px" }}>So: X + 0 = 7</p>
        <p style={{ marginLeft: "333px" }}>
          This becomes: <b>X = 7</b>
        </p>
        <br />
        <p>
          With algebra, you are always able to check your answers by simply
          subsituting your answer back into the equation.
        </p>
        <p>
          <b>
            <div className="text-center" style={{ fontSize: "x-large" }}>
              <p>7 + 4 = 11 which is correct!</p>
            </div>
          </b>
        </p>
      </div>
    </DefaultLayout>
  );
};

export default introductionAlgebra;
