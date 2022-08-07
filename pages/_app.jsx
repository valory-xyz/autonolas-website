import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { BREAK_POINT } from 'util/theme';
import { SITE_TITLE, SITE_DESCRIPTION } from 'util/constants';
import Meta from 'common-util/meta';
import GlobalStyle from 'components/GlobalStyles';
import Layout from 'components/Layout';
import CookieConsentBanner from 'components/CookieConsentBanner';
import initStore from '../store';
import './styles.less';

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    hotjar.initialize(3066018, 6);
  }, []);

  return (
    <>
      <style global jsx>
        {`
          body {
            margin: 0;
            font-family: "manrope__regular", sans-serif;
            line-height: 1.35;
            overscroll-behavior: none;
            text-rendering: optimizeLegibility;
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
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />


        <Meta pathname={router.pathname} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <CookieConsentBanner />
      <GlobalStyle />
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx, router }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps, store: ctx.store.getState(), router };
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})])
    .isRequired,
  pageProps: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

/* MyApp.defaultProps = {
  resetOnModalCloseFn: () => {},
}; */

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);
