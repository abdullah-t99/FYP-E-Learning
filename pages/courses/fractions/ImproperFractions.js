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

const improperFraction = () => {
  return (
    <DefaultLayout>
      <Hero title="Improper Fractions" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is an improper fraction</h3>
        </div>
        <p>
          An improper fraction is where the numerator (the top number) is
          greater than or equal to the denominator (the bottom number). This is
          known to be 'top-heavy'.
        </p>
        <h5>Examples</h5>
        <br />
        <table border="0" align="center" cellpadding="10">
          <tbody style={{ background: "antiquewhite" }}>
            <tr align="center" class="larger">
              <div class="frac">
                <span>5</span>
                <span class="symbol">/</span>
                <span class="bottom">4</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>60</span>
                <span class="symbol">/</span>
                <span class="bottom">25</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>100</span>
                <span class="symbol">/</span>
                <span class="bottom">5</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>14</span>
                <span class="symbol">/</span>
                <span class="bottom">13</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>24</span>
                <span class="symbol">/</span>
                <span class="bottom">24</span>
              </div>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          From all the examples above, you can see the top number (numerator) is
          either equal or greater than the bottom number (denominator) smaller
          than the bottom number (denominator) making them an improper fraction.
        </p>
        <h5>Can they be equal?</h5>
        <p>
          If both the numerator and the denominator are equal for example like
          <div class="frac" style={{ paddingLeft: "9px" }}>
            <span>4</span>
            <span class="symbol">/</span>
            <span class="bottom">4</span>
          </div>
          , it is the same as a whole number but it can still be written as a
          fraction, so people agree it is a type of improper fraction.
        </p>
        <img
          src="/static/images/pizza4-4.png"
          style={{ marginLeft: "400px" }}
        />
        <br />
        <div class="frac" style={{ marginLeft: "427px" }}>
          <span>
            <b>4</b>
          </span>
          <span class="symbol">
            <b>/</b>
          </span>
          <span class="bottom">
            <b>4</b>
          </span>
        </div>
        <br />
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
        <h5>Converting improper fractions to Mixed fractions </h5>
        <p>
          To convert an improper fraction into a mixed fraction, follow these
          simple steps:
        </p>
        <div>
          <ol className="D2PIntro ">
            <li>Divide the numerator by the denominator.</li>
            <li>Then write down the whole number.</li>
            <li>Finally, write down any remainder above the denominator.</li>
          </ol>
        </div>
        <p> Let's go through some examples.</p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example</b>
          <div className="text-center">
            Convert
            <div class="frac" style={{ marginLeft: "9px" }}>
              <span>35</span>
              <span class="symbol">/</span>
              <span class="bottom">6</span>
            </div>
            to a mixed fraction
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">First divide:</p>
          <p className="example548">
            35 ÷ 6 = <b>5</b> remainder <b>5</b>
          </p>
          <p className="paddingExample">
            Then write down 5 and then write down the remainder (5) with the
            denominator (6) below it.
          </p>
          <div style={{ marginLeft: "350px" }}>
            <b>5</b>
            <div class="frac" style={{ marginLeft: "9px" }}>
              <span>
                <b>5</b>
              </span>
              <span class="symbol">
                <b>/</b>
              </span>
              <span class="bottom">
                <b>6</b>
              </span>
            </div>
          </div>
          <br />
        </div>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "250px", marginLeft: "305px" }}
        >
          <b>Example 2</b>
          <div className="text-center">
            Convert
            <div class="frac" style={{ marginLeft: "9px" }}>
              <span>11</span>
              <span class="symbol">/</span>
              <span class="bottom">5</span>
            </div>
            to a mixed fraction
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "#dedede", border: "solid" }}>
          <p className="paddingExample">First divide:</p>
          <p className="example548">
            11 ÷ 5 = <b>2</b> remainder <b>1</b>
          </p>
          <p className="paddingExample">
            Then write down 2 and then write down the remainder (1) with the
            denominator (5) below it.
          </p>
          <div style={{ marginLeft: "350px" }}>
            <b>2</b>
            <div class="frac" style={{ marginLeft: "9px" }}>
              <span>
                <b>1</b>
              </span>
              <span class="symbol">
                <b>/</b>
              </span>
              <span class="bottom">
                <b>5</b>
              </span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default improperFraction;
