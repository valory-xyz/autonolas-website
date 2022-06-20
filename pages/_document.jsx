import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
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
          <link href="/fonts/Webfont/stylesheet.css" rel="stylesheet" />
          <link href="/fonts/NeueMachina/stylesheet.css" rel="stylesheet" />
          <link href="/fonts/Manrope/stylesheet.css" rel="stylesheet" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          {styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
