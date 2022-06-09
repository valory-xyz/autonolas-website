import Description from 'common-util/Description';
import Button from 'common-util/Button';
import {
  Container, H3, VideoTable, ModulesFinished,
} from './styles';

// TODO: length of video needs to be fixefd

const LIST = [
  {
    id: 'module-0',
    name: 'Module 0',
    doThisTask: null,
    subList: [
      { no: 1, title: 'Background and Motivation', length: '5:32' },
      { no: 2, title: 'Prerequisites', length: '10:12' },
      { no: 3, title: 'Service Example', length: '11:32' },
    ],
  },
  {
    id: 'module-1',
    name: 'Module 1',
    doThisTask: null,
    subList: [
      { no: 1, title: 'Intro to Agent-Based Development', length: '5:32' },
      { no: 2, title: 'AEA Components – Part 1', length: '10:12' },
      { no: 3, title: 'AEA Components – Part 2', length: '11:32' },
      { no: 4, title: 'Recap', length: '11:32' },
    ],
  },
  {
    id: 'module-2',
    name: 'Module 2',
    doThisTask: null,
    subList: [
      { no: 1, title: 'Intro to Multi-Agent Systems', length: '5:32' },
      { no: 2, title: 'Finite State Machines (FSMs)', length: '10:12' },
      { no: 3, title: 'Intro to Tendermint', length: '11:32' },
      { no: 4, title: 'FSM Apps', length: '11:32' },
      { no: 5, title: 'A Service in Detail', length: '11:32' },
      {
        no: 6,
        title: 'Composing Functionality to  Create Complex Services',
        length: '11:32',
      },
      { no: 7, title: 'FSM Apps', length: '11:32' },
    ],
  },
];

const LearnToBuild = () => {
  console.log('first');
  return (
    <Container>
      <Description type={4} title="AGENT DEV ACADEMY – EDUCATION TRACK" />
      <H3>Video Course</H3>

      <div className="row row-1">
        <div className="column-2">
          <ModulesFinished>
            <div className="card-header">Finished all the modules?</div>
            <div className="card-body">
              <p>
                Develop autonomous services with other builders, guided by our
                experts
              </p>

              <Button
                type="disabled"
                className="btn-center"
                title="Apply for Builder Track"
              />
            </div>
          </ModulesFinished>
        </div>

        <div className="column-1">
          {LIST.map(({ id, name, subList }) => (
            <div key={id} className="each-video-section">
              <div className="module-name">{name}</div>
              <VideoTable>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <tbody>
                  {subList.map(({ no, title, length }) => (
                    <tr>
                      <td>{no}</td>
                      <td>{title}</td>
                      <td>{length}</td>
                    </tr>
                  ))}
                </tbody>
              </VideoTable>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LearnToBuild;
