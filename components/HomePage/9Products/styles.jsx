import styled from 'styled-components';
import { Row } from 'antd/lib';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { backgroundGradient } from 'components/GlobalStyles';
import { widths } from 'components/Layout/styles';

export const EcosystemServicesSection = styled.div`
  ${backgroundGradient};
  .header {
    font-weight: 900;
    margin-bottom: 10rem !important;
  }
  .ecosystem-services-list {
    margin-top: 3rem;
  }
  .ecosystem-service {
    margin-bottom: 3rem;
    &-image {
      margin-bottom: 1rem;
    }
    &-title {
    }
    &-description {
      display: inline-block;
      margin-bottom: 2rem;
      max-width: 42ch;
    }
  }

  ${MEDIA_QUERY.tablet} {
    padding: ${widths.mobileSectionPadding};
  }
`;

export const HeadersRow = styled(Row)`
margin-top: 2rem;
  .ant-col {
    padding: 0.5rem 0;
    border-top: 1px solid ${COLOR.BLACK};
    border-bottom: 1px solid ${COLOR.BLACK};
    h3 {
      margin: 0;
    }
  }
`;
