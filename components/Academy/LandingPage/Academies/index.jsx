import { Table } from 'antd';
import { getAnchor } from 'common-util/functions';
import { AcademiesContainer } from './styles';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => getAnchor(text, 'https://twitter.com/autonolas'),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Academies = () => (
  <AcademiesContainer className="section">
    <Table columns={columns} dataSource={data} pagination={false} />
  </AcademiesContainer>
);

export default Academies;
