/* eslint-disable react/prop-types */

const LinkTo = ({ url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Propel = () => (
  <>
    “Fork&nbsp;
    <LinkTo url="https://github.com/valory-xyz/apy-oracle">the code</LinkTo>
    ,
    make adjustments and run your service. For help with any of these steps,
    refer to onboarding services such as&nbsp;
    <LinkTo url="https://propel.valory.xyz">Valory Propel</LinkTo>
    .
  </>
);

const PRODUCT_DOC_LINK = 'https://docs.autonolas.network/product';

/**
 * details for each product
 */

export const ML_APY_PREDICTION_ORACLE_DETAILS = {
  id: 'ml-apy-prediction-oracle',
  icon: 'custom-oracle.png',
  image: 'custom-oracle.jpg',
  name: 'ML APY Prediction Oracle',
  description:
    'The ML APY Prediction Oracle uses an Autonolas-powered off-chain service to make predictions about the APY of LP pools on various DEXes built with Uniswap v2 contracts.',
  primaryBtnText: 'See demo',
  primaryLink: 'https://oracle.autonolas.network/ml-apy-prediction',
  runTheCodeLink: `${PRODUCT_DOC_LINK}/ml-apy-prediction#run-the-code`,
  buildYourOwnLink: Propel,
};

export const PRICE_ORACLE_DETAILS = {
  id: 'price-oracle',
  icon: 'price-oracle.png',
  image: 'price-oracle.jpg',
  name: 'Price Oracle',
  description:
    'The Price Oracle uses an Autonolas-powered off-chain service to pull data from multiple centralized sources, aggregate it and write the aggregate to the Polygon blockchain. It uses the BTC/USD price feed as a demonstration, sourced from Kraken, CoinGecko, Binance and Coinbase..',
  primaryBtnText: 'See demo',
  primaryLink: 'https://oracle.autonolas.network/price',
  runTheCodeLink: `${PRODUCT_DOC_LINK}/price#run-the-code`,
  // buildYourOwnLink: `${PRODUCT_DOC_LINK}/ml-apy-prediction-oracle}`,
  buildYourOwnLink: Propel,
};

export const AUTONOLAS_CONTRIBUTE_DETAILS = {
  id: 'autonolas-contribute',
  icon: 'contribute.png',
  image: 'contribute.jpg',
  name: 'Autonolas Contribute',
  description:
    'Contribute is a system for tracking contributions to the Autonolas DAO, ranking people by their contributions and enabling them to display their position through a dynamically updated NFT badge.',
  primaryBtnText: 'Get Started',
  primaryLink: 'https://contribute.autonolas.network',
  runTheCodeLink: `${PRODUCT_DOC_LINK}/autonolas-contribute#run-the-code`,
  buildYourOwnLink: Propel,
};

// TODO
export const OPEN_AUTONOMY_DETAILS = {
  id: '',
  imageFilename: '',
  image: '',
  name: '',
  description: '',
  primaryBtnText: '',
  primaryLink: '',
  runTheCodeLink: '',
  buildYourOwnLink: Propel,
};

export const PROTOCOL_DETAILS = {
  id: '',
  imageFilename: '',
  image: '',
  name: '',
  description: '',
  primaryBtnText: '',
  primaryLink: '',
  runTheCodeLink: '',
  buildYourOwnLink: Propel,
};

export const SMART_MANAGED_POOLS_DETAILS = {
  id: '',
  imageFilename: '',
  image: '',
  name: '',
  description: '',
  primaryBtnText: '',
  primaryLink: '',
  runTheCodeLink: '',
  buildYourOwnLink: Propel,
};
