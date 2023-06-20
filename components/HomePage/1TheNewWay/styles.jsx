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
  .text-rotator-container {
    display: inline-block;
    width: 11ch;
    background-color: rgba(114, 0, 214, 0.1);
  }
  .text-rotator-text {
    margin-left: 5px;
  }
  .header {
    line-height: 1;
    max-width: 15ch;
  }
  .description {
    line-height: normal;
  }
  .lead {
    font-size: 20px;
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
    padding: 8rem 4rem 4rem 4rem !important;
  }

  ${MEDIA_QUERY.laptop} {
    .header {
      font-size: 94px;
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
      padding: 14rem 1rem 6rem 1rem !important;
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
      bottom: 160px;
    }
    .action-btns {
      .btn {
        width: 300px;
      }
    }
  }

  ${MEDIA_QUERY.mobileS} {
    .header {
      font-size: 44px;
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
