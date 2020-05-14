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

const division = ({ id }) => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero title="Division and Long Division" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>

        <div>
          <div className="col-lg-12">
            <h3 style={{ color: "#FC9246" }}>What is division</h3>
            <p>
              The division is a method of distributing a group of things into
              equal parts. It is one of the four basic operations of arithmetic,
              which gives a fair result of sharing. It's splitting into equal
              parts or groups.
            </p>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "160px", marginLeft: "329px" }}
            >
              <h5>
                <b>Example</b>
              </h5>
            </div>
            <br />
            <p>
              Lets say there is 16 balls, and you want to split them equally in
              4 boxes. How do we split it?
            </p>
            <img
              src="/static/images/divisionExample.png"
              style={{ marginLeft: "50px" }}
            />
            <br />
            <p style={{ paddingTop: "10px" }}>
              What we do it 16 ÷ 4 = 4 meaning each box will get 4 balls.
            </p>
            <h3 style={{ color: "#FC9246" }}>Symbols and names</h3>
            <p>
              For division, there many symbols you can use. The most common one
              is ÷ but in some examples the / symbol is used so don't be
              confused if you see any of these, they both mean the same!. For
              example, 20 ÷ 5 and 20 / 5 = 4.
            </p>
            <br />
            <p>Each part involved in a division equation has a special name.</p>
            <b
              className="col-lg-12 text-center"
              style={{ paddingLeft: "260px" }}
            >
              Dividend ÷ divisor = quotient
            </b>
            <ul>
              <li>
                Dividend : The dividend is the number that is being divided in
                the division process.
              </li>
              <li>
                Divisor : The number by which dividend is being divided by is
                called divisor.
              </li>
              <li>
                Quotient : A quotient is a result obtained in the division
                process.
              </li>
            </ul>
            <br />
            <h5>Opposite of multiplying</h5>
            <p>
              Division is an operation inverse of multiplication which basically
              means it is the opposite of multiplying. This is why knowing your
              times table is very helpful for division. Let's go through an
              example.
            </p>
            <div
              className="ExampleBoarder text-center"
              style={{ width: "293px", marginLeft: "275px" }}
            >
              <h6>Example</h6>
              <p>4 x 6 = 24, so 24 / 6 = 4 and 24 / 4 = 6</p>
            </div>
            <br />
            <h3 style={{ color: "#FC9246" }}>Long Division</h3>
            <h5>Whats long division</h5>
            <p>
              long division is a method of solving and finding the remainder for
              division problems that involve numbers with at least two digits.
              Learning the basic steps of long division will allow you to divide
              numbers of any length, including both integers and decimals.
            </p>
            <b>How to write it down</b>
            <p>
              First, you have to write down the problem in long division format.
              A normal divison question looks like this:
            </p>
            <b
              className="col-lg-12 text-center"
              style={{ paddingLeft: "260px" }}
            >
              Dividend ÷ Divisor = Quotient
            </b>
            <p>
              To write this down in long division format it's set up like this:
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/divisor-dividend-quotient.png" />
            </div>
            <br />
            <b>Example: 65 ÷ 5 </b>
            <p>Lets begin to write in the correct format</p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-1.gif" />
            </div>
            <p>
              Now we are ready to start division. To begin, we will be using the
              D M S B.
            </p>
            <b>Step 1: Divide</b>
            <p>
              In long division, we break it down into steps. Instead of doing 65
              ÷ 5, we will instead see how many 5 divide into 6. 5 ÷ 6 = 1 so we
              put 1 on the quotient line.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-2.gif" />
            </div>
            <br />
            <b>Step 2: Multiply</b>
            <p>
              You multiply your answer from step 1 and your divisor. So here we
              do 1 x 5 = 5. You then write 5 under the 6.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-3.gif" />
            </div>
            <br />
            <b>Step 3: Subtract</b>
            <p>
              Next we subtract. In this case it will be 6 – 5 = 1. You then put
              1 under 5 drawing a new column.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-4.gif" />
            </div>
            <br />
            <b>Step 4: Bring down</b>
            <p>
              The last step in the sequence is to bring down the next number
              from the dividend, which in this case is 5. You write the 5 next
              to the 1, making the number 15.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-5.gif" />
            </div>
            <br />
            <b>Step 1: Divide</b>
            <p>
              You do the process again so how many times can you divide 5 into
              15. The answer is 3. So you put 3 on the quotient line.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-6.gif" />
            </div>
            <br />
            <b>Step 2: Multiply</b>
            <p>
              You multiply your answer from step 1 and your divisor. So here we
              do 3 x 5 = 15. You put this underneath the 15.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-7.gif" />
            </div>
            <br />
            <b>Step 3: Subtract</b>
            <p>Now we subtract 15 from 15. 15 – 15 = 0.</p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/long-division-8.gif" />
            </div>
            <p>
              We have completed the calculation. Here we have solved 65 ÷ 5 =
              15. To make sure you are correct, do the problem in reverse using
              multiplication (5 x 13 = 65).
            </p>
          </div>
        </div>
        <h5>Example</h5>

        <p>Whats the following calculation</p>
        <div className="text-center">
          <p>What is</p>
          <p style={{ fontSize: "x-large" }}>64 ÷ 4</p>
          <label>The answer is:</label>
          <input type="text" value="16" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "16"
              ? "Well done!"
              : answer > 0 && answer != 16
              ? "try again"
              : null}
          </h1>
        </div>

        <br />
        <p>
          For some tricks for for fast division, watch the video down below.
        </p>

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="_rzq8U78e6M" opts={opts} />
          </div>
        </div>

        <h3 style={{ color: "#FC9246" }}>A quiz!</h3>
        <p>If you are ready to do a quiz click the link below!</p>
        <div className="row">
          <div className="col-lg-12 text-center">
            <a
              href={`/courses/numbers/divisionquiz?id=${id}`}
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
              href="../../../static/worksheets/NUMBERS/DIVISION/DivisionSheet.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Division worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/NUMBERS/DIVISION/DivisionAnswers.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Division worksheet answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

division.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default division;
