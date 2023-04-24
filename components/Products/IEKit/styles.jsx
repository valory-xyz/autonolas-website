import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

const MAX_WIDTH = '1024px';

export const IEKitContainer = styled.div`
  /* common */
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
  .grey-bg {
    background-color: #edf2f7;
  }
  .youtube-iframe {
    width: 100%;
    height: 580px;
    max-width: 1024px;
    border: none;
  }
  .ant-typography {
    max-width: ${MAX_WIDTH};
    margin-left: auto;
    margin-right: auto;
  }

  /* each different sections */
  .iekit-section-1 {
    .h2-impact {
      padding-top: 3rem;
    }
    .img-container {
      margin: 2rem auto 1rem auto;
      img {
        width: 100%;
        max-width: ${MAX_WIDTH};
      }
    }
    .list-details {
      max-width: ${MAX_WIDTH};
      margin: 4rem auto 2rem auto;
      h3 {
        font-size: 1.875rem;
        span {
          display: inline-block;
          margin-right: 0.5rem;
        }
      }
    }
  }

  .iekit-section-2 {
    .list-features {
      max-width: ${MAX_WIDTH};
      margin: 4rem auto 2rem auto;
      .ant-col {
        div {
          font-size: 3rem;
        }
        h3 {
          font-size: 1.5rem;
        }
      }
    }
  }

  .iekit-section-3 {
    .ant-typography {
      max-width: ${MAX_WIDTH};
      margin-left: auto;
      margin-right: auto;
    }
  }

  .iekit-section-4 {
    .product-icon {
      margin-bottom: 1rem;
    }
    h2 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  ${MEDIA_QUERY.laptop} {
    .youtube-iframe {
      height: 520px;
      max-width: 886px;
    }
  }

  ${MEDIA_QUERY.tabletL} {
    .youtube-iframe {
      height: 426px;
      max-width: 886px;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .iekit-section-1 {
      .img-container img {
        width: 100%;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .youtube-iframe {
      height: 280px;
    }
  }
`;

export const TitleSubL1 = styled.h2`
  font-size: 38px;
  font-weight: 600;
  line-height: 1.23;
`;
