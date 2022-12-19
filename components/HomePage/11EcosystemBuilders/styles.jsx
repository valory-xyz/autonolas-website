import styled from 'styled-components';
import { Row } from 'antd/lib';
import { MEDIA_QUERY, COLOR } from 'util/theme';
import { backgroundGradient } from 'components/GlobalStyles';

export const SectionEcosystemBuilders = styled.div`
  ${backgroundGradient};
  .header {
    margin-top: 1rem;
  }

  .btn-get-support {
    margin-bottom: 10px;
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
