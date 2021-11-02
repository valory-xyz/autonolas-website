module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'components/HomePage/*.{js,jsx}',
    '!components/HomePage/**/styles.{js,jsx}',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
