import styled from 'styled-components';
import { BREAK_POINT } from 'util/theme';

export const SectionFive = styled.div`
  background-image: url("/images/your-head-start/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .description-l-3 {
    margin: 40px 0 20px 0;
  }
  .header {
    max-width: 980px;
  }
  .btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
  }
  .text {
    max-width: 280px;
    line-height: normal;
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/your-head-start/background-mobile.jpg");
    .description-l-3 {
      margin: 0 0 10px 0;
    }
    .text {
      max-width: 260px;
      text-align: center;
    }
  }
`;

export const EG = styled.div``;
