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

const additiontips = () => {
  return (
    <DefaultLayout>
      <Hero title="Addition Tips and Tricks" extraShortBanner centreAllign />
      <div style={styles.wrapper}>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => Router.back()}
        >
          Go Back
        </p>
        <div>
          <div className="col-lg-12 ">
            <h3 style={{ color: "#FC9246" }}>Compensation Method</h3>
            <p>
              The compensation method is where you round up a number (to make
              adding easier) and then take away the extra after you have added.
            </p>
            <div
              className="ExampleBoarder text-center"
              style={{ width: "160px", marginLeft: "329px" }}
            >
              <h5>Example</h5>
              <b>39 + 13 </b>
            </div>
            <p>
              It's easier to do <b style={{ color: "orange" }}>40</b> + 13 = 53
            </p>
            <p>
              Then take away the extra 1 (that made 39 to 40) to get: <b>35</b>
            </p>
            <div
              className="ExampleBoarder text-center"
              style={{ width: "205px", marginLeft: "305px" }}
            >
              <h5>Another Example</h5>
              <b>692 + 234</b>
            </div>
            <p>
              It's easier to do <b style={{ color: "orange" }}>700</b> + 234 =
              934
            </p>
            <p>
              Then take away the extra 8 (that made 692 to 700) to get:{" "}
              <b>926</b>
            </p>
            <br />
            <h3 style={{ color: "#FC9246" }}>Benchmarks</h3>
            <p>
              Another method which you can use is benchmarks. Benchmark is a
              convenient number we can use as a resting point in the middle of a
              problem, usually a multiple of ten.
            </p>
            <p>Suppose we want to add 15 + 8.</p>
            <div className="text-center">
              <img src="/static/images/15+8.png" />
            </div>
            <p>
              We will use the number 20 as a benchmark, so break 8 into 5 + 3.
            </p>
            <div className="text-center">
              <img src="/static/images/15+5+3.png" />
            </div>
            <p>Combine 15 + 5 first to get to our benchmark of 20.</p>
            <div className="text-center">
              <img src="/static/images/20+3.png" />
            </div>
            <p>You then do the final addition.</p>
            <div className="text-center">
              <img src="/static/images/20+3(2).png" />
            </div>
            <br />
            <br />
            <h3 style={{ color: "#FC9246" }}>Breaking Apart By Place Value</h3>
            <div className="text-center">
              <img src="/static/images/12+88.png" />
            </div>
            <p>
              To solve this problem, we’ll break the numbers apart by place
              value. Twelve is equivalent to 1 ten and 2 ones and eighty-eight
              is equivalent to 8 tens and 8 ones. Using the place values, we can
              be represent the addition in expanded form.
            </p>
            <div className="text-center">
              <img src="/static/images/10+2+80+8.png" />
            </div>
            <p>
              Addition is commutative, meaning we can rearrange the order
              without changing the answer. This allows us to move numbers around
              as we need. Group the tens and the ones together respectively.
            </p>
            <div className="text-center">
              <img src="/static/images/10+80+2+8.png" />
            </div>
            <p>Notice 8 + 2 = 10. Adding in 10's is much easier to do.</p>
            <div className="text-center">
              <img src="/static/images/10+80+10.png" />
            </div>
            <p>We then do the final calculation.</p>
            <div className="text-center">
              <img src="/static/images/80+10+10.png" />
            </div>
            <p>
              Of course this isn’t the only way to break apart the numbers. We
              could also break off 2 from 12 and add it to 88 first.
            </p>
            <div className="text-center">
              <img
                src="/static/images/pt1Tips.png"
                style={{ width: "720px" }}
              />
            </div>
            <p>Or we could break off 8 from 88 and combine it with 12 first.</p>
            <div className="text-center">
              <img
                src="/static/images/pt2Tips.png"
                style={{ width: "720px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default additiontips;
