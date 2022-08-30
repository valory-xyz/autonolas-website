import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';

export const Container = styled.div`
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
`;

export const BodyContainer = styled.div`
  max-width: 72ch;
  margin: 6rem auto 0 auto;

  ${MEDIA_QUERY.tablet} {
    margin: 6rem 2rem 0 2rem;
  }
`;
