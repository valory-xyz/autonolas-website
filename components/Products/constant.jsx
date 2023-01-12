/* eslint-disable react/prop-types */
// https://github.com/valory-xyz/apy-oracle

const LinkTo = ({ url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const ML_APY_PREDICTION_ORACLE_DETAILS = {
  id: 'ml-apy-prediction-oracle',
  icon: 'custom-oracle.png',
  image: 'custom-oracle.png', // TODO: Camelia to send
  name: 'ML APY Prediction Oracle',
  description:
    'The ML APY Prediction Oracle uses an Autonolas-powered off-chain service to make predictions about the APY of LP pools on various DEXes built with Uniswap v2 contracts.',
  primaryBtnText: 'See demo',
  primaryLink: 'https://oracle.autonolas.network/ml-apy-prediction',
  runTheCodeLink: '',
  buildYourOwnLink: (
    <>
      “Fork&nbsp;
      <LinkTo url="https://github.com/valory-xyz/apy-oracle">the code</LinkTo>
      ,
      make adjustments and run your service. For help with any of these steps,
      refer to onboarding services such as [Valory
      Propel](https://propel.valory.xyz).
    </>
  ),
};

export const PRICE_ORACLE_DETAILS = {
  id: 'price-oracle',
  imageFilename: 'price-oracle.png',
  image: '', // TODO: Camelia to send
  name: 'Price Oracle',
  description:
    'The Price Oracle uses an Autonolas-powered off-chain service to pull data from multiple centralized sources, aggregate it and write the aggregate to the Polygon blockchain. It uses the BTC/USD price feed as a demonstration, sourced from Kraken, CoinGecko, Binance and Coinbase..',
  primaryBtnText: 'See demo',
  primaryLink: 'https://oracle.autonolas.network/ml-apy-prediction',
  runTheCodeLink: '',
  buildYourOwnLink: '',
};

export const Products = () => [ML_APY_PREDICTION_ORACLE_DETAILS];
