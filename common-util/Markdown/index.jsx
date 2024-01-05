import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMarkdown = styled(ReactMarkdown)`
  & pre {
    font-size: 16px;
    word-break: break-word;
    white-space: pre-wrap;
  }
`;

const Markdown = ({ children }) => (
  <StyledMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    transformImageUri={uri => (uri.startsWith('http') ? uri : `${process.env.NEXT_PUBLIC_API_URL}${uri}`)}
  >
    {children}
  </StyledMarkdown>
);

Markdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Markdown.defaultProps = {
  children: null,
};

export default Markdown;
