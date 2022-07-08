import React from 'react';
import PropTypes from 'prop-types';
import PATHS from 'util/paths';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import { ThreeColumnContents } from 'components/GlobalStyles';
import { SectionWhatCouldYouBuild, SeeAll } from './styles';
import EachIdea from './EachIdea';

// distribution, implementation_plan, name, nickname,

const WhatCouldYouBuild = ({ ideas }) => (
  <SectionWhatCouldYouBuild
    className="section section-what-could-you-build"
    id="idea"
  >
    <Header
      className="header"
      title={(
        <>
          What could&nbsp;
          <span className="sub-text">you</span>
          &nbsp;build?
        </>
      )}
    />

    <SeeAll>
      <a href={`/${PATHS.IDEAS}`} className="no-underline">
        <Button title="See all" type="link-arrow" />
      </a>
    </SeeAll>

    <ThreeColumnContents>
      {(ideas || []).slice(0, 6).map(idea => (
        <div className="details" key={`idea-${idea.id}`}>
          <EachIdea idea={idea} />
        </div>
      ))}
    </ThreeColumnContents>
  </SectionWhatCouldYouBuild>
);

WhatCouldYouBuild.propTypes = {
  ideas: PropTypes.instanceOf(Array).isRequired,
};

export default WhatCouldYouBuild;
