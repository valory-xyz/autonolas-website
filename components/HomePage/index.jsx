import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Banner from './0Common/Banner';
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

const Navigation = dynamic(() => import('./0Common/Navigation'), {
  ssr: false,
});

const HomePage = () => {
  const [isNavigationOpen, setNavigationToggle] = useState(false);

  return (
    <>
      <Banner />
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setNavigationToggle={setNavigationToggle}
      />
      <Container data-testid="home-page">
        <BirthPlace isNavigationOpen={isNavigationOpen} />

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

      <GlobalStyle isNavigationOpen={isNavigationOpen} />
    </>
  );
};

export default HomePage;
