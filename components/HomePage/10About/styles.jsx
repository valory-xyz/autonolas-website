import styled from 'styled-components';
import { COLOR, BREAK_POINT } from 'util/theme';

export const SectionTen = styled.div`
  background-image: url("/images/about/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    line-height: normal;
  }
  .member-image {
    height: 480px;
    width: calc(100% - 60px);
    margin-bottom: 32px;
  }
  .name {
    font-family: "triakis__fontbold";
    text-transform: uppercase;
    font-size: 26px;
    line-height: normal;
  }
  .what-they-do {
    display: table-cell;
    vertical-align: middle;
    list-style: none;
    font-size: 18px;
    padding: 0;
    li {
      line-height: 1.2;
    }
  }
  .row-1.founders {
    display: flex;
    justify-content: space-between;
    padding-bottom: 56px;
    border-bottom: 1px solid ${COLOR.GREEN_2};
    .founder {
      max-width: 340px;
      .member-image {
        width: calc(100% - 20px);
      }
    }
    .what-they-do {
      height: 100px;
    }
  }
  .row-2.founding-team {
    display: flex;
    padding: 56px 0;
    margin-right: -50px;
    overflow-x: auto;
    .found-team-desc {
      font-family: "triakis__font_lightregular";
      font-size: 26px;
      margin-right: 48px;
      p {
        margin: 0;
        width: 360px;
        line-height: 1.1;
      }
    }
    .founding-team-members {
      display: flex;
      .each-member {
        flex: none;
        width: 380px;

        .name {
          font-family: "triakis__font_lightregular";
        }
        .what-they-do {
          li {
            margin: 2px 0 16px 0;
          }
        }
      }
    }
  }
  .row-3 {
    padding-top: 56px;
    border-top: 1px solid ${COLOR.GREEN_2};
    .investors-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        &:nth-child(1),
        &:nth-child(3) {
          width: 240px;
        }
        &:nth-child(2) {
          max-width: 640px;
        }
      }
    }
  }

  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/about/background-mobile.jpg");
    .member-image {
      width: 200px !important;
      height: 300px;
    }
    .row-1.founders {
      flex-direction: column;
      padding-bottom: 0;
      .founder {
        margin-bottom: 48px;
        .name {
          font-family: "triakis__font_lightregular";
        }
      }
    }
    .row-2.founding-team {
      flex-direction: column;
      margin-right: -10px;
      overflow-x: hidden;
      .founding-team-members {
        overflow-x: auto;
        margin-top: 20px;
        .each-member {
          width: 280px;
        }
      }
      .found-team-desc {
        line-height: normal;
      }
    }
    .row-3 {
      .investors-banner {
        img {
          &:nth-child(1),
          &:nth-child(3) {
            width: 60px;
          }
          &:nth-child(2) {
            max-width: 160px;
          }
        }
      }
    }
  }
`;

export const ABC = styled.div``;
