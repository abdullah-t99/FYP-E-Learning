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
const introDecimals = () => {
  return (
    <DefaultLayout>
      <Hero title="Intoduction to Decimals" extraShortBanner centreAllign />
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
              <h3 style={{ color: "#FC9246" }}>What is a decimal</h3>
              <div className="addIntro">
                <p>
                  In algebra, a decimal number can be defined as a number whose
                  whole number part and the fractional part is separated by a
                  decimal point. The dot in a decimal number is called a decimal
                  point. The digits following the decimal point show a value
                  smaller than one.
                </p>
                <br />
                <p>
                  Let's go through an example of a decimal number 17.48. Here 17
                  is the whole number while '.48' is the decimal part.
                </p>
                <img
                  src="/static/images/decimal-example.png"
                  style={{ paddingLeft: "35px" }}
                />
                <p>
                  Decimals are based on the preceding powers of 10. Thus, as we
                  move from left to right, the place value of digits gets
                  divided by 10, meaning the decimal place value determines the
                  tenths, hundredths and thousandths. A tenth means one tenth or
                  1/10. In decimal form, it is 0.1. Hundredth means 1/100. In
                  decimal form, it is 0.01. Thousandths means 1/1000 which is
                  0.001 in decimal form and so on.
                </p>
                <h5>Large or Small</h5>
                <p>
                  So, our Decimal System lets us write numbers as large or as
                  small as we want, using the decimal point. Digits can be
                  placed to the left or right of a decimal point, to show values
                  greater than one or less than one.
                </p>
                <br />
                <p>
                  The decimal point is the most important part of a Decimal
                  Number. Without it we are lost, and don't know what each
                  position means.
                </p>
                <b className="bold">28.397</b>
                <div className="row">
                  <div className="col-lg-2 text-center"></div>
                  <div className="col-lg-8 text-center">
                    <div style={{ marginTop: "20px" }}>
                      <table className="table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <p style={{ paddingRight: "264px" }}>
                                On the left of the decimal point are the whole
                                numbers (such as 28). As we move further left,
                                the numbers will get 10 times bigger every
                                place.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 text-center"></div>
                  <div className="col-lg-8 text-center">
                    <div style={{ marginTop: "20px" }}>
                      <table className="table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <p style={{ paddingLeft: "264px" }}>
                                The first digit on the right means tenths
                                (1/10). Every time we move to the right, it will
                                get 10 times smaller.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <br />
                <h5>The number line</h5>
                <p>
                  Tenths, hundredths, and thousandths can be represented on a
                  number line. To represent tenths, the distance between each
                  whole number on a number line is partitioned into 10 equal
                  parts where each part represents a tenth.
                </p>
                <img
                  src="/static/images/decimal-numberline.png"
                  style={{ paddingLeft: "25px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default introDecimals;
