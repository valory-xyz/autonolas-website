import React from 'react';
import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import EachTeamMate from '../HomePage/11Team/EachTeamMate';
import { Content } from '../HomePage/11Team/styles';
import { TeamContainer, TeamListContainer } from './styles';

const contentStyle = {
  // justifyContent: 'space-around',
};

const Team = ({ cofounders, foundingTeam }) => (
  <>
    <TeamContainer className="content-list-section">
      <Header className="header" title="Team" />
    </TeamContainer>

    <TeamListContainer className="section background-gradient">
      <Content style={contentStyle}>
        {cofounders.map(({ id, attributes }) => (
          <EachTeamMate key={`team-mate-${id}`} member={attributes} />
        ))}
      </Content>

      <br />

      <Content>
        {foundingTeam.map(({ id, attributes }) => (
          <EachTeamMate key={`team-mate-${id}`} member={attributes} />
        ))}
      </Content>
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
