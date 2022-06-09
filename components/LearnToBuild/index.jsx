import Image from 'next/image';
import Link from 'next/link';
import Description from 'common-util/Description';
import Button from 'common-util/Button';
import { useCheckMobileScreen } from 'common-util/hooks';
import {
  Container,
  H3,
  VideoTable,
  ModulesFinished,
  Hr,
  DoThisTask,
} from './styles';

// TODO: length of video needs to be fixed

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
    doThisTask: ' ', // TODO: add do this task
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
    doThisTask: ' ', // TODO: add do this task
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
  const isMobile = useCheckMobileScreen();

  const handleApply = () => {
    console.log('apply');
  };

  return (
    <Container>
      <Description type={4} title="AGENT DEV ACADEMY – EDUCATION TRACK" />
      <Hr />
      <H3>
        <Image
          src="/images/accelerated-learning/play-video.svg"
          alt="Accelerated learning logo"
          width={48}
          height={isMobile ? 48 : 92}
        />
        <div>Video Course</div>
      </H3>

      <div className="row row-1">
        {LIST.map(({
          id, name, subList, doThisTask,
        }, index) => (
          <div key={id} className="each-video-section">
            <div className="module-name">{name}</div>
            <VideoTable>
              <thead>
                <tr>
                  <th> </th>
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

            {doThisTask ? (
              <DoThisTask>
                Do&nbsp;
                <Link href="/learn-to-build-autonomous-services">
                  <a
                    rel="noopener noreferrer"
                    href="/learn-to-build-autonomous-services"
                  >
                    this task
                  </a>
                </Link>
                &nbsp;when you&apos;ve finished Module&nbsp;
                {index}
                &nbsp;videos
              </DoThisTask>
            ) : null}

            <Hr />
          </div>
        ))}

        <div className="row-2">
          <ModulesFinished>
            <div className="card-left">
              <div className="logo">
                <Image
                  src="/images/accelerated-learning/tool-icon.svg"
                  alt="Accelerated learning logo"
                  width={120}
                  height={120}
                />
              </div>

              <div className="content">
                <div className="title">Finished all the modules?</div>
                <div className="desc">
                  Develop autonomous services with other builders, guided by our
                  experts
                </div>
              </div>
            </div>

            <div className="card-right">
              <Button
                // type="disabled"
                className="btn-center"
                title="Apply for Builder Track"
                onClick={handleApply}
              />
            </div>
          </ModulesFinished>
        </div>
      </div>
    </Container>
  );
};

export default LearnToBuild;
