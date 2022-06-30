import React from 'react';
import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import { ThreeColumnContents } from 'components/GlobalStyles';
import EachTeamMate from '../HomePage/11Team/EachTeamMate';
import { TeamContainer, TeamListContainer } from './styles';

const Team = ({ cofounders, foundingTeam }) => (
  <>
    <TeamContainer className="content-list-section">
      <Header className="header" title="Team" />
    </TeamContainer>

    <TeamListContainer className="section background-gradient">
      <ThreeColumnContents>
        {cofounders.map(({ id, attributes }) => (
          <EachTeamMate key={`team-mate-${id}`} member={attributes} />
        ))}
      </ThreeColumnContents>

      <br />

      <ThreeColumnContents>
        {foundingTeam.map(({ id, attributes }) => (
          <EachTeamMate key={`team-mate-${id}`} member={attributes} />
        ))}
      </ThreeColumnContents>
    </TeamListContainer>
  </>
);

Team.propTypes = {
  cofounders: PropTypes.instanceOf(Array),
  foundingTeam: PropTypes.instanceOf(Array),
};

Team.defaultProps = {
  cofounders: [],
  foundingTeam: [],
};

export default Team;
