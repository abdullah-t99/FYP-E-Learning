import React from "react";
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
const subtractingDecimals = ({ id }) => {
  return (
    <DefaultLayout>
      <Hero
        title="Subtracting Decimals numbers"
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
              <h3 style={{ color: "#FC9246" }}>Subtracting decimal numbers</h3>
              <div className="addIntro">
                <p>
                  Like adding decimals numbers, subtracting decimal numbers is
                  easy and simple as long as you keep the numbers in line,
                  especially the decimal point as well as keeping your work
                  neat.
                </p>
                <br />
                <p>To subtract decimal numbers, follow these simple steps:</p>
                <ol>
                  <li>
                    Write down the numbers under each with the decimal point in
                    line with all the numbers.
                  </li>
                  <li>
                    Add any zeros to make sure the numbers have the same length.
                  </li>
                  <li>
                    Then begin to subtract as normal and do any carry on if
                    necessary and remember to put the decimal point back into
                    the answer.
                  </li>
                </ol>
                <p>
                  Let's begin with an example so you can visualise how to do it.
                </p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example</b>
                    <p>Lets subtract 0.05 from 1.7</p>
                  </p>
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
                              7
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>-</td>
                            <td style={{ paddingLeft: "9px" }}>
                              0
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                              05
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
                              1.7
                              <mark style={{ backgroundColor: "#FC9246" }}>
                                0
                              </mark>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>-</td>
                            <td>
                              0.0<span class="hilite">5</span>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td>Subtract:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>1.70</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>-</td>
                            <td>0.05</td>
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
                                1.65
                              </mark>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-1 text-center" />
                </div>
                <p>
                  So the answer is: <b>1.65</b>
                </p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 2</b>
                    <p>Lets subtract 0.44 from 8.004</p>
                  </p>
                </div>
                <br />

                <div className="row">
                  <div className="col-lg-2 text-center" />
                  <div className="col-lg-8 text-center">
                    <div style={{ marginTop: "-16px" }}>
                      <table style={{ border: "0", margin: "auto" }}>
                        <tbody>
                          <tr>
                            <td>Line the decimals up:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>
                              8
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                              004
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>-</td>
                            <td style={{ paddingRight: "9px" }}>
                              0
                              <span class="hilite">
                                <mark style={{ backgroundColor: "#FC9246" }}>
                                  .
                                </mark>
                              </span>
                              44
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
                            <td>8.004</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>-</td>
                            <td style={{ paddingLeft: "6px" }}>
                              0.4
                              <span class="hilite">
                                4
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
                            <td>Subtract:</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>8.004</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>-</td>
                            <td>0.440</td>
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
                                7.564
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
            When you are doing subtraction, you are always able to check your
            answer. To check, you add answer you got to the number subtracted.
            Lets use 'example 2' as our example to check our answer.
          </p>
          <div
            className="ExampleBoarder text-center"
            style={{ width: "250px", marginLeft: "305px" }}
          >
            <p className="text-center">
              <b>Example 3</b>
            </p>
            <p className="text-center">8.004 - 0.44 = 7.564</p>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-2 text-center" />
            <div className="col-lg-8 text-center">
              <div>
                <table style={{ border: "0", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>Line the decimals up:</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>
                        7
                        <span class="hilite">
                          <mark style={{ backgroundColor: "#FC9246" }}>.</mark>
                        </span>
                        564
                      </td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>+</td>
                      <td style={{ paddingRight: "11px" }}>
                        0
                        <span class="hilite">
                          <mark style={{ backgroundColor: "#FC9246" }}>.</mark>
                        </span>
                        44
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
                      <td>7.564</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>+</td>
                      <td style={{ paddingLeft: "6px" }}>
                        0.4
                        <span class="hilite">
                          4<mark style={{ backgroundColor: "#FC9246" }}>0</mark>
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
                      <td>Subtract:</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>7.564</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>+</td>
                      <td>0.440</td>
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
                          8.004
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
            It matches the number that we started with so we know we have gotten
            the correct answer.
          </p>
          {/* TEST */}

          <div
            className="ExampleBoarder text-center"
            style={{ width: "250px", marginLeft: "305px" }}
          >
            <p className="text-center">
              <b>Example 4</b>
            </p>
            <p className="text-center">6.12 - 4.143</p>
          </div>

          <div className="text-center">
            <p>Try this out on paper</p>
            <div className="row align-items-center justify-content-center">
              <p>You should get:</p>
              <div id="DivForHoverItem">
                <div id="HiddenText">
                  <p>1.997</p>
                </div>
              </div>
            </div>
          </div>

          {/* END */}
          <b>Quick Tip!</b>
          <p>
            If you are not confident with the answer yoy have gotten when you
            subtracted a number, just add your answer with the number
            subtracted.
          </p>
          <h3 style={{ color: "#FC9246" }}>A quiz!</h3>
          <p>If you are ready to do a quiz click the link below!</p>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a
                href={`/courses/decimals/subDecQuiz?id=${id}`}
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
                href="../../../static/worksheets/DECIMALS/SUBTRACTINGDECIMALS/WORKSHEET.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Subtracting Decimals worksheet
              </a>
            </div>
            <div className="col-lg-12 text-center">
              <a
                href="../../../static/worksheets/DECIMALS/SUBTRACTINGDECIMALS/ANSWERS.pdf"
                target="_blank"
                style={{ fontSize: "x-large" }}
              >
                Subtracting Decimals answers
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

subtractingDecimals.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default subtractingDecimals;
