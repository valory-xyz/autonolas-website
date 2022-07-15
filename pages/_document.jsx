import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      App => props => sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <Html lang="en">
        <Head>
          <link href="/fonts/TeX-Gyre-Heros/stylesheet.css" rel="stylesheet" />
          <link href="/fonts/NeueMachina/stylesheet.css" rel="stylesheet" />
          <link href="/fonts/Manrope/stylesheet.css" rel="stylesheet" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          {styleTags}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (
                  function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3066018,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv='
                );
              `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
