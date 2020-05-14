import React, { useState } from "react";
import Hero from "../../../components/common/hero/index";
import { DefaultLayout } from "../../../components/layout/index";
import Router from "next/router";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40,
  },
};
const addingDecimals = ({ id }) => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero title="Adding Decimals numbers" extraShortBanner centreAllign />
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
              <h3 style={{ color: "#FC9246" }}>Adding decimal numbers</h3>
              <div className="addIntro">
                <p>
                  If you know how to add whole numbers, then you can add
                  decimals! Just be sure to line up the terms so that all the
                  decimal points are in a vertical line.
                </p>
                <br />
                <p>To add decimal numbers, follow these simple steps:</p>
                <ol>
                  <li>
                    Put the numbers in a vertical column, aligning the decimal
                    points.
                  </li>
                  <li>
                    Add each column of digits, starting on the right and working
                    left. If the sum of a column is more than ten, "carry"
                    digits to the next column on the left. If the numbers don't
                    have the same length, put in zeros.
                  </li>
                  <li>
                    Place the decimal point in the answer directly below the
                    decimal points in the terms.
                  </li>
                </ol>
                <p>Lets go through an example</p>
                <div className="text-center">
                  <div
                    className="ExampleBoarder text-center"
                    style={{ width: "160px", marginLeft: "329px" }}
                  >
                    <b>Example</b>
                    <p>What's 1.452 + 1.3</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 text-center" />
                  <div className="col-lg-8 text-center">
                    <div style={{ marginTop: "20px" }}>
                      <table style={{ border: "0", margin: "auto" }}>
                        <tbody>
                          <tr>
                            <td>Line the decimals up:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>
                              1
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                              452
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>+</td>
                            <td style={{ paddingRight: "21px" }}>
                              1
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                              3
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td>"Pad" with zeros:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>1.452</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>+</td>
                            <td style={{ paddingLeft: "6px" }}>
                              1.3
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  00
                                </mark>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td>Add:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>1.452</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>+</td>
                            <td>1.300</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td
                              class="hilite"
                              style={{ borderTop: "1px solid black" }}
                            >
                              <mark style={{ backgroundColor: "#FC9246" }}>
                                2.752
                              </mark>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-1 text-center" />
                </div>
                <br />
                <p>
                  Let's go through another example, but this time, lets add 3
                  numbers together.
                </p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "262px", marginLeft: "290px" }}
                >
                  <p className="text-center">
                    <b>Example 2</b>
                  </p>
                  <p className="text-center">Let's add 6 + 0.037 + 2.61</p>
                </div>

                <div className="row">
                  <div className="col-lg-2 text-center" />
                  <div className="col-lg-8 text-center">
                    <div style={{ marginTop: "20px" }}>
                      <table style={{ border: "0", margin: "auto" }}>
                        <tbody>
                          <tr>
                            <td>Line the decimals up:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "47px" }}>
                              6
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td />
                            <td style={{ paddingRight: "18px" }}>
                              0
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                              037
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>+</td>
                            <td style={{ paddingRight: "28px" }}>
                              2
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                              61
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td>"Pad" with zeros:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>
                              6.
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  000
                                </mark>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td />
                            <td style={{ paddingRight: "7px" }}>
                              0.0<span class="hilite">37</span>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>+</td>
                            <td>
                              2.6
                              <span class="hilite">
                                1
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  0
                                </mark>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td>Add:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>6.000</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td />
                            <td>0.037</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>+</td>
                            <td>2.610</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td
                              class="hilite"
                              style={{ borderTop: "1px solid black" }}
                            >
                              <mark style={{ backgroundColor: "#FC9246" }}>
                                8.647
                              </mark>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-1 text-center" />
                </div>
              </div>
            </div>
          </div>
          <p>
            That's all there is to it - just make sure to line up the decimals,
            add any zeros to make sure the numbers are the same length and then
            add as normal.
          </p>
          <div
            className="ExampleBoarder text-center"
            style={{ width: "262px", marginLeft: "290px" }}
          >
            <p className="text-center">
              <b>Example 3</b>
            </p>
            <p className="text-center">Let's add 3.24 + 10.004 + 2.453</p>
          </div>
          <br />
          <div className="text-center">
            <label>The answer is:</label>
            <input type="text" value="16" hidden />
            <input
              name="intextanswer"
              type="text"
              onChange={(e) => setAnswer(e.target.value)}
            />
            <h1>
              {answer === "15.697"
                ? "Well done!"
                : answer > 0 && answer != 15.697
                ? "try again"
                : null}
            </h1>
          </div>

          <h3 style={{ color: "#FC9246" }}>A quiz!</h3>
          <p>If you are ready to do a quiz click the link below!</p>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a
                href={`/courses/decimals/addDecQuiz?id=${id}`}
                style={{ fontSize: "x-large" }}
              >
                Ready to take the quiz?
              </a>
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
                href="../../../static/worksheets/DECIMALS/ADDINGDECIMALS/WORKSHEET.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Adding Decimals worksheet
              </a>
            </div>
            <div className="col-lg-12 text-center">
              <a
                href="../../../static/worksheets/DECIMALS/ADDINGDECIMALS/ANSWERS.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Adding Decimals answers
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

addingDecimals.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default addingDecimals;
