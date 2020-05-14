import "./footer.css";

const DefaultFooter = () => (
  <section id="footer">
    <div className="container">
      <div
        className="row text-center text-xs-center text-sm-left text-md-left"
        style={{ marginLeft: "500px" }}
      >
        <div className="col-xs-12 col-sm-4 col-md-4 ">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li>
              <a href="/">
                <i className="fa fa-angle-double-right" />
                Home
              </a>
            </li>
            <li>
              <a href="/about">
                <i className="fa fa-angle-double-right" />
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <p className="text-center text-white">
            Join the Maths Squared family on social media to get more
            information.
          </p>
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/pg/Maths-Squared-106449011033191"
                target="_blank"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/MathsSquared" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/mathssquared/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:maths-squared@outlook.com" target="_blank">
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>
            Contact us at{" "}
            <a href="mailto:maths-squared@outlook.com">
              Maths-Squared@outlook.com
            </a>
          </p>
          <p className="h6">© 2020 Maths Squared | All Rights Reserved</p>
        </div>
        <hr />
      </div>
    </div>
  </section>
);

export default DefaultFooter;
