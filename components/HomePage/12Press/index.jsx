import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd/lib';
import PATHS from 'util/paths';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import {
  HeaderAndAction,
  ThreeColumnContents,
} from 'components/GlobalStyles';
import { ROW_GUTTER } from 'util/theme';
import EachPress from './EachPress';
import { SectionPress } from './styles';

const PressAndBlogs = ({ press }) => {
  const firstTwoPress = (press || []).slice(0, 2);
  const restOfThePress = (press || []).slice(2, 5);

  return (
    <SectionPress className="section section-press" id="press">
      <HeaderAndAction>
        <Header className="header" title="Press" />
        <a href={`/${PATHS.PRESS}`} className="no-underline">
          <Button
            title="See all"
            type="link-arrow"
          />
        </a>
      </HeaderAndAction>

      <Row gutter={ROW_GUTTER}>
        {firstTwoPress.map(item => (
          <EachPress press={item} key={`press-${item.id}`} />
        ))}
      </Row>

      <ThreeColumnContents>
        {restOfThePress.map(item => (
          <div className="details" key={`press-${item.id}`}>
            <EachPress press={item} />
          </div>
        ))}
      </ThreeColumnContents>
    </SectionPress>
  );
};

PressAndBlogs.propTypes = {
  press: PropTypes.instanceOf(Array).isRequired,
};

export default PressAndBlogs;
