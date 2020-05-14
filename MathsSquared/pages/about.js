import React, { PureComponent } from "react";
import { DefaultLayout } from "../components/layout";
import Router from "next/router";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40
  }
};

// eslint-disable-next-line react/prefer-stateless-function
class About extends PureComponent {
  render() {
    return (
      <DefaultLayout>
        <div style={styles.wrapper}>
          <h1>About</h1>
          <br />
          <div className="container">
            <div className="section-title mb-60 text-center">
              <h1 className="title-text mb-30" style={{ color: "#FC9246" }}>
                WHO WE ARE
              </h1>
              <p>
                Here at Maths Squared, we got a team of educational experts,
                developers, designers and writers who are extremely passionate
                about creating innovative and engaging content for users to
                learn.
              </p>
              <br />
              <h2 className="sub-title mb-30" style={{ color: "#FC9246" }}>
                Our Aim
              </h2>
              <p className="mb-0">
                Our main mission is to create the best learning experience for
                children, both at home and at school. This is so the student
                feels confortable in their environment.
              </p>
            </div>
          </div>

          <section>
            <div className="container">
              <div className="section-title mb-60 text-center">
                <h1 className="sub-title mb-30" style={{ color: "#FC9246" }}>
                  A Universal Classroom
                </h1>
                <p>
                  Here at Maths Squared, you will be joining millions of
                  students all around the world, each with a different
                  background as to how they came here. All these resources
                  available will give users the opportunity to learn at their
                  own pace.
                </p>
              </div>
            </div>
          </section>

          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            style={{
              // backgroundColor: "#f5b642",
              height: "500px"
            }}
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div
                  class="col-xs-1 center-block text-center"
                  style={{ padding: "185px", backgroundColor: "#f5b642" }}
                >
                  <p style={{ fontSize: "x-large" }}>
                    “When I was a child, I used to fear mathematics and I hated
                    maths due to my lack of understanding. But now, I am in love
                    with maths because of Maths Squared.”
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  class="col-xs-1 center-block text-center"
                  style={{ padding: "195px", backgroundColor: "#f09875" }}
                >
                  <p style={{ fontSize: "x-large" }}>
                    "Maths Squared has taught me so much about maths in a
                    variety of topics which before I was never confident in. The
                    content was so straight up and was easy to follow."
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  class="col-xs-1 center-block text-center"
                  style={{ padding: "196px", backgroundColor: "#a85a32" }}
                >
                  <p style={{ fontSize: "x-large" }}>
                    "As I access Maths Squared anywhwere on the go, I was able
                    to refresh my memory on any topics I wasn't confident on
                    before my tests in school."
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <br />
          <p
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => Router.back()}
          >
            Go Back
          </p>
        </div>
      </DefaultLayout>
    );
  }
}

export default About;
