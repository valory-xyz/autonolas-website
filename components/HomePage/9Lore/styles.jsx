import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionNine = styled.div`
  background-image: url("/images/lore/background.jpg");
  .header {
    margin-bottom: 8px !important;
  }
  
  ${MEDIA_QUERY.tablet} {
    background-image: url("/images/lore/background-mobile.jpg");
  }
`;

export const RowTwo = styled.div`
  position: relative;
  font-size: 18px;
  .text-container {
    position: absolute;
    height: 200px;
    width: 100%;
    .text-row {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .text {
      text-align: center;
      line-height: 1.2;
    }
  }
  .text-container-1 {
    top: 35%;
    .text-row {
      align-items: flex-start;
      .column-1 {
        flex: 1.25;
      }
      .column-2 {
        flex: 1;
      }
      .text {
        max-width: 280px;
        margin: 0 auto;
      }
    }
  }
  .text-container-2 {
    bottom: 7.5%;
    .text-row {
      align-items: center;
    }
    .column-1 {
      margin-left: -10%;
    }
    .text {
      max-width: 300px;
    }
  }

  ${MEDIA_QUERY.laptop} {
    .text-container-2 {
      bottom: 0%;
    }
  }

  ${MEDIA_QUERY.tablet} {
    font-size: 20px;
    .text-container {
      .text-row {
        align-items: center;
        flex-direction: column;
      }
    }
    .text-container-1 {
      height: 680px;
      top: 17.5%;
      .text-row {
        .text {
          max-width: 280px;
        }
      }
    }
    .text-container-2 {
      bottom: -3.5%;
      .column-1 {
        margin: 0;
      }
      .text-row {
        .text {
          max-width: 300px;
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileS} {
    .text-container-1 .text-row .column-1 {
      flex: 1;
    }
    .text-container-2 .text-row .text {
      margin-bottom: 0%;
    }
  }

  @media only screen and (max-width: 320px) {
    .text-container-1 .text-row .column-1 {
      flex: 0.7;
    }
  }
`;

export const RowThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  text-align: center;
  .btn {
    margin-top: 16px;
  }

  ${MEDIA_QUERY.tablet} {
    flex-direction: column;
    .column {
      width: 100%;
      text-align: left;
      .btn {
        margin-top: 8px;
      }
      &.column-1 {
        margin-bottom: 20px;
      }
    }
  }
`;
