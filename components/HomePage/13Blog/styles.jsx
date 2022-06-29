import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { containImage } from 'components/GlobalStyles';

export const SectionBlog = styled.div`
  padding-bottom: 6rem !important;
  .header {
  }
  ${MEDIA_QUERY.tablet} {
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 0;
  justify-content: space-between;
  .column {
    width: 27.5%;
    &.bigger-column {
      width: 40%;
      .img-container {
        min-height: 320px;
      }
    }
    .img-container {
      min-height: 260px;
      ${containImage};
      background-position: left;
      margin-bottom: 0.75rem;
      /* TODO: remove once image is added */
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
      margin-top: 1rem;
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
