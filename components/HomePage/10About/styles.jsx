import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const SectionTen = styled.div`
  background-image: url("/images/about/background.jpg");
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
    margin: 0 -50px;
    overflow-x: auto;
    .found-team-desc {
      font-family: "triakis__font_lightregular";
      font-size: 26px;
      margin: 0 50px;
      p {
        margin: 0;
        width: 360px;
        line-height: 1.1;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .row-1.founders {
      .founder {
        max-width: 280px;
        .member-image {
          width: 280px;
          height: 420px;
        }
      }
    }
    .row-2.founding-team {
      .found-team-desc {
        max-width: 270px;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    background-image: url("/images/about/background-mobile.jpg");
    .member-image {
      width: 200px !important;
      height: 300px !important;
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
      .found-team-desc {
        line-height: normal;
      }
    }
  }
`;

export const FoundingTeamMembers = styled.div`
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

  ${MEDIA_QUERY.tablet} {
    overflow-x: auto;
    margin-top: 20px;
    .each-member {
      width: 240px;
      &:nth-child(1) {
        margin-left: 50px;
      }
    }
  }
`;
