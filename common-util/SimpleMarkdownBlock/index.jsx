import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { BodyContainer, Container } from './styles';

const SimpleMarkdownBlock = ({ title, content }) => (
  <>
    <Container className="content-list-section">
      <Header className="header" title={title} />
    </Container>

    <BodyContainer>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </BodyContainer>
  </>
);

SimpleMarkdownBlock.propTypes = {
  title: PropTypes.instanceOf('string'),
  content: PropTypes.instanceOf('string'),
};

SimpleMarkdownBlock.defaultProps = {
  title: '',
  content: '',
};

export default SimpleMarkdownBlock;
