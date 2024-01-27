import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';

import Header from 'common-util/Header';
import WhatIsAutonolas from './2WhatIsAutonolas';
import DecentralizedAndSophisticated from './3DecentralizedAndSophisticated';
import HowDoAutonolasWork from './4HowDoAutonolasWork';
import QuickIntroArticles from './5QuickIntroArticles';
import WhyBuildOnAutonolas from './6WhyBuildOnAutonolas';
import WhatCouldYouBuild from './8WhatCouldYouBuild';
import Mission from './9Mission';
import { LearnContainer, LearnNavigation } from './styles';

export const LEARN_LIST = [
  { name: 'Who benefits from Autonolas?', id: 'autonolas-help' },
  { name: 'What is Autonolas?', id: 'what-is-autonolas' },
  { name: 'What are autonomous services?', id: 'what-are-autonomous-services' },
  {
    name: 'How do autonomous services work?',
    id: 'how-do-autonomous-services-work',
  },
  { name: 'Quick intro articles', id: 'quick-intro-articles' },
  { name: 'Why build on Autonolas?', id: 'why-build-on-autonolas' },
  { name: 'What could you build?', id: 'what-could-you-build' },
  { name: 'What’s our mission?', id: 'mission' },
];

const Learn = ({ educationArticles }) => (
  <>
    <LearnNavigation className="section">
      <Header className="header" title="Learn" as="h1" />
      <h4>Jump To:</h4>
      <ul>
        {LEARN_LIST.map(e => (
          <li key={e.id}>
            <Link href={`/learn/#${e.id}`} passHref>
              <a>
                <span>{e.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </LearnNavigation>

    <LearnContainer>
      <WhatIsAutonolas />
      <DecentralizedAndSophisticated />
      <HowDoAutonolasWork />
      <QuickIntroArticles educationArticles={educationArticles} />
      <WhyBuildOnAutonolas />
      <WhatCouldYouBuild />
      <Mission />
    </LearnContainer>
  </>
);

Learn.propTypes = {
  educationArticles: PropTypes.instanceOf(Array),
};

Learn.defaultProps = {
  educationArticles: [],
};

const mapStateToProps = state => {
  const { isNavigationOpen } = state.navigation;
  return { isNavigationOpen };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
