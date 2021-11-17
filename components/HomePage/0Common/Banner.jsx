import styled from 'styled-components';
import PropTypes from 'prop-types';
import { handleJoinDiscord } from 'common-util/functions';
import { COLOR, FONT_SIZE, BREAK_POINT } from 'util/theme';
import { useCheckMobileScreen } from 'common-util/hooks';

export const BannerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
      margin-left: 4px;
    }
  }
  .banner-mobile-menu {
    display: none;
    margin-right: 20px;
    font-size: 22px;
    font-family: "triakis__font_lightregular";
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    width: 100%;
    padding: 12px;
    justify-content: space-between;
    .banner-icon {
      top: 16px;
      width: 34px;
      height: 34px;
    }
    .banner-text {
      width: 160px;
      margin-left: 60px;
      font-size: 14px;
      line-height: normal;
    }
    .banner-mobile-menu {
      display: block;
    }
  }
`;

const Banner = ({ isNavigationOpen, setNavigationToggle }) => {
  const isMobile = useCheckMobileScreen();

  return (
    <BannerContainer isMobile={isMobile}>
      <span className="banner-icon" />

      <span
        className="banner-text"
        role="button"
        tabIndex="0"
        onKeyPress={handleJoinDiscord}
        onClick={handleJoinDiscord}
      >
        JOIN OLAS TRIBE ON DISCORD
        <i>&#8599;</i>
      </span>

      {isMobile && (
        <span
          className="banner-mobile-menu"
          role="button"
          tabIndex={0}
          onClick={() => setNavigationToggle(!isNavigationOpen)}
          onKeyDown={() => setNavigationToggle(!isNavigationOpen)}
        >
          {isNavigationOpen ? 'CLOSE' : 'MENU'}
        </span>
      )}
    </BannerContainer>
  );
};

Banner.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  setNavigationToggle: PropTypes.func.isRequired,
};

// Description.defaultProps = {
//   type: null,
// };

export default Banner;
