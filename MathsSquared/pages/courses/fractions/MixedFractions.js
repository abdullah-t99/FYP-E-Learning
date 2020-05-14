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

const mixedFraction = () => {
  return (
    <DefaultLayout>
      <Hero title="Mixed Fractions" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is a mixed fraction</h3>
        </div>
        <p>
          A mixed number is a combination of a whole number and a proper
          fraction. For example, if you have two whole apples and one half
          apple, you could describe this as 2 + <sup>1</sup>&frasl;
          <sub style={{ marginRight: "5px" }}>2</sub>
          apples, or 2
          <div class="frac" style={{ marginRight: "5px" }}>
            <span>1</span>
            <span class="symbol">/</span>
            <span class="bottom">2</span>
          </div>
          apples
        </p>
        <h5>Examples</h5>
        <br />
        <table border="0" align="center" cellpadding="10">
          <tbody style={{ background: "antiquewhite" }}>
            <tr align="center" class="larger">
              3
              <div class="frac" style={{ marginRight: "10px" }}>
                <span>2</span>
                <span class="symbol">/</span>
                <span class="bottom">3</span>
              </div>
              4
              <div class="frac" style={{ marginRight: "10px" }}>
                <span>6</span>
                <span class="symbol">/</span>
                <span class="bottom">8</span>
              </div>
              20
              <div class="frac" style={{ marginRight: "10px" }}>
                <span>19</span>
                <span class="symbol">/</span>
                <span class="bottom">20</span>
              </div>
              9
              <div class="frac" style={{ marginRight: "10px" }}>
                <span>3</span>
                <span class="symbol">/</span>
                <span class="bottom">8</span>
              </div>
              100
              <div class="frac" style={{ marginRight: "10px" }}>
                <span>1</span>
                <span class="symbol">/</span>
                <span class="bottom">2</span>
              </div>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          From the examples, you can see how each example is made up of a whole
          number and a proper fraction combined together. That's the reason why
          it is called a 'mixed' fraction.
        </p>

        <br />
        <h5>Improper fractions to Mixed fractions</h5>
        <p>
          With improper fractions, you can leave the fraction as it is, or you
          can convert it into a mixed fraction as they both show the same
          amount.
        </p>
        <p>
          For example: 1
          <div class="frac" style={{ marginLeft: "5px" }}>
            <span>3</span>
            <span class="symbol">/</span>
            <span class="bottom" style={{ marginRight: "9px" }}>
              7
            </span>
          </div>
          =
          <div class="frac" style={{ marginLeft: "9px" }}>
            <span>10</span>
            <span class="symbol">/</span>
            <span class="bottom">7</span>
          </div>
          as seen below.
        </p>
        <table border="0" align="center">
          <tbody>
            <tr align="center" class="large">
              1
              <div class="frac" style={{ marginLeft: "5px" }}>
                <span>3</span>
                <span class="symbol">/</span>
                <span class="bottom">7</span>
              </div>
              <td>&nbsp;</td>
              <div class="frac">
                <span>10</span>
                <span class="symbol">/</span>
                <span class="bottom">7</span>
              </div>
            </tr>
            <tr align="center">
              <td>
                <img src="/static/images/pizza1-1.png" />
                <img src="/static/images/pizza3-7.png" />
              </td>
              <td class="huge" style={{ fontSize: "xx-large" }}>
                <b>=</b>
              </td>
              <td>
                <img src="/static/images/pizza7-7.png" />
                <img src="/static/images/pizza3-7.png" />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h5>Converting mixed fractions to improper fractions </h5>
        <p>
          To convert a mixed fraction into am improper fraction, follow these
          simple steps:
        </p>
        <div className="D2PIntro">
          <ol>
            <li>
              First multiply the whole number part by the fraction's
              denominator.
            </li>
            <li>Add that answer with the numerator.</li>
            <li>Finally, write the result on top of the denominator.</li>
          </ol>
        </div>
        <p> Let's go through some examples.</p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "307px", marginLeft: "271px" }}
        >
          {" "}
          <b>Example</b>
          <div className="text-center">
            Convert 4
            <div class="frac" style={{ marginLeft: "9px" }}>
              <span>3</span>
              <span class="symbol">/</span>
              <span class="bottom">10</span>
            </div>
            to an improper fraction.
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            First multiply the whole number part by the denominator:
          </p>
          <p style={{ marginLeft: "330px" }}>
            4 x 10 = <b>40</b>
          </p>
          <p className="paddingExample">Then add it (40) with the numerator:</p>
          <p style={{ marginLeft: "330px" }}>
            40 + 3 = <b>43</b>
          </p>
          <p className="paddingExample">
            Then write that final result above the denominator giving us the
            answer:
          </p>
          <div class="frac" style={{ marginLeft: "370px" }}>
            <span>
              <b>43</b>
            </span>
            <span class="symbol">
              <b>/</b>
            </span>
            <span class="bottom">
              <b>10</b>
            </span>
          </div>
          <br />
          <br />
        </div>
        <br />

        {/* Example 2 */}

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <b>Example 2</b>
          <div className="text-center">
            Convert 5
            <div class="frac" style={{ marginLeft: "9px" }}>
              <span>7</span>
              <span class="symbol">/</span>
              <span class="bottom">9</span>
            </div>
            to an improper fraction.
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">
            First multiply the whole number part by the denominator:
          </p>
          <p style={{ marginLeft: "330px" }}>
            5 x 9 = <b>45</b>
          </p>
          <p className="paddingExample">Then add it (45) with the numerator:</p>
          <p style={{ marginLeft: "330px" }}>
            45 + 7 = <b>52</b>
          </p>
          <p className="paddingExample">
            Then write that final result above the denominator giving us the
            answer:
          </p>
          <div class="frac" style={{ marginLeft: "370px" }}>
            <span>
              <b>52</b>
            </span>
            <span class="symbol">
              <b>/</b>
            </span>
            <span class="bottom">
              <b>9</b>
            </span>
          </div>
          <br />
          <br />
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          {" "}
          <h5>Example 3</h5>
          Convert 11
          <div class="frac" style={{ marginLeft: "9px" }}>
            <span>6</span>
            <span class="symbol">/</span>
            <span class="bottom">15</span>
          </div>
        </div>
        <br />

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                <div class="frac">
                  <span>171</span>
                  <span class="symbol">/</span>
                  <span class="bottom">15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <h5>Mixed fractions or Improper fractions?</h5>
        <p>
          For mathematics, improper fractions are actually easier to use than
          mixed fractions. But, for everyday use, people understand mixed
          numbers better. So, it is important that you know how to convert from
          one form to the other.
        </p>
        <p>For example:</p>
        <div className="D2PIntro" style={{ paddingTop: "16px" }}>
          <p style={{ marginLeft: "140px" }}>
            It's easier to say "I ate 2
            <div class="frac">
              <span>1</span>
              <span class="symbol">/</span>
              <span class="bottom">2</span>
            </div>{" "}
            apples instead of saying "I ate
            <div class="frac">
              <span>5</span>
              <span class="symbol">/</span>
              <span class="bottom">2</span>
            </div>
            apples"
          </p>
        </div>
        {/* END */}
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="shpf9krdXQQ" opts={opts} />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <a
              href="/courses/fractions/MixedFractionQuiz"
              style={{ fontSize: "x-large" }}
            >
              Ready to take the quiz?
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default mixedFraction;
