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

const properFractions = () => {
  return (
    <DefaultLayout>
      <Hero title="Proper Fractions" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is a proper fraction</h3>
        </div>
        <p>
          A proper fraction is where the numerator (the top number) is less than
          the denominator (the bottom number) which means it is less than 1.
        </p>
        <div className="fractionPizza">
          <img
            style={{ width: "190px", marginLeft: "100px" }}
            src="/static/images/48.png"
          />
        </div>
        <div class="frac" style={{ marginLeft: "439px" }}>
          <span>4</span>
          <span class="symbol">/</span>
          <span class="bottom">8</span>
        </div>
        <p style={{ marginLeft: "389px" }}>
          <b style={{ fontSize: "large" }}>(four-eighths)</b>
        </p>
        <h5>Examples</h5>
        <br />

        {/* test */}

        <table border="0" align="center" cellpadding="10">
          <tbody style={{ background: "antiquewhite" }}>
            <tr align="center" class="larger">
              <div class="frac">
                <span>1</span>
                <span class="symbol">/</span>
                <span class="bottom">2</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>5</span>
                <span class="symbol">/</span>
                <span class="bottom">11</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>6</span>
                <span class="symbol">/</span>
                <span class="bottom">8</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>30</span>
                <span class="symbol">/</span>
                <span class="bottom">31</span>
              </div>
              <div class="frac" style={{ marginLeft: "19px" }}>
                <span>15</span>
                <span class="symbol">/</span>
                <span class="bottom">44</span>
              </div>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          From all the examples above, you can see the top number (numerator) is
          smaller than the bottom number (denominator) making them a proper
          fraction.
        </p>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="ExampleBoarder text-center"
              style={{ width: "250px", marginLeft: "305px" }}
            >
              <b>Example</b>
              <p>What does 2/8 mean?</p>
            </div>
            <br />

            <div className="properFractionExample">
              <div
                className="example28 "
                style={{
                  backgroundColor: "#dedede",
                  marginRight: "25px",
                  border: "solid"
                }}
              >
                <p className="paddingExample">2/8 means:</p>
                <p className="paddingExample">
                  We have <b>2</b> parts of something which has 8 parts in
                  total.
                </p>
                <p className="paddingExample">
                  Each part is an
                  <b style={{ paddingLeft: "5px" }}>
                    eighth <sup>1</sup>&frasl;<sub>8</sub>{" "}
                  </b>
                  of a whole
                </p>
                <div>
                  <img className="pizza28" src="/static/images/28.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default properFractions;
