import React from 'react';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { ThreeColumnContents } from 'components/GlobalStyles';
import { SectionWhoDoesAutonolasHelp } from './styles';

const LIST = [
  {
    id: 1,
    title: 'DAO Operators',
    desc: 'Outspace your competition and remain decentralized with rich social coordination and software-based operations.',
    imgUrl: 'dao-operators.png',
    redirectTo: 'dao-autonomy',
  },
  {
    id: 2,
    title: 'Protocol Developers',
    desc: 'Build and own unified off-chain infrastructure like oracles, keepers and bridges.',
    imgUrl: 'protocol-devs.png',
    redirectTo: 'autonomous-infra',
  },
  {
    id: 3,
    title: 'Product People',
    desc: 'Break out of competitive categories, take market share and expand to mainstream friendly UXes by leveraging the power of off-chain decentralization.',
    imgUrl: 'product-people.png',
    redirectTo: 'smart-products',
  },
];

const WhoDoesAutonolasHelp = () => (
  <SectionWhoDoesAutonolasHelp
    className="section section-autonolas-help"
    id="autonolas-help"
  >
    <Description type={2} title="WHO BENEFITS FROM AUTONOLAS?" />

    <br />
    <br />

    <ThreeColumnContents className="three-column-content">
      {LIST.map(item => (
        <a href={`/${item.redirectTo}`} className="details" key={`blogs-${item.id}`}>
          <div className="column">
            <div
              className="img-container"
              style={{
                backgroundImage: `url("/images/1WhoDoesAutonolasHelp/${item.imgUrl}")`,
              }}
            />
            <div className="header-text">{item.title}</div>
            <div className="subtitle">{item.desc}</div>

            <Button title="LEARN MORE" type="black" className="mini each-content-action" />
          </div>
        </a>
      ))}
    </ThreeColumnContents>

    <br />
  </SectionWhoDoesAutonolasHelp>
);

export default WhoDoesAutonolasHelp;
