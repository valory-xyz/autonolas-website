import React from 'react';
import Banner from './0Common/Banner';
import BirthPlace from './1BirthPlace';
import WhyAutonolas from './2WhyAutonolas';
import WhatIsAutonolas from './3WhatIsAutonolas';
import WhatAreWeBuilding from './4WhatAreWeBuilding';
import YourHeadstartIn from './5YourHeadstartIn';
import AcceleratedLearning from './6AcceleratedLearning';
// import DoYourLifesWork from './7DoYourLifesWork';
// import PhaseShiftInDapp from './8PhaseShiftInDapp';
// import Lore from './9Lore';
// import About from './10About';

import { GlobalStyle, Container } from './styles';

const HomePage = () => (
  <>
    <Container data-testid="home-page">
      <Banner />
      <BirthPlace />
      <WhyAutonolas />
      <WhatIsAutonolas />
      <WhatAreWeBuilding />
      <YourHeadstartIn />
      <AcceleratedLearning />
      {/* <Lore /> */}
      {/* <PhaseShiftInDapp /> */}
      {/* <DoYourLifesWork /> */}
      {/* <About /> */}
    </Container>
    <GlobalStyle />
  </>
);

export default HomePage;
