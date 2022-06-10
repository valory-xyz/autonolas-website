import styled from 'styled-components';
import { handleJoinDiscord } from 'common-util/functions';
import { COLOR, FONT_SIZE, MEDIA_QUERY } from 'util/theme';
import { useCheckMobileScreen } from 'common-util/hooks';

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLOR.GREEN_1};
  font-size: ${FONT_SIZE[18]};
  padding: 16px;
  .banner-icon {
    position: absolute;
    left: 12px;
    height: 40px;
    width: 120px;
    top: 10px;
    background-image: ${({ isMobile }) => (!isMobile
    ? "url('/images/birth-place/discord-band.png')"
    : "url('/images/common/discord.svg')")};
    background-repeat: no-repeat;
    background-size: contain;
  }
  .banner-text {
    cursor: pointer;
    i {
      font-style: normal;
      &.navigation-icon {
        margin-left: 16px;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    width: 100%;
    padding: 12px;
    justify-content: space-between;
    .banner-icon {
      top: 16px;
      width: 34px;
      height: 34px;
    }
    .banner-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-left: 60px;
      font-size: 14px;
      line-height: normal;
      .text {
        width: 160px;
      }
      .navigation-icon {
        font-size: 24px;
      }
    }
  }
`;

const Banner = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <BannerContainer isMobile={isMobile} id="banner">
      <span className="banner-icon" />

      <span
        className="banner-text"
        role="button"
        tabIndex="0"
        onKeyPress={handleJoinDiscord}
        onClick={handleJoinDiscord}
      >
        <i className="text">JOIN US ON DISCORD</i>
        <i className="navigation-icon">&#8599;</i>
      </span>
    </BannerContainer>
  );
};

export default Banner;
