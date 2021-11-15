import styled from 'styled-components';
import { COLOR, FONT_SIZE } from 'util/theme';
import { handleJoinDiscord } from 'common-util/functions';

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
    background-image: url("/images/birth-place/discord-band.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
  .banner-text {
    cursor: pointer;
    i {
      margin-left: 4px;
    }
  }
`;

const Banner = () => (
  <BannerContainer className="">
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
  </BannerContainer>
);

export default Banner;
