import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import {
  SectionThree,
  ComparisonTable,
  PurbleBall,
  AutonolasService,
  No,
} from './styles';

const DATA_ROWS = [
  {
    id: 'location',
    name: 'LOCATION',
    smartContractService: true,
    webServices: false,
    decentralizedService: false,
  },
  {
    id: 'decentralized',
    name: 'DECENTRALIZED',
    smartContractService: true,
    webServices: false,
    decentralizedService: true,
  },
  {
    id: 'robust',
    name: 'ROBUST',
    smartContractService: true,
    webServices: false,
    decentralizedService: true,
  },
  {
    id: 'transparent',
    name: 'TRANSPARENT',
    smartContractService: true,
    webServices: false,
    decentralizedService: true,
  },
  {
    id: 'composable',
    name: 'COMPOSABLE',
    smartContractService: true,
    webServices: false,
    decentralizedService: false,
  },
  {
    id: 'complex-processing',
    name: 'COMPLEX PROCESSING',
    smartContractService: false,
    webServices: true,
    decentralizedService: true,
  },
  {
    id: 'cross-chain',
    name: 'CROSS CHAIN',
    smartContractService: false,
    webServices: true,
    decentralizedService: true,
  },
  {
    id: 'continous-on',
    name: 'CONTINOUS / ALWAYS ON',
    smartContractService: false,
    webServices: true,
    decentralizedService: true,
  },
];

const getChainType = type => (type ? 'ON-CHAIN' : 'OFF-CHAIN');

const WhyAutonolas = () => (
  <SectionThree className="section section-3" id="what-are-autonomous-services">
    <Description type={2} title="WHAT ARE AUTONOMOUS SERVICES?" />
    <Header
      className="header"
      title={(
        <>
          Decentralized&nbsp;
          <br />
          <span className="sub-text">and</span>&nbsp;
          <span className="ib">Sophisticated</span>
        </>
      )}
    />

    <Description
      type={2}
      title="Software services you can build and own. They have the best of both smart
    contracts and web 2 apps."
      className="sub-content"
    />

    <ComparisonTable>
      <table>
        <thead>
          <tr>
            <th aria-label=" " />
            <th>Autonomous Services</th>
            <th>Smart Contracts</th>
            <th>Web Services</th>
            <th>
              Custom Decentralized
              <div>Services (e.g. oracles)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {DATA_ROWS.map(
            ({
              id,
              name,
              webServices,
              decentralizedService,
              smartContractService,
            }) => {
              if (id === 'location') {
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>OFF-CHAIN</td>
                    <td>{getChainType(smartContractService)}</td>
                    <td>{getChainType(webServices)}</td>
                    <td>{getChainType(decentralizedService)}</td>
                  </tr>
                );
              }

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>
                    <AutonolasService />
                  </td>
                  <td>{smartContractService ? <PurbleBall /> : <No />}</td>
                  <td>{webServices ? <PurbleBall /> : <No />}</td>
                  <td>{decentralizedService ? <PurbleBall /> : <No />}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </ComparisonTable>
  </SectionThree>
);

export default WhyAutonolas;
