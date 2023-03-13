import { Col, Row } from 'antd/lib';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import React from 'react';
import CallToActionButton from '../CallToActionButton';
import { SummarySection } from './styles';

const Summary = () => (
  <SummarySection className="section section-large">
    <Header
      className="header center"
      title={(
        <>
          Builder Track
          <br />
          at a Glance
        </>
      )}
    />
    <Row className="summary-items">
      <Col xs={24} lg={8} className="summary-item">
        <img
          src="/images/Academy/LandingPage/summary-duration.svg"
          alt="Icon to show summary duration"
        />
        <Description
          type={3}
          title="Duration: 4 weeks"
          className="summary-item-text"
        />
      </Col>
      <Col xs={24} lg={8} className="summary-item">
        <img
          src="/images/Academy/LandingPage/summary-commitment.svg"
          alt="Icon to show summary commitment"
        />
        <Description
          type={3}
          title="Time Commitment: 2 hours per week for coaching sessions + time to build"
          className="summary-item-text"
        />
      </Col>
      <Col xs={24} lg={8} className="summary-item">
        <img
          src="/images/Academy/LandingPage/summary-frequency.svg"
          alt="Icon to show summary frequency"
        />
        <Description
          type={3}
          title={(
            <>
              <b>Next cohort: 7th September 2022.</b>
              <br />
              A new cohort starts every 60 days
            </>
          )}
          className="summary-item-text"
        />
      </Col>
    </Row>
    <div className="centered-button">
      <CallToActionButton />
    </div>
  </SummarySection>
);

export default Summary;
