import { backgroundImage } from 'components/GlobalStyles';
import styled from 'styled-components';
import { MEDIA_QUERY, COLOR } from 'util/theme';

export const SectionExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem !important;
  color: ${COLOR.WHITE};
  background-size: cover;
  ${backgroundImage('/images/14Experience/background.jpg')};
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
  }
`;
