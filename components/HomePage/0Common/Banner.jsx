import styled from 'styled-components';
import { COLOR, FONT_SIZE } from 'util/theme';

export const BannerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLOR.GREEN_1};
  font-size: ${FONT_SIZE[16]};
  padding: 14px;
  .banner-icon {
    position: absolute;
    left: 12px;
    background-image: url("/images/discord-band.png");
    height: 24px;
    width: 72px;
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

const Banner = () => {
  const onBannerClick = () => {
    window.open('https://www.google.com');
  };

  return (
    <BannerContainer className="">
      <span className="banner-icon" />

      <span
        className="banner-text"
        onKeyPress={onBannerClick}
        role="button"
        tabIndex="0"
        onClick={onBannerClick}
      >
        JOIN OLAS TRIBE ON DISCORD
        <i>&#8599;</i>
      </span>
    </BannerContainer>
  );
};

export default Banner;
