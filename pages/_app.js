import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { ga } from "../helpers";

if (process.browser) {
  Router.events.on("routeChangeComplete", url => ga.pageview(url));
}

class MyApp extends App {
  static propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .isRequired,
    pageProps: PropTypes.shape({})
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Maths Squared | Maths ... Yep that's it</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
