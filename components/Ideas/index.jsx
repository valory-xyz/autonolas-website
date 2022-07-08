import React from 'react';
import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import EachIdea from 'components/HomePage/8WhatCouldYouBuild/EachIdea';
import { TwoColumnContents } from 'components/GlobalStyles';
import { IdeaContainer } from './styles';

const Ideas = ({ ideas }) => (
  <>
    <IdeaContainer className="content-list-section">
      <Header className="header" title="Ideas" />
    </IdeaContainer>

    <TwoColumnContents className="section">
      {ideas.map(idea => (
        <EachIdea idea={idea} key={`idea${idea.id}`} />
      ))}
    </TwoColumnContents>
  </>
);

Ideas.propTypes = {
  ideas: PropTypes.instanceOf(Array),
};

Ideas.defaultProps = {
  ideas: [],
};

export default Ideas;
