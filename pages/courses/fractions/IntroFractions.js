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

const IntoFractions = () => {
  return (
    <DefaultLayout>
      <Hero title="Introduction to Fractions" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is a fraction</h3>
        </div>
        <p>
          A fraction is a numerical quantity that is not a whole number.A
          fraction simply tells us how many parts of a whole we have. You can
          recognize a fraction by the slash that is written between the two
          numbers. We have a top number, the numerator, and a bottom number, the
          denominator. For example, 1/2 is a fraction. So 1/2 of a pizza is half
          a pizza!
        </p>
        <table width="450" border="0" align="center">
          <tbody>
            <tr align="center">
              <td width="124">
                {" "}
                <img
                  src="/static/images/pie-1-2.jpg"
                  width="120"
                  height="120"
                  alt="pie 1/2"
                />
              </td>
              <td width="143">
                {" "}
                <img
                  src="/static/images/pie-1-4.jpg"
                  width="120"
                  height="120"
                  alt="pie 1/4"
                />
              </td>
              <td width="145">
                {" "}
                <img
                  src="/static/images/pie-3-8.jpg"
                  width="120"
                  height="120"
                  alt="pie 3/8"
                />
              </td>
            </tr>
            <tr align="center">
              <td width="124">
                {" "}
                <span class="frac-large">
                  <sup>1</sup>/<sub>2</sub>
                </span>{" "}
              </td>
              <td width="143">
                {" "}
                <span class="frac-large">
                  <sup>1</sup>/<sub>4</sub>
                </span>{" "}
              </td>
              <td width="145">
                {" "}
                <span class="frac-large">
                  <sup>3</sup>/<sub>8</sub>
                </span>{" "}
              </td>
            </tr>
            <tr align="center">
              <td width="124">
                <div align="center">
                  <b>(One-Half)</b>
                </div>{" "}
              </td>
              <td width="143">
                <div align="center">
                  <b>(One-Quarter)</b>
                </div>{" "}
              </td>
              <td width="145">
                <div align="center">
                  <b>(Three-Eighths)</b>
                </div>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <h5>Equivalent Fractions</h5>
        <p>
          There are fractions which look different, but in fact they are equal
          the same number. For example:
        </p>

        {/* table 2 */}

        <table border="0" align="center">
          <tbody>
            <tr align="center">
              <td width="124">
                <span class="frac-large">
                  <sup>4</sup>/<sub>8</sub>
                </span>{" "}
              </td>
              <td width="40">=</td>
              <td width="143">
                <span class="frac-large">
                  <sup>2</sup>/<sub>4</sub>
                </span>{" "}
              </td>
              <td width="40">=</td>
              <td width="145">
                <span class="frac-large">
                  <sup>1</sup>/<sub>2</sub>
                </span>{" "}
              </td>
            </tr>
            <tr align="center">
              <td width="124">(Four-Eighths)</td>
              <td width="40">&nbsp;</td>
              <td width="143">(Two-Quarters)</td>
              <td width="40">&nbsp;</td>
              <td width="145">(One-Half)</td>
            </tr>
          </tbody>
        </table>
        <p style={{ paddingTop: "10px" }}>
          Breaking down a fraction into it's simplest fraction is called
          <b> 'Simplifying' or</b> <b>'Reducing'</b>
        </p>
        <h5>The Numerator and Denominator</h5>
        <p>
          In fractionsm we call the top number the <b>numerator</b>. This number
          represents the number of parts we have. The bottom number is the
          <b style={{ paddingLeft: "5px" }}>denominator</b>. This is the number
          of parts the whole is divided into. These two numbers are seperated by
          a line. The line can be horizontal or slanted—they both mean the same
          thing and simply serve to separate the numerator from the denominator.
        </p>
        <div style={{ marginLeft: "220px" }}>
          <sup>Numerator</sup>&frasl;
          <sub style={{ marginRight: "10px" }}>Denominator</sub>
          or
          <div class="frac" style={{ marginLeft: "10px" }}>
            <span>Numerator</span>
            <span class="symbol">/</span>
            <span class="bottom">Denominator</span>
          </div>
        </div>

        {/* end  */}
      </div>
    </DefaultLayout>
  );
};

export default IntoFractions;
