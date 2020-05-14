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
const percentages = () => {
  return (
    <DefaultLayout>
      <Hero title="Introduction to Percentages" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div>
          <div className="col-lg-12">
            <h3 style={{ color: "#FC9246" }}>What is a percentage</h3>
            <p>
              Percent (or per cent) means one hundredth. So when we say percent,
              we are really saying 'per 100'. Therefore, 1% means 1/100 or one
              hundredth, and 7% means 7/100 or seven hundredths. Since
              percentages are just hundredth parts (which means they are
              FRACTIONS), we can very easily write them as fractions and as
              decimals.
            </p>
            <h5>Visualising Percentages</h5>
            <div className="visualPercentage">
              <p>The grid below has 100 cells.</p>
              <ul>
                <li>
                  Each cell is equal to 1% of the whole (the red cell is 1%).
                </li>
                <li>Two cells are equal to 2% (the green cells).</li>
                <li>Five cells are equal to 5% (the blue cells).</li>
                <li>
                  Twenty five cells (purple cells) are equal to 25% of the whole
                  or one quarter (¼).
                </li>
                <li>
                  Fifty cells (yellow cells) are equal to 50% of the whole or
                  half (½).
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/visualPercentage.png"
                style={{ width: "700px", marginLeft: "70px" }}
              />
            </div>
            <br />
            <p>
              How many unshaded (white) cells are there? What is the percentage
              of unshaded cells?
            </p>
            <div>
              <p>Answer: There are two ways to work this out.</p>
              <ol>
                <li>
                  Count the white cells. There are 17 of them. Out of 100 cells,
                  17% are therefore white.
                </li>
                <li>
                  Add up the number of other cells, and take them from 100.
                  There is one red cell, two green, five blue, 25 purple, and 50
                  yellow. That adds up to 83. 100−83 = 17. Again, out of 100
                  cells, 17 are white, or 17%.
                </li>
              </ol>
            </div>
            <br />
            <h3 style={{ color: "#FC9246" }}>Finding the Percentage</h3>
            <p>
              The general rule for finding a given percentage of a given whole
              is:
            </p>
            <b>
              Work out the value of 1%, then multiply it by the percentage you
              need to find.
            </b>
            <br />
            <p>
              This is easiest to understand with an example. Let’s suppose that
              you want to buy a new laptop computer. You have checked local
              suppliers and one company has offered to give you 20% off the list
              price of £500. How much will the laptop cost from that supplier?
            </p>
            <p>
              In this example, the whole is £500, or the cost of the laptop
              before the discount is applied. The percentage that you need to
              find is 20%, or the discount offered by the supplier. You are then
              going to take that off the full price to find out what the laptop
              will cost you.
            </p>
            <ol>
              <li>Start by working out the value of 1%</li>
              <p>One percent of £500 is £500 ÷ 100 = £5.</p>
              <li>Multiply it by the percentage you are looking for</li>
              <p>
                Once you have worked out the value of 1%, you simply multiply it
                by the percentage you are looking for, in this case 20%.
              </p>
              <p>
                £5 × 20 = £100. You now know that the discount is worth £100.
              </p>
              <li>Complete the sum by adding or subtracting as necessary.</li>
              <p>
                The price of the laptop, including the discount, is £500−20%, or
                £500−£100 = <b>£400.</b>
              </p>
            </ol>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default percentages;
