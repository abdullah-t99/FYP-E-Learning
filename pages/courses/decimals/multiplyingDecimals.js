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

const multiplyingDecimals = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero
        title="Multiplying Decimals numbers"
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
              <h3 style={{ color: "#FC9246" }}>Multiplying decimal numbers</h3>
              <div className="addIntro">
                <p>
                  To multiply decimal numbers, just simply follow these easy
                  steps:
                </p>
                <ol>
                  <li>
                    Multiply as normal but ignore the decimal points whilst
                    doing the calculation.
                  </li>
                  <li>
                    Once you have done this calculation, you put the decimal
                    point back into your answer. It will have many decimal
                    places as the two original numbers combined.
                  </li>
                </ol>
                <p>
                  Just count up how many numbers are after the decimal point in
                  both numbers you are multiplying, then the answer should have
                  that many numbers after its decimal point.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <p>Lets go through some examples:</p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example</b>
                  </p>
                  <p className="text-center">Multiply 0.03 by by 1.1</p>
                </div>
                <br />
              </div>

              {/* The Table  */}
              <div className="row">
                <div className="col-lg-12 text-center">
                  <table class="table" style={{ marginLeft: "200px" }}>
                    <thead>
                      <tr>
                        <th scope="col">Begin by starting with:</th>
                        <th scope="col">0.03 x 1.1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">multiply without decimal points:</th>
                        <td>3 x 11 = 33</td>
                      </tr>
                      <tr>
                        <th scope="row">0.03 has 2 decimal places</th>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">1.1 has 1 decimal places</th>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">so the answer has 3 decimal places:</th>
                        <td>0.033</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* End of the table  */}
            </div>

            <div className="row">
              <div className="col-lg-12">
                <h5>So how does it work?</h5>
                <p>
                  When you are multiplying without the decimal points, what you
                  are really doing is shifting the decimal point to the right to
                  get it out the way. Here is a visual representation of how it
                  works.
                </p>
                <table border="0" align="center">
                  <tbody>
                    <tr align="center">
                      <td>
                        <i>Original:</i>
                      </td>
                      <td>
                        <i />
                      </td>
                      <td>
                        <i>1 Move:</i>
                      </td>
                      <td>
                        <i />
                      </td>
                      <td>
                        <i>2 Moves:</i>
                      </td>
                      <td>
                        <i />
                      </td>
                      <td>
                        <i>3 Moves:</i>
                      </td>
                    </tr>
                    <tr align="center">
                      <td>0.03&nbsp;×&nbsp;1.1</td>
                      <td>
                        &nbsp; <b width="30">➔</b> &nbsp;
                      </td>
                      <td>
                        <b>0.3</b>&nbsp;×&nbsp;1.1
                      </td>
                      <td>
                        &nbsp; <b>➔</b> &nbsp;
                      </td>
                      <td>
                        <b>3.</b>&nbsp;×&nbsp;1.1
                      </td>
                      <td>
                        &nbsp; <b>➔</b> &nbsp;
                      </td>
                      <td>
                        <b>3.</b>&nbsp;×<b>&nbsp;11.</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  After this process, we go onto the easy bit and do the
                  multiplication:
                </p>
                <p className="decimalExample text-center">
                  <b>3. x 11. = 33.</b>
                </p>
                <p>
                  But make sure you put the decimal point back. We moved it by 3
                  moves, so we need to undo this:
                </p>
                <table border="0" align="center">
                  <tbody>
                    <tr align="center">
                      <td>
                        <i>3 moves: </i>
                      </td>
                      <td>
                        <i />
                      </td>
                      <td>
                        <i>2 moves: </i>
                      </td>
                      <td>
                        <i />
                      </td>
                      <td>
                        <i>1 moves: </i>
                      </td>
                      <td>
                        <i />
                      </td>
                      <td>
                        <i>Correct </i>
                      </td>
                    </tr>
                    <tr align="center">
                      <td>33.</td>
                      <td>
                        &nbsp; <b width="30">➔</b> &nbsp;
                      </td>
                      <td>
                        <b>3.3</b>
                      </td>
                      <td>
                        &nbsp; <b>➔</b> &nbsp;
                      </td>
                      <td>
                        <b>0.33</b>1.1
                      </td>
                      <td>
                        &nbsp; <b>➔</b> &nbsp;
                      </td>
                      <td>
                        <b>0.033</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 2</b>
                  </p>
                  <p className="text-center">Lets do 0.075 x 0.6 </p>
                </div>
                <br />

                <div className="row">
                  <div
                    className="col-lg-6 text-center"
                    style={{ marginLeft: "250px" }}
                  >
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Begin by starting with:</th>
                          <th scope="col">0.0075 x 0.6</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">multiply without decimal points:</th>
                          <td>75 x 6 = 450</td>
                        </tr>
                        <tr>
                          <th scope="row">0.075 has 4 decimal places</th>
                          <td />
                        </tr>
                        <tr>
                          <th scope="row">0.6 has 1 decimal places</th>
                          <td />
                        </tr>
                        <tr>
                          <th scope="row">
                            so the answer has 5 decimal places:
                          </th>
                          <td>0.00450</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p>
                  If you have have decimal numbers which you can't do
                  mentally,then use the coloumn method to do the multiplication.
                  Lets go through an example:
                </p>
                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 3</b>
                  </p>
                  <p className="text-center">What's 3.72 x 2.3</p>
                </div>
                <br />
                <p>
                  First, do the calculation with whole numbers. We do 372 x 23.
                  As this is a large number, I will do this calculation using
                  the column method.
                </p>
                <img
                  src="/static/images/multipcolumn.png"
                  style={{ marginLeft: "390px" }}
                />
                <p style={{ paddingTop: "20px" }}>
                  From the calculation, we have found out that 372 x 23 = 8556
                  but now we have to put the decimal points back in.
                </p>
                <p>
                  There are three decimal places in the calculation (3.72 and
                  2.3), so there needs to be three decimal places in the answer.
                  So 3.72 x 2.3 = 8.556
                </p>

                <div
                  className="ExampleBoarder text-center"
                  style={{ width: "250px", marginLeft: "305px" }}
                >
                  <p className="text-center">
                    <b>Example 5</b>
                  </p>
                  <p className="text-center">7.32 x 4.68</p>
                </div>

                <div className="text-center">
                  <p>Try this out on paper</p>
                  <div className="row align-items-center justify-content-center">
                    <p>You should get:</p>
                    <div id="DivForHoverItem">
                      <div id="HiddenText">
                        <p>34.2576</p>
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
                  <p className="text-center">10.504 x 8.29</p>
                </div>
                <br />

                <div className="text-center">
                  <label>The answer is:</label>
                  <input type="text" value="87.07816" hidden />
                  <input
                    name="intextanswer"
                    type="text"
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <h1>
                    {answer === "87.07816"
                      ? "Well done!"
                      : answer > 0 && answer != 87.07816
                      ? "try again"
                      : null}
                  </h1>
                </div>

                <h5>Common Sense</h5>
                <p>
                  As a final check you can put your "common sense" hat on and
                  think "is that the right size?", because you don't want to pay
                  ten times too much for anything, nor get only one-tenth of
                  what you need!
                </p>

                <br />
              </div>
            </div>
          </div>
        </div>
        <p>Here's a video for you on how multiplying decimals are made easy!</p>

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="dSFja7Jsg6c" opts={opts} />
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
              href="../../../static/worksheets/DECIMALS/MULTIPLYINGDECIMALS/WORKSHEET.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Multiplying Decimals worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/DECIMALS/MULTIPLYINGDECIMALS/ANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Multiplying Decimals answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default multiplyingDecimals;
