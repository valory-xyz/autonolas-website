import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { backgroundImage } from 'components/GlobalStyles';

export const SectionOne = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 87.5vh;
  min-height: 700px;
  background-color: linear-gradient(
    80deg,
    rgba(223, 189, 252, 1) 0%,
    rgba(203, 251, 255, 1) 24%,
    rgba(246, 235, 255, 1) 82%
  );
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    margin-bottom: 0 !important;
    line-height: 1;
  }
  .description {
    line-height: normal;
  }
  .action-btns {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 85%;
    a {
      margin: 0 0.5rem;
    }
  }
  &.section {
    padding: 7rem 4.5rem !important;
  }

  ${MEDIA_QUERY.laptop} {
    .header {
      font-size: 104px;
    }
  }

  ${MEDIA_QUERY.tabletL} {
    .header {
      font-size: 90px;
    }
    .action-btns {
      width: 100%;
    }
  }

  ${MEDIA_QUERY.tablet} {
    &.section {
      padding: 10rem 1rem 6rem 1rem !important;
    }
    .header {
      /* font-size: 74px; */
    }
    .action-btns {
      align-items: flex-start;
      .btn {
        font-size: 18px;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    align-items: flex-start;
    justify-content: flex-start;
    .header {
      font-size: 54px;
    }
    .description {
      position: absolute;
      bottom: 200px;
    }
    .action-btns {
      flex-direction: column;
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, 0px);
      .btn {
        width: 100%;
        text-align: center;
        &:nth-child(1) {
          margin-bottom: 1rem;
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileM} {
    .description {
      bottom: 230px;
    }
    .action-btns {
      .btn {
        width: 300px;
      }
    }
  }
`;

export const DescActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  .description {
    max-width: 700px;
  }

  @media only screen and (max-width: 1024px) {
    .description {
      max-width: 380px;
    }
  }

  ${MEDIA_QUERY.tabletL} {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    .action-btns {
      justify-content: flex-start;
    }
  }
`;
