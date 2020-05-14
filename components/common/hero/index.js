import React from "react";
import "./hero.css";

const Hero = ({ title, subTitle, ctaText }) => {
  return (
    <>
      {/* <div class="container-fluid bg-overlay">
        <div class="row text-center">
          <h1>
            This is a beautiful background image
            <br /> with a transparent overlay.
          </h1>
          <h4>
            You can just use the "<strong>.bg-overlay</strong>" class on any
            container/element,
            <br />
            and specify the image you want to use and its height.
          </h4>
          <br />
          <br />
          <button type="button" class="btn btn-primary btn-lg">
            Get Started
          </button>
        </div>
      </div> */}
      <div className="jumbotron bg-overlay">
        <h1
          className="display-4"
          style={{ marginTop: "150px", textAlign: "center" }}
        >
          {title}
        </h1>
        <p className="lead" style={{ textAlign: "center" }}>
          {subTitle}
        </p>
        <hr className="my-4" />
        {/* <p className="lead">
          <a
            className="btn btn-outline-light btn-lg"
            href="#"
            role="button"
            style={{ textAlign: "center" }}
          >
            Learn more
          </a>
        </p> */}
      </div>
    </>
  );
};

export default Hero;
