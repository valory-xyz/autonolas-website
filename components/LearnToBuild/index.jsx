import Image from 'next/image';
// import Link from 'next/link';
import Description from 'common-util/Description';
import Button from 'common-util/Button';
import { useCheckMobileScreen } from 'common-util/hooks';
import LIST from './constants';
import {
  Container,
  H3,
  VideoTable,
  ModulesFinished,
  Hr,
  DoThisTask,
} from './styles';

const LearnToBuild = () => {
  const isMobile = useCheckMobileScreen();

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
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {subList.map(({
                  no, title, videoLink, length, slideLink,
                }) => (
                  <tr key={`${id}-${no}`}>
                    <td>{no}</td>
                    <td>
                      <a
                        href={videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    </td>
                    <td>{length}</td>
                    <td>
                      <a
                        href={slideLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Slides
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </VideoTable>

            {doThisTask ? (
              <DoThisTask>
                Do&nbsp;
                <a rel="noopener noreferrer" href={doThisTask} target="_blank">
                  this task
                </a>
                &nbsp;when you&apos;ve finished Module&nbsp;
                {index}
                &nbsp;videos
              </DoThisTask>
            ) : null}

            <Hr />
          </div>
        ))}

        <div className="row-2">
          <p className="project-challenge">
            Do&nbsp;
            <a rel="noopener noreferrer" href="/" target="_blank">
              this project
            </a>
            &nbsp;to challenge yourself and get access to the Builder Track
          </p>

          <Hr />
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
                className="btn-center"
                title="Apply for Builder Track"
                onClick={() => window.open('http://eepurl.com/hLajPb')}
              />
            </div>
          </ModulesFinished>
        </div>
      </div>
    </Container>
  );
};

export default LearnToBuild;
