import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { DefaultLayout } from "../components/layout";
import Hero from "../components/common/hero";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40,
  },
};

class Home extends PureComponent {
  // static propTypes = {
  //   userAgent: PropTypes.string.isRequired,
  // };

  static async getInitialProps({ req }) {
    // const userAgent = req ? req.headers['user-agent'] : window.navigator.userAgent; // eslint-disable-line no-undef
    // return { userAgent };
  }

  render() {
    // const { userAgent } = this.props;
    return (
      <DefaultLayout>
        <main>
          <Hero
            title=" Unlock your hidden knowledge here at 
          Maths Squared!"
            subTitle=" We’re a nonprofit organisation where our mission is to provide 
          free, top-quality education for anyone, anywhere!"
          />
          <section
            id="about-section"
            className="about-section sec-ptb-130 clearfix"
          >
            <div className="container">
              <div className="section-title mb-60 text-center">
                <h3 className="sub-title mb-30">ABOUT US</h3>
                <h2 className="title-text mb-30" style={{ color: "#FC9246" }}>
                  Join The Maths Squared Family
                </h2>
                <p className="mb-0">
                  We provide a number of outstanding features so our users feel
                  confortable and are ready to learn.
                </p>
              </div>

              <div className="row justify-content-lg-around">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="about-item-grid text-center clearfix">
                    <div className="about-image">
                      <img
                        className="about-image"
                        style={{ marginBottom: "8px" }}
                        src="/static/icons/personalized-learning.png"
                      />
                    </div>
                    <h3 className="item-title mb-30">Personalized Learning</h3>
                    <p className="mb-0">
                      Students are able to practice learning at their own pace
                      with no teachers over looking helping them to accelerate
                      their learning forward.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="about-item-grid text-center clearfix">
                    <div className="about-image">
                      <img
                        className="about-image"
                        src="static/icons/content.png"
                        alt="image_not_found"
                      />
                    </div>
                    <h3 className="item-title mb-30">Trusted Content</h3>
                    <p className="mb-0">
                      Created by experts, Maths Squared content cover a huge
                      variety of topics for all stages of Maths all of which is
                      free for access for leaners and users.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="about-item-grid text-center clearfix">
                    <div className="about-image">
                      <img
                        className="about-image"
                        src="/static/icons/video.png"
                        alt="image_not_found"
                      />
                    </div>
                    <h3 className="item-title mb-30">Indepth Videos</h3>
                    <p className="mb-0">
                      We provide indepth videos for each modules going into more
                      analysis to make sure that we can maximise your potential
                      for each module.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="feature-section" className="feature-section clearfix">
            <div className="container">
              <div className="feature-item clearfix">
                <div className="row justify-content-lg-between justify-content-md-center">
                  <div className="col-lg-5 col-md-6 col-sm-12 order-last">
                    <div className="feature-image text-center">
                      <img
                        className="feature-image1"
                        src="static/images/mathsSymbols.png"
                        alt="image_not_found"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-8 col-sm-12 d-flex">
                    <div className="feature-fontant">
                      <h3 className="item-title mb-30">Discover and Study</h3>
                      <p className="mb-0">
                        Explore a variety of topics from our list and choose a
                        topic of your choice and test and push yourself to fufil
                        your knowledge. All of which is accessible from a click
                        of a button.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-item clearfix">
                <div className="row justify-content-lg-between justify-content-md-center">
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="feature-image text-center">
                      <img
                        className="feature-image2"
                        src="images/students2.png"
                        alt="image_not_found"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-8 col-sm-12 d-flex">
                    <div className="feature-fontant">
                      <h3 className="item-title mb-30">For all Ages</h3>
                      <p className="mb-0">
                        Maths Squared offers everything you need to teach maths,
                        motivate today's students and provide a stable platform
                        for other maths-related subjects in KS2 and KS3.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-item clearfix">
                <div className="row justify-content-lg-between justify-content-md-center">
                  <div className="col-lg-5 col-md-6 col-sm-12 order-last">
                    <div className="feature-image text-center">
                      <img
                        className="feature-image3"
                        src="images/teacherDemostrate.jpg"
                        alt="image_not_found"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-8 col-sm-12 d-flex">
                    <div className="feature-fontant">
                      <h3 className="item-title mb-30">Accessible anywhere</h3>
                      <p className="mb-0">
                        Maths Squared is an interactive time-saving resource for
                        use in the classroom, at home or on the move that is
                        easy to use alongside any other maths resources to
                        strengthen their learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="service-section"
            className="service-section sec-ptb-130 clearfix"
          >
            <div className="container">
              <div className="section-title text-center mb-60">
                <h2 className="sub-title mb-30" style={{ color: "#FC9246" }}>
                  OUR SERVICES
                </h2>
                <h3 className="title-text mb-30">What we provide for you</h3>
                <p className="mb-0">
                  We have a huge range of courses for you too choose from so you
                  can begin to learn. Down below you can see the content
                  provided for you.
                </p>
              </div>

              <div className="service-items-wrapper text-center clearfix">
                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/numbers.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Numbers</h3>
                </div>

                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/decimals.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Decimals</h3>
                </div>

                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/percentages.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Percentages</h3>
                </div>

                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/fractions.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Fractions</h3>
                </div>

                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/algebra.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Algebra</h3>
                </div>

                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/hexadecimals.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Hexadecimals</h3>
                </div>

                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/binary.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Binary</h3>
                </div>

                <div className="service-item clearfix">
                  <div className="item-icon d-flex">
                    <img
                      className="item-icon"
                      src="images/quadratic.png"
                      alt="icon_not_found"
                      style={{ width: "50px", height: "50px", margin: "60px" }}
                    />
                  </div>
                  <h3 className="item-title mb-0">Quadratic</h3>
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    );
  }
}

export default Home;
