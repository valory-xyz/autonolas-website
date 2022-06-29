import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import {
  backgroundImage,
  individualPageSection,
} from 'components/GlobalStyles';

export const TeamContainer = styled.div`
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;

export const TeamListContainer = styled.div`
  ${individualPageSection}
`;
