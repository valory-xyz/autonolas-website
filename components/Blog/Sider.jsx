import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import Button from 'common-util/Button';
import { handleJoinDiscord } from 'common-util/functions';
import { SiderCard as Card } from './styles';

const { Title } = Typography;

const Sider = ({ funnel }) => {
  const {
    lead, name, persona, cta_href, emoji,
  } = funnel || {};
  return (
    <>
      <Card className="mb-1">
        <p className="sub-title">Sign up for updates</p>
        <Title level={2}>Stay at the autonomous edge</Title>
        <div className="desc">
          Be the first to hear about everything new in the world of Autonolas,
          autonomous services and full-stack autonomy.
        </div>
        <Button title="SUBSCRIBE TO MAILING LIST" />
        <div className="or-text">OR</div>
        <Button title="JOIN DISCORD" onClick={handleJoinDiscord} />
      </Card>

      {funnel && (
        <Card className="card-sticky">
          <p className="sub-title">{`${emoji} ${name}`}</p>
          <Title level={2}>{persona}</Title>
          <div className="desc">{lead}</div>
          <Button
            title="LEARN MORE"
            onClick={() => {
              window.open(
                cta_href,
                !(cta_href || '').includes('https') ? '_self' : '_target',
              );
            }}
          />
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
