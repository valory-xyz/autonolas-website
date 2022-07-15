import SimpleMarkdownBlock from 'common-util/SimpleMarkdownBlock';
import content from './content.md';

const PrivacyPolicy = () => (
  <SimpleMarkdownBlock
    title="Privacy Policy"
    content={content}
  />
);

export default PrivacyPolicy;
