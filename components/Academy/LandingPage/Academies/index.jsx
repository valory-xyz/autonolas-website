import { Table } from 'antd';
import Header from 'common-util/Header';
import { getAnchor } from 'common-util/functions';
import { AcademiesContainer } from './styles';

const columns = [
  {
    title: 'Cohort',
    dataIndex: 'cohort',
    key: 'cohort',
    render: value => (
      <div>
        {value.name}
        <br />
        (
        {value.link ? getAnchor(value.linkName, value.link) : 'Ongoing'}
        )
      </div>
    ),
    width: 300,
  },
  {
    title: 'Participants',
    dataIndex: 'participants',
    key: 'participants',
    render: value => (value || []).map(e => (
      <div>{e.link ? getAnchor(e.name, e.link) : e.name}</div>
    )),
    width: 300,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: value => (
      <div>
        {(value || []).map((e, index) => (
          <>
            {value.length > 1 && index === value.length - 1 ? ' & ' : ''}
            {getAnchor(e.name, e.link)}
            {e.isWip ? (
              <>
                <br />
                (WIP)
              </>
            ) : (
              ''
            )}
          </>
        ))}
      </div>
    ),
  },
  // {
  //   title: 'Quotes',
  //   dataIndex: 'quotes',
  //   key: 'quotes',
  //   render: value => value,
  // },
];

const data = [
  {
    key: '1',
    cohort: {
      name: 'Academy 1',
      linkName: 'NFTs 1-3',
      link: 'https://nftrade.com/assets/avalanche/0x8f36ff50a331e638aa510f092b5448a03d432611',
    },
    participants: [{ name: 'Ardian' }, { name: 'Marcel' }, { name: 'Simon' }],
    product: [
      {
        name: 'El Collectooorr',
        link: 'https://elcollectooorr.art/',
        isWip: false,
      },
      {
        name: 'code',
        link: 'https://github.com/valory-xyz/agent-academy-1',
        isWip: false,
      },
    ],
    quotes: '',
  },
  {
    key: '2',
    cohort: {
      name: 'Academy 2',
      linkName: 'NFTs 4',
      link: 'https://nftrade.com/assets/avalanche/0x8f36ff50a331e638aa510f092b5448a03d432611',
    },
    participants: [{ name: 'Deadzen' }, { name: '+ 5 who didn\'t complete ' }],
    product: [
      {
        name: 'Keeper Service',
        link: 'https://github.com/valory-xyz/agent-academy-2',
        isWip: true,
      },
    ],
    quotes: '',
  },
  {
    key: '3',
    cohort: {
      name: 'Academy 3',
      linkName: 'NFT 5 & 6',
      link: 'https://nftrade.com/assets/avalanche/0x8f36ff50a331e638aa510f092b5448a03d432611',
    },
    participants: [
      { name: 'Philipp Bunke' },
      { name: 'Gab' },
      { name: '+ 2 who didn\'t complete' },
    ],
    product: [
      {
        name: 'Keeper Service II',
        link: 'https://github.com/valory-xyz/agent-academy-2',
        isWip: true,
      },
    ],
    quotes: '',
  },
  {
    key: '4',
    cohort: {
      name: 'Academy 4',
      linkName: 'Ongoing',
      link: null,
    },
    participants: [
      { name: 'Skale (Chadwick & Jace)', link: 'https://skale.space/ ' },
      { name: 'Dhiraj' },
      { name: 'The Great Axios' },
    ],
    product: [
      {
        name: 'Autonomous service to forward RPC requests to specific endpoints',
        link: 'https://github.com/valory-xyz/agent-academy-4',
        isWip: true,
      },
    ],
    quotes: '',
  },
];

const Academies = () => (
  <AcademiesContainer className="section" id="past-cohorts">
    <Header title="Past cohorts" className="header" />
    <Table columns={columns} dataSource={data} pagination={false} bordered />
  </AcademiesContainer>
);

export default Academies;
