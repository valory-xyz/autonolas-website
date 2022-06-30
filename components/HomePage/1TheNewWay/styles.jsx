import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { backgroundImage } from 'components/GlobalStyles';

export const SectionOne = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-height: 700px;
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    margin-bottom: 0 !important;
    line-height: 1;
    font-weight: bold;
  }
  .description {
    line-height: normal;
  }
  .action-btns {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 85%;
    .btn {
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

  ${MEDIA_QUERY.tablet} {
    align-items: flex-start;
    justify-content: flex-start;
    &.section {
      padding: 8rem 1rem 14rem 1rem !important;
    }
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

  ${MEDIA_QUERY.mobileS} {
    .description {
      bottom: 230px;
    }
  }
`;

export const DescActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  .description {
    max-width: 700px;
  }
`;
