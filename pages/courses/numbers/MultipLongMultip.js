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

const multiplication = () => {
  const [answer, setAnswer] = useState("");
  return (
    <DefaultLayout>
      <Hero
        title="Multiplication and Long Multiplication"
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
        <div>
          <div className="col-lg-12 ">
            <h3 style={{ color: "#FC9246" }}>What is multiplication</h3>
            <div className="multiplication">
              <p>
                The multiplication of whole numbers may be thought as a repeated
                addition. For example, 5 x 3 = <b>5 + 5 + 5 </b> = 15. When
                multiplying, the position of the numbers don't matter. For
                example 7 x 3 = <b>3 x 7 =</b> 21. This is applicable when any
                of the numbers are negative or even when your multiplying more
                than 2 digits.
              </p>
              <h5>How to multiply</h5>
              <p>
                When it comes to multiplication, there isn't a lot of methods
                other than to learning the multiplication tables. However, there
                are many methods to help you learn them!.
              </p>
              <br />
            </div>
            <h3 style={{ color: "#FC9246" }}>Learn tricks</h3>
            <br />
            <h5>Hang up a times table sheet</h5>
            <img className="time-table" src="/static/images/times-table.jpg" />
            <br />
            <br />
            <p>
              This is an old technique but it’s very effective. Print one out
              and begin to fill in the individual boxes. The next step is to
              hang this out where you will see it such as fridge door or in your
              bedroom. Next is to through the table and make games with learning
              with yourself or with a friend.
            </p>
            <p>
              One of the great things about math is that it’s full of tips and
              tricks – and times tables are no different. Our favorite trick
              involves using your fingers to figure out nine times tables. Start
              by spreading all 10 fingers in front of you. To figure out 9×1,
              put your left pinky down. What are you left with? 9 fingers! For
              9×2 put your left ring-finger down. What are you left with? 1
              finger and a gap followed by 8 fingers or 18. This trick works up
              to 9×9 (8 and 1 or 81). Check down below to see a video tutorial.
            </p>
            <br />
            <p>Use the table above to do the following calculation</p>
            <div className="text-center">
              <p>What is</p>
              <p style={{ fontSize: "x-large" }}>11 x 12</p>
              <label>The answer is:</label>
              <input type="text" value="132" hidden />
              <input
                name="intextanswer"
                type="text"
                onChange={(e) => setAnswer(e.target.value)}
              />
              <h1>
                {answer === "132"
                  ? "Well done!"
                  : answer > 0 && answer != 132
                  ? "try again"
                  : null}
              </h1>
            </div>
            <h5> The Waldorf multiplication flower method</h5>
            <img
              className="Waldorf"
              src="/images/Waldorf.jpg"
              style={{ marginLeft: "140px" }}
            />
            <p>
              One creative method is to do the Waldorf flower method. Begin this
              activity by drawing the center of the flower, in which you write a
              number between 2 and 12. Then draw 12 petals around the center,
              with each petal containing the numbers 1 through 12. The last step
              is to draw another set of 12 petals which contain the center
              number multiplied by each petal in the inner circle. This will be
              a creative method of learning and will help you learn them easier
              and make them more fun!
            </p>
            <h5>Order doesn't matter</h5>
            <p>
              When we multiply two numbers,it does not matter which is first or
              second as the answer will is always the same.
            </p>
            <br />
            <div
              className="ExampleBoarder text-center"
              style={{ width: "160px", marginLeft: "329px" }}
            >
              <h6>
                <b>Example</b>
              </h6>
            </div>
            <p>
              2 x 5 = <b> 5 x 2 </b> = 10
            </p>
            <p>
              6 x 4 = <b> 4 x 6 </b> = 24
            </p>
            <p>
              Always choose the number that you are most confortable with. For
              example, if you prefer your 2 times table over 5, then count up in
              2's.
            </p>
            <h5>Example</h5>

            <div className="text-center">
              <p>For this, write down what you think the answer is</p>
              <b>8 x 6</b>
              <div className="row align-items-center justify-content-center">
                <p>You should get:</p>
                <div id="DivForHoverItem">
                  <div id="HiddenText">
                    <p>48</p>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="LongMutltiplication ">
              <h3 style={{ color: "#FC9246" }}>Long Multiplication</h3>
              <br />
              <h5>What is long multiplication</h5>
              <p>
                Long multiplication (or column multiplication) is a written
                method of multiplying numbers (usually a two- or three-digit
                number by another large number). Once you are confortable with
                your times table, you can begin to multiply two digit numbers.
                Lets first go through an example.
              </p>
              <br />
              <div
                className="ExampleBoarder text-center"
                style={{ width: "160px", marginLeft: "329px" }}
              >
                <h6>
                  <b>Example</b>
                </h6>
              </div>
              <p>Let use 123 x 12 as our example.</p>
            </div>
            <p>
              Begin by arranging the numbers on top of one other and line up the
              place values in column. The number with the the most digits is
              usually placed on top.
            </p>
            <br />
            <p>
              Start with the one digits of the bottom number and multiply it
              with the last digit in the top number. In this example, we begin
              by doing 3 x 2 = 6. You then write the answers down below in the
              next coloumn.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/pt1Multip.png" />
            </div>
            <p>
              We then multiply the unit number on the bottom with all the digits
              on the top. So in the example, we then do 2 x 2 =4. If the answer
              is greater than 9, you carry the tens digits into the next column.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/pt2Multip.png" />
            </div>
            <p>
              Finally, we do the final multiplication for the unit column. We do
              2 x 1 = 2. This leaves us with 246 when we multiply 2 (unit) with
              all the columns on the top.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/pt3Multip.png" />
            </div>
            <p>
              The next stage is to move onto the tens digit in the bottom
              numbers and multiply with all the numbers above. When multiplying,
              you then place the answers into the tens row shifting the answers
              one digit place to the left. So in the example, we do 1 x 3 = 3
              and place 3 into the tens coloumn.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/pt4Multip.png" />
            </div>
            <p>
              We do the same as we then do the calcultion of 1 x 2 = 2. This
              answer then gets placed into the next column.
            </p>
            <div className="col-lg-12 text-center">
              <img src="/static/images/pt5Multip.png" />
            </div>
            <p>
              The final calculation is 1 x 1 = 1. Place this into the next
              column. Once all the multiplication is done, you will see two
              brand new numbers in another column. In the example, we can see
              it's 246 and 1230. With these numbers, use
              <b url="/courses/numbers/addition"> Long addition </b> to add the
              numbers from right to left, carrying out as you normally would do
              for long addition.
            </p>
            <div className="col-lg-12 ">
              <img
                src="/static/images/pt6Multip.png"
                style={{ marginLeft: "70px" }}
              />
            </div>
            <br />
            <p>
              From doing long multiplication, we have figured out that 123 x 12
              = 1476.
            </p>
          </div>
        </div>
        <br />
        <p className="text-center">
          To see a simples multiplication trick for your 9 times tables, watch
          the video below!
        </p>

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="jEIeFV4oMp4" opts={opts} />
          </div>
        </div>

        <h3 style={{ color: "#FC9246" }}>A quiz!</h3>
        <p>If you are ready to do a quiz click the link below!</p>
        <div className="row">
          <div className="col-lg-12 text-center">
            <a
              href="/courses/numbers/multiplicationquiz"
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
              href="../../../static/worksheets/NUMBERS/MULTIPLICATION/MultiplicationSheet.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Multiplication worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/NUMBERS/MULTIPLICATION/MultiplicationAnswers.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Multiplication worksheet answers
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/NUMBERS/LONGMULTIPLICATION/LongMultiSheet.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Long Multiplication worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/NUMBERS/LONGMULTIPLICATION/LongMultiAnswers.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Long Multiplication worksheet answers
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/NUMBERS/MULTIPLICATION/empty-timestable.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              An empty Timestable
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default multiplication;
