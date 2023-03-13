import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd/lib';
import { COLOR } from 'util/theme';
import Button from 'common-util/Button';
import { handleJoinDiscord } from 'common-util/functions';
import { DiscordLogo } from 'common-util/svg';
import { SiderCard as Card } from './styles';

const { Title } = Typography;

const Sider = ({ funnel }) => {
  const {
    lead, name, tagline, emoji, landing_page,
  } = funnel || {};
  return (
    <>
      <Card className="mb-1">
        <div className="img-container">
          <img
            src="/images/2WhatIsAutonolas/ecosystem.png"
            alt=" "
            style={{ width: '50%', marginBottom: '1rem' }}
          />
        </div>
        <p className="sub-title">Sign up for updates</p>
        <Title level={2}>Stay at the autonomous edge</Title>
        <div className="desc">
          Be the first to hear about everything new in the world of Autonolas,
          autonomous services and full-stack autonomy.
        </div>
        <Button
          title="SUBSCRIBE TO MAILING LIST"
          onClick={() => window.open('http://eepurl.com/hQaJOP', '_target')}
        />
        <div className="or-text">OR</div>
        <Button
          title={(
            <>
              <DiscordLogo fill={COLOR.WHITE} width={24} height={24} />
              JOIN DISCORD
            </>
          )}
          className="join-discord-btn"
          onClick={handleJoinDiscord}
        />
      </Card>

      {funnel && (
        <Card className="card-sticky">
          <p className="sub-title">{`${emoji} ${name}`}</p>
          <Title level={2}>{tagline}</Title>
          <div className="desc">{lead}</div>
          <a href={`/${landing_page}`}>
            <Button title="LEARN MORE" />
          </a>
        </Card>
      )}
    </>
  );
};

Sider.propTypes = {
  funnel: PropTypes.instanceOf(Object),
};

Sider.defaultProps = {
  funnel: null,
};

export default Sider;
