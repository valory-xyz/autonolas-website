import App from 'next/app';
import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { BREAK_POINT } from 'util/theme';
import GlobalStyle from 'components/GlobalStyles';
import Layout from 'components/Layout';
import initStore from '../store';
import './styles.less';

const siteTitle = "Autonolas | Build Autonomous Services"
const siteDescription = "Build, run and own autonomous services that power next-gen apps for crypto users and DAOs."
const siteUrl = "https://autonolas.network"
const siteMetatagImage = "/images/site-metadata/site-metatag.png"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps, store: ctx.store.getState() };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <style global jsx>
          {`
            body {
              margin: 0;
              font-family: "manrope__regular", sans-serif;
              overscroll-behavior: none;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-size: 18px;
            }
            @media only screen and (max-width: ${BREAK_POINT.sm}) {
              body {
                font-size: 16px;
              }
            }
          `}
        </style>
        <Head>
          <title>{siteTitle}</title>
          <meta
            name="description"
            content={siteDescription}
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:title" content={siteTitle} />
          <meta
            property="og:description"
            content={siteDescription}
          />
          <meta
            property="og:image"
            content={siteMetatagImage}
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={siteUrl}
          />
          <meta property="twitter:title" content={siteDescription} />
          <meta
            property="twitter:description"
            content={siteDescription}
          />
          <meta
            property="twitter:image"
            content={siteMetatagImage}
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.shape({}).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

/* MyApp.defaultProps = {
  resetOnModalCloseFn: () => {},
}; */

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);
