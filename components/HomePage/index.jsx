import React from 'react';
import Banner from './0Common/Banner';
// import Navigation from './1BirthPlace/Navigation';
import BirthPlace from './1BirthPlace';
import WhyAutonolas from './2WhyAutonolas';
import WhatIsAutonolas from './3WhatIsAutonolas';
import WhatAreWeBuilding from './4WhatAreWeBuilding';
import YourHeadstartIn from './5YourHeadstartIn';
import AcceleratedLearning from './6AcceleratedLearning';
import DoYourLifesWork from './7DoYourLifesWork';
import PhaseShiftInDapp from './8PhaseShiftInDapp';
import Lore from './9Lore';
import About from './10About';
import JoinTheOlasTribe from './11JoinTheOlasTribe';

import { GlobalStyle, Container } from './styles';

const HomePage = () => (
  <>
    <Banner />
    <Container data-testid="home-page">
      {/* <Navigation /> */}
      <BirthPlace />
      <WhyAutonolas />
      <WhatIsAutonolas />
      <WhatAreWeBuilding />
      <YourHeadstartIn />
      <AcceleratedLearning />
      <DoYourLifesWork />
      <PhaseShiftInDapp />
      <Lore />
      <About />
      <JoinTheOlasTribe />
    </Container>
    <GlobalStyle />
  </>
);

export default HomePage;
