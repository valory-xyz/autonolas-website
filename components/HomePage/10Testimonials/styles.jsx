import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { backgroundGradient } from 'components/GlobalStyles';

export const SectionTestimonial = styled.div`
  ${backgroundGradient}
  .header {
    margin-top: 2rem;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;

export const EmptyLogo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background-color: ${COLOR.GREY_1};
  opacity: 0.3;
`;

export const EachTestimonial = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .testimonial-text {
    p {
      display: inline;
      margin: 0;
    }
  }
  .company-info {
    margin-top: 2rem;
    img {
      border-radius: 20px;
      width: 120px;
      height: 120px;
    }
    .ant-row-stretch {
      height: 100%;
    }
    .user_title {
      font-size: 14px;
    }
  }

  ${MEDIA_QUERY.tabletL} {
    .company-info {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .company-info {
      margin-top: 1rem;
    }
  }
`;

export const EmployeeDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5,
  h3 {
    margin: 0;
  }
`;
