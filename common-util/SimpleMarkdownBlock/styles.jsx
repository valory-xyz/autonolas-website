import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';

export const Container = styled.div`
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
`;

export const BodyContainer = styled.div`
  max-width: 72ch;
  margin: 6rem auto 0 auto;
`;
