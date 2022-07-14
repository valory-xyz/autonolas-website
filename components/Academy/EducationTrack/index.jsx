import Button from 'common-util/Button';
import Header from 'common-util/Header';
import LIST from './constants';
import {
  AcademyContainer,
  Container,
  DoThisTask,
  Hr,
  ModulesFinished,
  VideoTable,
} from './styles';

const AgentAcademy = () => (
  <>
    <AcademyContainer className="content-list-section">
      <Header
        className="header"
        title={(
          <>
            Academy
            <br />
            Education Track
          </>
        )}
      />
    </AcademyContainer>

    <Container className="section">
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

export default AgentAcademy;
