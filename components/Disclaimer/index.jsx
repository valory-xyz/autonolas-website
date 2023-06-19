import SimpleMarkdownBlock from 'common-util/SimpleMarkdownBlock';
import content from './content.md';

const DisclaimerText = () => (
  <SimpleMarkdownBlock title="Disclaimer" content={content} />
);

export default DisclaimerText;
