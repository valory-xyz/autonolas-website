import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { containImage, SeeAllBtnRow } from 'components/GlobalStyles';

export const SectionWhatCouldYouBuild = styled.div`
  .header {
    margin-bottom: 1rem !important;
  }
  ${MEDIA_QUERY.tablet} {
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  .column {
    flex-basis: 30%;
    .img-container {
      min-height: 260px;
      ${containImage};
      background-position: left;
      margin-bottom: 0.75rem;
    }
    .header-text {
      margin: 0.75rem 0 0.5rem 0;
      font-size: 28px;
      font-family: "manrope__semibold", sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sub-text {
      font-size: 12px;
      margin: 1rem 0;
      text-transform: uppercase;
    }
    .btn {
      min-width: 150px;
    }
  }

  ${MEDIA_QUERY.laptop} {
  }

  ${MEDIA_QUERY.tablet} {
    display: flex;
    flex-direction: column;
    .column {
      .img-container {
        min-height: 200px;
      }
      .header-text {
      }
      .sub-text {
      }
    }
  }
`;

export const SeeAll = styled(SeeAllBtnRow)`
  margin-top: 0;
  margin-bottom: 2rem;
`;
