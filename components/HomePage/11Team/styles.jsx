import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionEleven = styled.div`
  background-image: url("/images/11Team/background.webp");
  .description {
    margin: -1rem 0 5rem 0;
  }
  .header {
    margin-top: 2rem;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;

export const TeamFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  .btn {
    padding-left: 0;
    padding-right: 0;
  }

  ${MEDIA_QUERY.mobileL} {
    flex-direction: column;
  }
`;
