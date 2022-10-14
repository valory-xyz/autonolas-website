import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const BalancerContainer = styled.div`
  background-image: url("/images/funnels/6AssetManagement/background.jpg");
  .x-balancer {
    max-width: 900px;
    margin: 3rem 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ${MEDIA_QUERY.tablet} {
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  .description {
    font-size: 64px;
    line-height: 1.1;
    max-width: 900px;
    font-family: "manrope__bold";
    margin-bottom: 4rem;
  }

  ${MEDIA_QUERY.laptop} {
    .description {
      max-width: 500px;
    }
  }

  ${MEDIA_QUERY.mobileL} {
    flex-direction: column-reverse;
  }
`;
