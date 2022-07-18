import { widths } from 'components/Layout/styles';
import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const EcosystemServicesSection = styled.div`
  padding: 7rem 4.5rem;
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
