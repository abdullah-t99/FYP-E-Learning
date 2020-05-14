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

const substitution = () => {
  const [answer, setAnswer] = useState("");
  return (
    <DefaultLayout>
      <Hero title="Substitution" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>Substitution</h3>
        </div>
        <h5>What is it </h5>
        <p>
          In algebra, "Substitution" means putting numbers where the letters
          are.
        </p>
        <p>For example: </p>

        <div className="row">
          <div className="col-lg-2 text-center" />
          <div className="col-lg-8 text-center">
            <div style={{ marginTop: "20px" }}>
              <table className="table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <p>When we have </p>
                    </td>
                    <td>
                      <p>
                        <b>X + 4</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>And we know X = 5</p>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td>
                      <p style={{ marginRight: "20px" }}>
                        We can subsitute <b>5</b> in for for <b>X</b>.
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>5</b> + 4 = 9
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-1 text-center" />
        </div>

        <p>Let's go through some examples</p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example</b>
          <p>
            When X = 3, what is
            <div class="frac" style={{ margin: "9px" }}>
              <span>15</span>
              <span class="symbol">/</span>
              <span class="bottom">X</span>
            </div>
            + 4
          </p>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            Put '3' where 'X' is in the equation.
          </p>
          <p className="text-center" style={{ fontSize: "x-large" }}>
            <b>
              <div class="frac text-center">
                <span>15</span>
                <span class="symbol">/</span>
                <span class="bottom">3</span>
              </div>
              + 4 = 9
            </b>
          </p>
          <p className="paddingExample">
            So the answer to the equation is <b>9</b>
          </p>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 2</b>
          <p>When X = 4.5, what is: X + (2X)</p>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            Put '4.5' where 'X' is in the equation.
          </p>
          <p className="text-center">
            <b>4.5</b> + (2 x <b>4.5</b>)
          </p>

          <p className="text-center">4.5 + 9 = 13.5</p>
          <p className="paddingExample">
            So the answer to the equation is <b>13.5</b>
          </p>
        </div>

        <p>
          Let's now go through some examples where we have 2 unknowns (X and Y)
        </p>

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 3</b>
          <p>
            When X = 2, Y = 3. What is: XY + Y + X<sup>2</sup> -5
          </p>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            Begin by putting 2 in where X is and 3 in where Y is.
          </p>
          <p className="text-center">
            (<b>2</b> x <b>3</b>) + <b>3</b> +
            <b>
              2<sup>2</sup>
            </b>
            - 5
          </p>

          <p className="text-center">6 + 3 + 4 -5</p>
          <p className="text-center">
            10 + 3 -5 = <b>8</b>
          </p>
          <p className="paddingExample">
            So the answer to the equation is <b>8</b>
          </p>
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 4</b>
          <p>
            When X = 5. What is: X<sup>2</sup> + X<sup>2</sup>Y
          </p>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            Begin by putting 5 in where X is. As we don't know the value for Y,
            we leave it as it is.
          </p>
          <p className="text-center">
            <b>5</b>
            <sup>2</sup> + (<b>5</b>
            <sup>2</sup>Y)
          </p>

          <p className="text-center">25 + 25Y</p>
          <p className="paddingExample">
            From here, we can then find out what the value of Y is.
          </p>
          <p className="paddingExample">
            As 25 + 25Y does not equal anything, we assume it equal to 0 so:
          </p>
          <p className="text-center">25 + 25Y = 0</p>
          <p className="paddingExample">Take -25 off both sides.</p>
          <p className="text-center">25Y = -25</p>
          <p className="paddingExample">
            Divide both sides by 25 leaving us with:
          </p>
          <p className="text-center">
            <b>Y = -1</b>
          </p>
          <p className="paddingExample">
            To check if your correct, you can put it back into the equation.
          </p>
          <p className="text-center"> 25 x -1 = -25</p>
          <p className="text-center">Which is corect!</p>
        </div>
        <br />

        <h5>Negative Numbers</h5>
        <p>
          When you are subsituting negative numbers, put () around them so its
          clear which symbol is with which number so you are less likely to make
          a mistake
        </p>

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 5</b>
          <p>
            When X = -2. What is: 3 - X + X<sup>2</sup>
          </p>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">Begin by putting -2 in where X is.</p>
          <p className="text-center">
            3 - <b>(-2)</b> +
            <b>
              (-2)<sup>2</sup>
            </b>
          </p>

          <p className="text-center">3 + 2 + 4 = 9</p>
        </div>

        <p>In the example above:</p>
        <ul>
          <li>- (-2) becomes + 2</li>
          <li>
            (-2)<sup>2</sup> becomes + 4
          </li>
        </ul>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 6</b>
          <p>
            When X = 4 and Y = -2. What is:{" "}
            <div class="frac" style={{ marginLeft: "5px" }}>
              <span>16</span>
              <span class="symbol">/</span>
              <span class="bottom">Y</span>
            </div>{" "}
            - X + X<sup>2</sup>
          </p>
        </div>
        <br />

        <div className="text-center">
          <label>The answer is:</label>
          <input type="text" value="4" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "4"
              ? "Well done!"
              : answer > 0 && answer != 4
              ? "try again"
              : null}
          </h1>
        </div>
        <br />

        {/* TEST */}
        <table border="0" align="center" cellpadding="3">
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <th>Rule</th>
              <th align="center">
                Adding or <br />
                Subtracting
              </th>
              <th width="20" align="center">
                &nbsp;
              </th>
              <th align="center">
                Multiplying or <br />
                Dividing
              </th>
            </tr>
            <tr>
              <td rowspan="2" />
              <td rowspan="2">
                Two like signs become a <b>positive sign</b>
              </td>
              <td align="center">
                5+(+4) = 5<b> + </b>4 = 9
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">4 × 2 = 8</td>
            </tr>
            <tr>
              <td align="center">
                9−(−6) = 9<b> + </b>6 = 15
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">(−3) × (−2) = 6</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td align="center">&nbsp;</td>
              <td align="center">&nbsp;</td>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td rowspan="2" />
              <td rowspan="2">
                Two unlike signs become a <b>negative sign</b> &nbsp;
              </td>
              <td align="center">
                10+(−4) = 10 <b>− </b>4 = 6
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">2 × (−2) = −4</td>
            </tr>
            <tr>
              <td align="center">
                8−(+2) = 8 <b>− </b>2 = 6
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">(−3) × 2 = −6</td>
            </tr>
          </tbody>
        </table>
        <br />

        <img src="/static/images/1.png" style={{ width: "800px" }} />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="ZkC2FX5TOJ8" opts={opts} />
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
              href="../../../static/worksheets/ALGEBRA/SUBSTITUTION.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              A Substitution worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/ALGEBRA/SUBSTITUTIONANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Substitution answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default substitution;
