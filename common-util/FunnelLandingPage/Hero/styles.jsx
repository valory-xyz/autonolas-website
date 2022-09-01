import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-height: 700px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .header {
    margin-bottom: 0;
    line-height: 1;
  }
  .description {
    line-height: normal;
  }
  .action-btn {
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
      padding: 8rem 1rem 6rem 1rem !important;
    }
    .header {
      /* font-size: 74px; */
    }
    .action-btn {
      align-items: flex-start;
      .btn {
        font-size: 18px;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    align-items: flex-start;
    justify-content: flex-start;
    &.section > .header {
      margin-bottom: 5rem;
      font-size: 54px;
    }
    .action-btn {
      flex-direction: column;
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, 0px);
      width: 100%;
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

  ${MEDIA_QUERY.mobileL} {
    &.section > .header {
      margin-bottom: 4rem;
      font-size: 46px;
    }
  }
  ${MEDIA_QUERY.mobileS} {
    &.section > .header {
      font-size: 42px;
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
