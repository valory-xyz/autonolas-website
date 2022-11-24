import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import {
  SectionThree,
  ComparisonTable,
  Yes,
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
    id: 'continuous-on',
    name: 'CONTINUOUS / ALWAYS ON',
    smartContractService: false,
    webServices: true,
    decentralizedService: true,
  },
  {
    id: 'full-stack',
    name: 'FULL-STACK',
    smartContractService: false,
    webServices: true,
    decentralizedService: false,
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
          <span className="sub-text">and</span>
          &nbsp;
          <span className="ib">Sophisticated</span>
        </>
      )}
    />

    <Description
      type={2}
      title="Software services you can build and own. Build with the best of smart
    contracts and Web2 apps."
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
                  <td>{smartContractService ? <Yes /> : <No />}</td>
                  <td>{webServices ? <Yes /> : <No />}</td>
                  <td>{decentralizedService ? <Yes /> : <No />}</td>
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
