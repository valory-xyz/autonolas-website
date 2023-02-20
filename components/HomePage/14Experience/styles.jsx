import styled from 'styled-components';
import { MEDIA_QUERY, COLOR } from 'util/theme';

export const SectionExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem !important;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.BLACK};
  .header-row {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .desc-1 {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .header {
    margin-bottom: 1rem !important;
    margin-top: 4rem;
    padding-left: 5rem;
    color: ${COLOR.WHITE} !important;
  }
  .description {
  }
  .btn {
    margin: 4rem 0 3rem;
    padding: 1.5rem 5rem;
    font-size: 22px;
  }
  .consider-yourself {
    text-align: center;
    font-size: 22px;
    min-height: 50px; // TODO: removed once the link is live
    a {
      color: ${COLOR.WHITE};
    }
  }

  ${MEDIA_QUERY.tablet} {
    padding-top: 4rem !important;
    padding-bottom: 0rem !important;
    .header {
      margin-top: 1rem;
      margin-bottom: 1rem !important;
      padding-left: 0;
    }
    .btn {
      margin: 3rem 0 0rem;
    }
  }

  ${MEDIA_QUERY.mobileL} {
    padding-top: 3rem !important;
    text-align: center;
    .description {
      max-width: 200px;
    }
    .btn {
      padding: 1rem 0rem;
    }
  }
`;
