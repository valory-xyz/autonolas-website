import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { backgroundImage } from 'components/GlobalStyles';
import { widths } from '../../Layout/styles';

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
    button {
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

  ${MEDIA_QUERY.mobileL} {
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${({ isNavigationOpen: e }) => `${e ? '20px 0px' : widths.mobileSectionPadding}!important`};
    .header {
      font-size: 54px;
    }
    .description {
      max-width: 280px;
      margin-top: 3rem;
      text-align: left;
    }
    .action-btns {
      flex-direction: column;
      position: absolute;
      width: 80%;
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, 0px);
      .btn {
        width: 100%;
        &:nth-child(1) {
          margin-bottom: 1rem;
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileS} {
    height: auto;
    .header {
      margin-right: 20px;
    }
    .description {
      max-width: 280px;
      margin-top: 3rem;
      text-align: left;
    }
    .action-btns {
      position: relative;
      bottom: 16px;
      width: 80%;
    }
  }
`;

export const DescActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
