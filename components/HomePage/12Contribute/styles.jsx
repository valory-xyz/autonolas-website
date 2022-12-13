import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';
import { SectionOne } from '../1TheNewWay/styles';

export const SectionContributeContainer = styled(SectionOne)`
  ${backgroundImage('/images/12Contribute/background.jpg')}
  &.section {
    padding: 5rem 4.5rem !important;
  }

  ${MEDIA_QUERY.mobileL} {
    ${backgroundImage('/images/12Contribute/mobile-background.jpg')}
    &.section {
      padding: 3rem 1rem 6rem 1rem !important;
      .description {
        bottom: 160px;
      }
      .action-btns {
        align-items: center;
      }
    }
  }
`;
