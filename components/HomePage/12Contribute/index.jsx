import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import { DescActionButtons } from '../1TheNewWay/styles';
import { SectionContributeContainer } from './styles';

const SectionContribute = ({ isNavigationOpen }) => (
  <SectionContributeContainer
    className="section section-1"
    id="contribute"
    isNavigationOpen={isNavigationOpen}
  >
    <Header className="header" title="Contribute to Autonolas" as="h1" />

    <DescActionButtons>
      <Description
        type={2}
        title="Complete actions that benefit the DAO. Earn points and rise up the rankings. Mint a badge to show off your contributions and rank."
      />

      <div className="action-btns">
        <Button hasArrowSuffix type="purple" title="Start Contributing" onClick={() => window.open('https://contribute.autonolas.network')} />
      </div>
    </DescActionButtons>
  </SectionContributeContainer>
);

SectionContribute.propTypes = {
  isNavigationOpen: PropTypes.bool,
};

SectionContribute.defaultProps = {
  isNavigationOpen: false,
};

export default SectionContribute;
