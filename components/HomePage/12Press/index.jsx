import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import { HeaderAndAction } from 'components/GlobalStyles';
import { SectionPress, Content } from './styles';

const PressAndBlogs = ({ press }) => (
  <SectionPress className="section section-press" id="press">
    <HeaderAndAction>
      <Header className="header" title="Press" />
      <Button
        title="See all"
        type="link-arrow"
        onClick={() => window.open(`${window.location.origin}/press`)}
      />
    </HeaderAndAction>

    <Content>
      {press.map(({ id, attributes }, index) => {
        const {
          title, thumbnail, type, publisher,
        } = attributes || {};
        const imageUrl = get(thumbnail, 'data.attributes.url') || '';

        return (
          <div
            key={`press-${id}`}
            className={`column column-${index + 1}`}
            style={{ width: index === 0 || index === 1 ? '40%' : '27.5%' }}
          >
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
              }}
            />
            <Tag>{type}</Tag>
            <div className="header-text">{publisher}</div>
            <div className="subtitle">{title}</div>
            <Button
              title="LEARN MORE"
              type="black"
              className="mini"
              onClick={() => {
                window.open(`${window.location.origin}/press/${id}`);
              }}
            />
          </div>
        );
      })}
    </Content>
  </SectionPress>
);

PressAndBlogs.propTypes = {
  press: PropTypes.instanceOf(Array).isRequired,
};

export default PressAndBlogs;
