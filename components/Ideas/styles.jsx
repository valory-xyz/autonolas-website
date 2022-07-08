import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { backgroundImage } from 'components/GlobalStyles';

export const IdeaContainer = styled.div`
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;

export const EachIdeaContainer = styled.div`
  .monetisation {
    position: relative;
    padding-left: 1.5rem;
    &::before {
      content: " ";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${COLOR.PURPLE};
      position: absolute;
      top: 50%;
      left: 4px;
      transform: translate(-50%, -50%);
    }
  }
`;

export const SubHeader = styled.h3`
  font-size: 32px;
  margin-bottom: 2rem;
`;

export const BluePrint = styled.div`
  border-top: 1px solid ${COLOR.GREY_1};
`;
