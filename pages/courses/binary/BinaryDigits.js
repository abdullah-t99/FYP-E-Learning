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

const binaryDigits = () => {
  const [answer, setAnswer] = useState("");

  return (
    <DefaultLayout>
      <Hero title="Binary Digits" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div className="row">
          <h3 style={{ color: "#FC9246" }}>What is binary</h3>
        </div>
        <p>
          Binary is a <b>base 2</b> number system invented by Gottfried Leibniz
          that is made up of only two numbers: <b>0 and 1.</b> This number
          system is the basis for all binary code, which is used to write data
          such as the computer processor instructions used every day.
        </p>

        <br />
        <h5>Subscripts</h5>
        <p>
          Decimal and binary are two different number formats. Binary is base 2
          number system. It is base 2 because it uses two possible numbers: 0
          and 1. Decimal, the system most of the world uses for daily life, is a
          base 10 system – it uses 10 characters (0–9). When binary numbers are
          written, a subscript "(2)" is added to distinguish them from the same
          number in base 10.
        </p>
        <p className="text-center" style={{ fontSize: "xx-large" }}>
          <b>
            2<sub>10</sub> =
          </b>
          <b style={{ color: "orange" }}>
            01<sub>2</sub>
          </b>
        </p>
        <p className="text-center">
          Binary 01, indicated by a subscript 2, is equivalent to decimal 2
          (notice the subscript 10).
        </p>
        <h5>Counting in Binary</h5>
        <p>
          To know how binary works and understand what number it is, you first
          need to know the expononent for each part so you can convert it into
          decimals. Whereas hexadecimals are 16 for each position, binary it is
          multiplied by 2 for each position. Lets go through an example and see
          how it is done.
        </p>
        <img
          src="/static/images/binaryExample.png"
          style={{ marginLeft: "300px" }}
        />
        <br />
        <br />
        <p>
          The decimal value of the binary number 10110101 is 1+4+16+32+128=181
        </p>
        {/* TEST */}

        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          <b>Example</b>
          <p>What is the decimal value of the binary number "100011"</p>
        </div>
        <p>
          To begin lets first begin to put it into a table and find out which
          exponent we have to multiply to get the number.
        </p>

        <table class="dtable" style={{ marginLeft: "340px" }}>
          <tbody>
            <tr>
              <th>binary number:</th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <th>power of 2:</th>
              <td>
                2<sup>5</sup>
              </td>
              <td>
                2<sup>4</sup>
              </td>
              <td>
                2<sup>3</sup>
              </td>
              <td>
                2<sup>2</sup>
              </td>
              <td>
                2<sup>1</sup>
              </td>
              <td>
                2<sup>0</sup>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p class="text-center">
          100011<sub>2</sub> = 1 x 2<sup>5</sup>+0 x 2<sup>4</sup>+0 x 2
          <sup>3</sup>
          +0 x 2<sup>2</sup>+1 x 2<sup>1</sup>+1 x 2<sup>0</sup> = 35
          <sub>10</sub>
        </p>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          {" "}
          <b>Example 2 </b>
          <p>What is the decimal value of the binary number "11100011"</p>
        </div>
        <br />

        {/* TEST */}

        <table class="dtable" style={{ marginLeft: "340px" }}>
          <tbody>
            <tr>
              <th>binary number:</th>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <th>power of 2:</th>
              <td>
                2<sup>7</sup>
              </td>
              <td>
                2<sup>6</sup>
              </td>
              <td>
                2<sup>5</sup>
              </td>
              <td>
                2<sup>4</sup>
              </td>
              <td>
                2<sup>3</sup>
              </td>
              <td>
                2<sup>2</sup>
              </td>
              <td>
                2<sup>1</sup>
              </td>
              <td>
                2<sup>0</sup>
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <p class="text-center">
          11100011<sub>2</sub> = (1 x 2<sup>7</sup>)+ (1 x 2<sup>6</sup>)+ (1 x
          2<sup>5</sup>)+ (1 x 2<sup>1</sup>)+ (1 x 2<sup>0</sup>)
        </p>
        <p className="text-center">= 128 + 64 + 32 + 2 + 1</p>
        <p className="text-center">= 227</p>
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          {" "}
          <b>Example 3 </b>
          <p>What is the decimal value of the binary number "1011111111"</p>
        </div>
        <br />

        <div className="text-center">
          <label>The answer is:</label>
          <input type="text" value="767" hidden />
          <input
            name="intextanswer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <h1>
            {answer === "767"
              ? "Well done!"
              : answer > 0 && answer != 767
              ? "try again"
              : null}
          </h1>
        </div>

        <h3 style={{ color: "#FC9246" }}>Convert Binary to Hexadecimals</h3>
        <p>
          This is easy because 16 = 2<sup>4</sup>. To do it, begin by putting
          binary in blocks of 4. If you can't put it in blocks of 4, then add 0
          to fill it in. Let's see how its done through some examples.
        </p>
        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          {" "}
          <b>Example</b>
          <p>What is 1101001101111 as a hexadecimal</p>
        </div>
        <br />
        <p>
          To begin, lets but the numbers in blocks of 4 starting from the right
          to left.
        </p>
        <p className="text-center">(1) (1010) (0110) (1111)</p>
        <p>
          As you can see, the last block only has 1 number so we add three 0
          before it. So it now looks like this:
        </p>
        <p className="text-center">(0001) (1010) (0110) (1111)</p>
        <p>
          you then convert each of these blocks into a number and then convert
          them into hexadecimals if it's 10 and over.
        </p>
        <img
          src="/static/images/binattohexadecimal.png"
          style={{ width: "600px", marginLeft: "200px" }}
        />
        <br />
        <br />
        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          <b>Example 2</b>
          <p>What is 11111011101110010 as a hexadecimal</p>
        </div>
        <br />
        <img
          src="/static/images/example2.png"
          style={{ width: "450px", marginLeft: "200px" }}
        />
        <br />

        <div
          className="ExampleBoarder text-center"
          style={{ width: "332px", marginLeft: "270px" }}
        >
          {" "}
          <b>Example 3 </b>
          <p>What is "10011011" as a hexadecimal</p>
        </div>
        <br />

        <div className="text-center">
          <p>Try this out on paper</p>
          <div className="row align-items-center justify-content-center">
            <p>You should get:</p>
            <div id="DivForHoverItem">
              <div id="HiddenText">
                <p>9B</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 text-center">
            <YouTube videoId="Ieq8AR8krrA" opts={opts} />
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
              href="../../../static/worksheets/BINARY/TONUMBERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Binary to Decimal worksheet
            </a>
          </div>
          <div className="col-lg-12 text-center">
            <a
              href="../../../static/worksheets/BINARY/TONUMBERSANSWERS.pdf"
              target="_blank"
              style={{ fontSize: "x-large" }}
            >
              Binary to Decimal answers
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default binaryDigits;
