import React from 'react';
import { Row, Col, Typography } from 'antd';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Header from 'common-util/Header';
import {
  SectionTestimonial,
  EachTestimonial,
  EmptyLogo,
  EmployeeDetails,
} from './styles';

const { Title } = Typography;

const Team = ({ testimonials }) => (
  <SectionTestimonial className="section section-team" id="testimonials">
    <Header className="header" title="Testimonials" />
    <br />

    <Row gutter={[32, 32]}>
      {testimonials.map(({ id, attributes }) => {
        const {
          company_name, user_image, user_name, user_title, text,
        } = attributes || {};
        const userImage = get(user_image, 'data.attributes.url');

        return (
          <Col xl={6} lg={12} sm={12} xs={24}>
            <EachTestimonial key={`testimonial-${id}`}>
              <Row className="testimonial-text">
                <Col lg={24} xs={24}>
                  <p>
                    &ldquo;
                    {text}
                    &rdquo;
                  </p>
                </Col>
              </Row>

              <Row className="company-info">
                <Col lg={12} xs={12}>
                  {userImage ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${userImage}`}
                      alt={`Testimonial by ${user_name} from ${company_name}`}
                    />
                  ) : (
                    <EmptyLogo />
                  )}
                </Col>

                <Col lg={12} xs={12}>
                  <EmployeeDetails>
                    <div className="info-1">
                      <Title level={5}>{user_name}</Title>
                      <div className="user_title">{user_title}</div>
                    </div>
                    <div className="info-2">
                      <Title level={3}>{company_name}</Title>
                    </div>
                  </EmployeeDetails>
                </Col>
              </Row>
            </EachTestimonial>
          </Col>
        );
      })}
    </Row>
  </SectionTestimonial>
);

Team.propTypes = {
  testimonials: PropTypes.instanceOf(Array).isRequired,
};

export default Team;
