import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';

export const SectionSeven = styled.div`
  ${backgroundImage('/images/7StartBuilding/background.webp')}
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  .column {
    .img-container {
      height: 150px;
      img {
        width: 100%;
      }
    }
    .header-text {
      margin-bottom: 1rem;
      font-size: 34px;
      font-family: "manrope__bold", sans-serif;
      text-align: center;
    }
    .sub-text {
      font-size: 22px;
      text-align: center;
      margin: 1rem 0 3rem 0;
    }
    .action-btn {
      text-align: center;
    }
    &.column-1 {
      margin-right: 8rem;
      max-width: 340px;
      .img-container {
        margin: 0 auto;
        width: 140px;
      }
    }
    &.column-2 {
      max-width: 460px;
      .img-container {
        margin: 0.5rem auto 0 auto;
        width: 120px;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
  }

  ${MEDIA_QUERY.tablet} {
    display: flex;
    flex-direction: column;
    .column {
      max-width: 280px;
      .header-text {
        margin-top: 1rem;
        font-size: 20px;
        min-height: auto;
      }
      .sub-text {
        font-size: 18px;
      }
    }
  }
`;

export const CommissionUs = styled.div`
  font-size: 22px;
  text-align: center;
  margin: 3rem auto 0 auto;
  p {
    margin-bottom: 0.5rem;
  }
  a {
    font-weight: bold;
  }
`;
