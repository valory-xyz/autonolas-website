import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { SectionOne } from '../1TheNewWay/styles';

export const SectionContributeContainer = styled(SectionOne)`
  &.section {
    padding: 5rem 4.5rem !important;
  }
  ${backgroundImage('/images/12Contribute/background.jpg')}
`;
