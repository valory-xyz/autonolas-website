import styled from 'styled-components';
import { backgroundGradient } from 'components/GlobalStyles';
import { COLOR } from 'util/theme';

export const LearnNavigation = styled.div`
  ${backgroundGradient};
  .header {
    margin-top: 6rem;
  }
  h4 {
    font-family: "manrope__bold",sans-serif;
    color: ${COLOR.PURPLE};
    font-size: 32px;
  }
  ul {
    padding: 0;
    li {

      border-top: 1px solid ${COLOR.BLACK};
      list-style: none;
      padding: 0.75rem 0;
      font-size: 21px;
      font-family: 'manrope__semibold';
      a {
        color: ${COLOR.BLACK};
      }
    }
  }
`;

export const LearnContainer = styled.div`
  ${backgroundGradient};
`;
