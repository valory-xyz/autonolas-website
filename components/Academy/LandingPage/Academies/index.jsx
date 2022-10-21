import { Table } from 'antd';
import { getAnchor } from 'common-util/functions';
import { AcademiesContainer } from './styles';

const columns = [
  {
    title: 'Cohort',
    dataIndex: 'cohort',
    key: 'cohort',
    render: text => getAnchor(text, 'https://twitter.com/autonolas'),
    width: 300,
  },
  {
    title: 'Participants',
    dataIndex: 'participants',
    key: 'participants',
    render: value => (value || []).map(e => <div>{e.name}</div>),
    width: 300,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: value => (value || []).map(e => getAnchor(e.name, e.link)),
  },
  {
    title: 'Quotes',
    dataIndex: 'quotes',
    key: 'quotes',
    render: value => value,
  },
];

const data = [
  {
    key: '1',
    cohort: 'Academy 1',
    participants: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
    product: [{ name: 'El Collectooorr', link: 'https://elcollectooorr.art/' }],
    quotes: '',
  },
  {
    key: '2',
    cohort: 'Academy 2',
    participants: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
    product: [
      {
        name: 'Keeper Service',
        link: 'https://github.com/valory-xyz/agent-academy-2',
      },
    ],
    quotes: '',
  },
  {
    key: '3',
    cohort: 'Academy 3',
    participants: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
    product: [
      {
        name: 'Keeper Service II',
        link: 'https://github.com/valory-xyz/agent-academy-3',
      },
    ],
    quotes: '',
  },
  {
    key: '4',
    cohort: 'Academy 4',
    participants: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
    product: [
      {
        name: 'Autonomous service to forward RPC requests to specific endpoints',
        link: 'https://github.com/valory-xyz/agent-academy-4',
      },
    ],
    quotes: '',
  },
];

const Academies = () => (
  <AcademiesContainer className="section">
    <Table columns={columns} dataSource={data} pagination={false} />
  </AcademiesContainer>
);

export default Academies;
