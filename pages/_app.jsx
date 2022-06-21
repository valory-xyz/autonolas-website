import App from 'next/app';
import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import GlobalStyle from 'components/GlobalStyles';
import Layout from 'components/Layout';
import initStore from '../store';
import './styles.less';

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
            }
          `}
        </style>
        <Head>
          <title>Autonolas | Let’s Put the ‘A’ Back in DAO</title>
          <meta
            name="description"
            content="Autonolas enables DAOs to put an autonomous software service at the heart of their off-chain operations."
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
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

/* MyApp.defaultProps = {
  resetOnModalCloseFn: () => {},
}; */

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);
