import Image from 'next/image';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import { useCheckMobileScreen } from 'common-util/hooks/useCheckMobileScreen';
import LIST from './constants';
import {
  Container,
  H3,
  VideoTable,
  ModulesFinished,
  Hr,
  DoThisTask,
  AcademyContainer,
} from './styles';

const AgentAcademy = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <>
      <AcademyContainer className="content-list-section">
        <Header className="header" title="Agent Academy" />
      </AcademyContainer>

      <Container className="section">
        <Description type={4} title="ACADEMY EDUCATION TRACK" />
        <H3>
          <Image
            src="/images/Academy/video-icon.png"
            alt="Accelerated learning logo"
            width={96}
            height={isMobile ? 48 : 92}
          />
          <Header className="header ml-2" title="Video Course" />
        </H3>

        <p className="info">
          Welcome to the Autonolas Academy’s self-guided video course! These
          videos and their associated tasks will teach you what you need to know
          to get started as an autonomous service developer. Once you’ve
          finished the course, you’ll be able to apply for our Builder Track.
          The Builder Track is a cohort-based program where you’ll develop
          autonomous services in collaboration with other builders—with expert
          guidance along the way.
        </p>

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
                  {subList.map(
                    ({
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
                    ),
                  )}
                </tbody>
              </VideoTable>

              {doThisTask ? (
                <DoThisTask>
                  Do&nbsp;
                  <a
                    rel="noopener noreferrer"
                    href={doThisTask}
                    target="_blank"
                    download
                  >
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
              <a
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1XqgBhjKOX_DhMSvyz0h4Gd6ywCiOt9wCdzr8bhxoO1Q/export?format=pdf"
                target="_blank"
                download
              >
                this project
              </a>
              &nbsp;to challenge yourself and get access to the Builder Track
            </p>

            <Hr />
            <ModulesFinished>
              <Header className="header" title="Finished All The Modules?" />

              <Button
                title="Apply for Builder Track"
                onClick={() => window.open('https://forms.gle/5EWJumPddrviQrqp8')}
              />
            </ModulesFinished>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AgentAcademy;
