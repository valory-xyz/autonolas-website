import styled from 'styled-components';
import { containImage, SeeAllBtnRow } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';

export const SectionFive = styled.div`
.header{
  margin-bottom: 1rem !important;
}
  ${MEDIA_QUERY.tablet} {
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  .column {
    flex: 1;
    .img-container {
      min-height: 364px;
      ${containImage};
      background-position: left;
    }
    .header-text {
      margin-top: 1.5rem;
      font-size: 28px;
      font-family: "manrope__semibold", sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sub-text {
      font-size: 14px;
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

export const GoDeep = styled.div`
  /* REMOVE After go-deep */
  margin-top: 2rem;
  margin-bottom: -2.5rem;
`;

export const SeeAll = styled(SeeAllBtnRow)`
  margin-top: 0;
  margin-bottom: 2rem;
`;
