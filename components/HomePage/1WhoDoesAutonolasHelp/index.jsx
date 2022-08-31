import React from 'react';
// import PropTypes from "prop-types";
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { ThreeColumnContents } from 'components/GlobalStyles';
import { SectionWhoDoesAutonolasHelp } from './styles';

const LIST = [
  {
    id: 1,
    title: 'DAO Operators',
    desc: 'Outspace your competition and remain decentralized with rich social coordination and software-based operations.',
    imgUrl: 'background.webp',
  },
  {
    id: 2,
    title: 'Protocol Developers',
    desc: 'Build and own unified off-chain infrastructure like oracles, keepers and bridges.',
    imgUrl: 'background.webp',
  },
  {
    id: 3,
    title: 'Product People',
    desc: 'Break out of competitive categories, take market share and expand to mainstream friendly UXes by leveraging the power of off-chain decentralization.',
    imgUrl: 'background.webp',
  },
];

const WhoDoesAutonolasHelp = () => (
  <SectionWhoDoesAutonolasHelp
    className="section section-autonolas-help"
    id="autonolas-help"
  >
    <Description type={2} title="WHO DOES AUTONOLAS HELP?" />

    <br />
    <br />

    <ThreeColumnContents>
      {LIST.map(item => (
        <div className="details" key={`blogs-${item.id}`}>
          <div className="column">
            <div
              className="img-container"
              style={{
                backgroundImage: `url("/images/1WhoDoesAutonolasHelp/${item.imgUrl}")`,
              }}
            />
            <div className="header-text">{item.title}</div>
            <div className="subtitle">{item.desc}</div>

            <a href={`/${PATHS.BLOG}/${item.id}`}>
              <Button title="LEARN MORE" type="black" className="mini" />
            </a>
          </div>
        </div>
      ))}
    </ThreeColumnContents>

    <br />
  </SectionWhoDoesAutonolasHelp>
);

export default WhoDoesAutonolasHelp;
