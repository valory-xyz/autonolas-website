import styled from 'styled-components';
import { Row } from 'antd/lib';
import { MEDIA_QUERY, COLOR } from 'util/theme';
import { backgroundGradient } from 'components/GlobalStyles';
// import { Content as C } from '../Learn/2WhatIsAutonolas/styles';

export const SectionEcosystemBuilders = styled.div`
  ${backgroundGradient};
  .header {
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  .column {
    display: flex;
    flex-direction: row;
    max-width: 610px;
    padding: 2.5rem 1rem 0 0;
    .img-container-custom {
      height: 120px;
      margin-right: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text-content {
      flex: 1;
      .sub-text {
        font-size: 20px;
        margin: 1rem 0;
      }
    }
    .custom-component-section {
      .website-link {
        margin-top: 1rem;
        margin-bottom: 2rem;
        display: inline-block;
      }
    }
  }
  /* .column {
    .img-container-custom {
      margin: 0 auto;
      height: 150px;
      img {
        width: 100%;
      }
    }
    .header-text {
      margin-top: 0rem;
      min-height: auto;
    }
    .sub-text {
      min-height: 150px;
    }
    &.column-1 {
      margin-right: 12rem;
      max-width: 340px;
      .img-container-custom {
        width: 140px;
      }
    }
    &.column-2 {
      max-width: 360px;
      .img-container-custom {
        width: 120px;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    gap: 0 3rem;
    .column {
      .sub-text {
        min-height: 140px;
      }
      &.column-1 {
        margin-right: 0rem;
      }
    }
  }
*/
  ${MEDIA_QUERY.mobileL} {
    .column {
      flex-direction: column;
      .img-container-custom {
        width: 140px;
        margin-bottom: 1rem;
      }
      .action-btn {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const HeadersRow = styled(Row)`
  margin: 2rem 0;
  width: 100%;
  .ant-col {
    border-top: 1px solid ${COLOR.BLACK};
  }
`;
