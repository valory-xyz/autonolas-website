import { AutonolasLogo, CeramicLogo } from 'common-util/svg';

export const IMPACT_EVALUATORS = [
  {
    emoji: '🛡️',
    id: 'transparent',
    title: 'Transparent',
    description:
      'With open-source code, you can fork, tweak and show all the code being run, maintaining credibility over time.',
  },
  {
    emoji: '🚀',
    id: 'powerful',
    title: 'Powerful',
    description:
      ' Built on Autonolas, there is no upper-end to the complexity of what can be processed, and IEKit can grow uncapped with your org.',
  },
  {
    emoji: '🌐',
    id: 'decentralized-1',
    title: 'Decentralized',
    description:
      'Can be operated in a full-stack decentralized way, reducing the liability of running the organization as you grow.',
  },
  {
    emoji: '🧩',
    id: 'composable',
    title: 'Composable',
    description:
      'Easily add measurable actions to your IE via the Autonolas protocol as other developers add them to the broader ecosystem.',
  },
];

export const FEATURES = [
  {
    emoji: '🛠️',
    id: 'framework',
    title: 'Framework',
    description:
      'IEKit is a framework – no need to do any boilerplate development work, so you can get started quickly.',
  },
  {
    emoji: '🌐',
    id: 'transparent',
    title: 'Transparent',
    description:
      "IEKit is transparent – fork, tweak and show all the open-source code that's being run, important for maintaining credibility over time.",
  },
  {
    emoji: '📡',
    id: 'decentralized-2',
    title: 'Decentralized',
    description:
      'IEKit is decentralized – can be operated in a full-stack decentralized way, reducing the liability of running the organization as you grow.',
  },
  {
    emoji: '🧩',
    id: 'extensible',
    title: 'Extensible',
    description:
      'IEKit is highly extensible & composable – as other developers add measurable actions, you can easily add them to your own IE via the Autonolas protocol.',
  },
  {
    emoji: '💻',
    id: 'powerful',
    title: 'Powerful Compute',
    description:
      'IEKit has powerful compute – compute is run via Autonolas, and therefore there is no upper-end to the complexity of what can be processed.',
  },
  {
    emoji: '🧊',
    id: 'flexible',
    title: 'Flexible',
    description:
      'IEKit is flexible – built as an open-source project, it can adapt to a range of use cases and be modified as needed.',
  },
];

export const MORE_INFO = [
  {
    id: 'ceramic-more-info',
    logoComponent: <CeramicLogo width={62} height={60} />,
    title: 'About Ceramic',
    description:
      "Ceramic is a decentralized data storage network that provides a tamper-evident, immutable, and censorship-resistant foundation for building data-driven applications. It's the perfect substrate for Impact Evaluators built with IEKit.",
    liveLink: {
      url: 'https://ceramic.network/',
      external: true,
    },
  },
  {
    id: 'autonolas-more-info',
    logoComponent: <AutonolasLogo width={124} height={60} />,
    title: 'About Autonolas',
    description:
      "Autonolas is a suite of tools for building off-chain, decentralized servers which can be directly owned by your DAO. It's what powers the backend of Impact Evaluators built with IEKit.",
    liveLink: {
      url: 'https://autonolas.network',
      external: false,
    },
  },
];
