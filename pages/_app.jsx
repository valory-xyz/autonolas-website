import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { BREAK_POINT } from 'util/theme';
import {
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_TITLE,
  SITE_METATAG_IMAGE,
} from 'common-util/site-constants';
import GlobalStyle from 'components/GlobalStyles';
import Layout from 'components/Layout';
import initStore from '../store';
import './styles.less';

const MyApp = ({ Component, pageProps }) => (
  <>
    <style global jsx>
      {`
        body {
          margin: 0;
          font-family: "manrope__regular", sans-serif;
          line-height: 1.35;
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
      {/* Tell the browser to never restore the scroll position on load */}
      <script
        dangerouslySetInnerHTML={{
          __html: 'history.scrollRestoration = "manual"',
        }}
      />
      <title>{SITE_TITLE}</title>
      <meta name="description" content={SITE_DESCRIPTION} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:image" content={SITE_METATAG_IMAGE} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={SITE_URL} />
      <meta property="twitter:title" content={SITE_DESCRIPTION} />
      <meta property="twitter:description" content={SITE_DESCRIPTION} />
      <meta property="twitter:image" content={SITE_METATAG_IMAGE} />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <GlobalStyle />
  </>
);

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps, store: ctx.store.getState() };
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})])
    .isRequired,
  pageProps: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
};

/* MyApp.defaultProps = {
  resetOnModalCloseFn: () => {},
}; */

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);
