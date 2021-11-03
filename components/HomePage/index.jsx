import React from 'react';
// import SectionOneBirthPlace from './SectionOneBirthPlace';
import { GlobalStyle, Container } from './styles';

const HomePage = () => (
  <>
    <Container data-testid="home-page">
      {/* <SectionOneBirthPlace /> */}
      <h1>
        Autonolas Website
      </h1>
    </Container>
    <GlobalStyle />
  </>
);

export default HomePage;
