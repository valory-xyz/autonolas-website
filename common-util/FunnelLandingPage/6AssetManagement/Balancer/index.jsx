import React from 'react';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { BalancerContainer, Row } from './styles';

const Balancer = () => (
  <BalancerContainer className="section">
    <Description type={2} title="POWERED BY BALANCED MANAGED POOLS" />

    <div className="x-balancer">
      <img src="/images/funnels/6AssetManagement/balancer.png" alt=" " />
    </div>

    <Row>
      <Description
        type={2}
        title="Autonolas received a grant from Balancer in Q3 to build Smart Managed Pools. "
        className="sub-content"
      />
    </Row>

    <Button
      hasArrowSuffix
      type="purple"
      title="READ THE FULL PROPOSAL"
      onClick={() => window.open(
        'https://drive.google.com/file/d/1_WuEODpEKV7BR3LMKVLxyZUWjcGhHNRS/view',
      )}
    />
  </BalancerContainer>
);

export default Balancer;
