import React from 'react';
import { GlobalStyle, Container } from './styles';

const HomePage = () => (
  <>
    <Container data-testid="home-page">
      <h1>
        Autonolas Website
      </h1>
    </Container>
    <GlobalStyle />
  </>
);

export default HomePage;
