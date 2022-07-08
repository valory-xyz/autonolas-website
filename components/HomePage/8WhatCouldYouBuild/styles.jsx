import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { SeeAllBtnRow } from 'components/GlobalStyles';

export const SectionWhatCouldYouBuild = styled.div`
  .header {
    margin-bottom: 1rem !important;
  }
  .desc {
    max-width: 42ch;
  }
  .column {
    .btn {
      margin-top: 0 !important;
    }
  }

  ${MEDIA_QUERY.tablet} {
  }

  ${MEDIA_QUERY.mobileL} {
    .column {
      margin-top: 1rem;
    }
  }
`;

export const SeeAll = styled(SeeAllBtnRow)`
  margin-top: 0;
  margin-bottom: 2rem;
`;
