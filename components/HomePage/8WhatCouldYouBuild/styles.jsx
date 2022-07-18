import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { containImage, SeeAllBtnRow } from 'components/GlobalStyles';

export const SectionWhatCouldYouBuild = styled.div`
  .header {
    font-weight: 900;
    margin-bottom: 3rem !important;
  }
  .desc {
    max-width: 42ch;
  }
  .oracle-sell {
    text-align: center;
    margin-bottom: 3rem;
    &-description {
      display: inline-block;
      margin-bottom: 1rem;
    }
  }
  ${MEDIA_QUERY.tablet} {
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  .details {
    flex-basis: 30%;
  }
  .column {
    margin: 0 auto;
    max-width: 400px;
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
      font-size: 18px;
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

export const IdeaGroup = styled.div`
  .group-title {
    margin-bottom: 1rem;
    font-family: "neuemachina__regular";
    text-transform: uppercase;
  }
  .idea {
    margin-bottom: 2rem;
  }
  .idea-title {
  }
  .idea-text {
    line-height: 1.45;
  }
`;
