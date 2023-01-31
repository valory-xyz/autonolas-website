import { LinkCard } from 'components/GlobalStyles';
import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const Hero = styled.div`
  background: ${COLOR.LIGHT_BLUE};
  min-height: 75vh;
  padding: 10rem 1rem 0 1rem;
  text-align: center;
  
  .title {
    margin-bottom: 2rem;
  }

  .image {
    width: 300px;
    transform: rotate(15deg);
  }

  ${LinkCard} {
    margin-bottom: 2rem;
    padding-top: 15rem;
  }
`;
