import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { containImage } from 'components/GlobalStyles';

export const SectionEleven = styled.div`
  background-image: url("/images/11Team/background.webp");
  .description {
    margin: -1rem 0 5rem 0;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .column {
    flex-basis: 27.5%;
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
    .desc {
      margin-bottom: 1.5rem;
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

export const TeamFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  .btn {
    padding-left: 0;
    padding-right: 0;
  }
`;
