import React from 'react';
import Header from 'common-util/Header';
import { SectionTen } from '../styles';

const founders = [
  {
    id: 'founder-1',
    name: 'David Galindo',
    desc: [
      'Cryptography & research',
      'Ex-Professor of Cybersecurity,',
      'University of Birmingham. Extensively',
      'published.',
    ],
    socials: [
      { type: 'linkedin', url: 'https://uk.linkedin.com/in/dgcrypto' },
      { type: 'twitter', url: '' },
    ],
  },
  {
    id: 'founder-2',
    name: 'David Minarsch',
    desc: [
      'Engineering & Multi-agent systems',
      'Creator of first multi-agent systems',
      'framework for crypto. PhD Applied',
      'Game Theory University of Cambridge.',
    ],
    socials: [
      { type: 'linkedin', url: 'https://uk.linkedin.com/in/davidminarsch' },
      { type: 'twitter', url: 'https://twitter.com/david_enim' },
    ],
  },
  {
    id: 'founder-3',
    name: 'Oaksprout the Tan',
    desc: [
      'Growth',
      'Established DeFi community contributor',
      'and investor. Prev 10+ years in web2',
      'product development.',
    ],
    socials: [
      { type: 'linkedin', url: '' },
      { type: 'twitter', url: 'https://twitter.com/tannedoaksprout' },
    ],
  },
];

const foundingTeam = [
  {
    id: 'team-1',
    name: 'Gemma Welsh',
    desc: 'Founder Associate',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/gemma-welsh/' },
      { type: 'twitter', url: 'https://twitter.com/contentwillvary' },
    ],
    imageUrl: '',
  },
  {
    id: 'team-2',
    name: 'David Vilela',
    desc: 'Senior Python Engineer',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/dvilela/' },
      { type: 'twitter', url: 'https://twitter.com/dvilelaf' },
    ],
    imageUrl: '',
  },
  {
    id: 'team-3',
    name: 'Viraj Patel',
    desc: 'Junior Backend Engineer',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/angrybayblade/' },
      { type: 'twitter', url: 'https://twitter.com/angrybayblade' },
    ],
    imageUrl: '',
  },
  {
    id: 'team-4',
    name: 'Adamantios Zaras',
    desc: 'ML & Data Engineer',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/adamantios/' },
      { type: 'twitter', url: '' },
    ],
    imageUrl: '',
  },
  {
    id: 'team-5',
    name: 'Adriano',
    desc: 'Ecosystem Associate',
    socials: [
      { type: 'linkedin', url: '' },
      { type: 'twitter', url: 'https://twitter.com/bradrian_0x' },
    ],
    imageUrl: '',
  },
  {
    id: 'team-6',
    name: 'Mariapia Moscatiello',
    desc: 'Research Scientist',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/mariapia-moscatiello-a78937210/',
      },
      { type: 'twitter', url: '' },
    ],
    imageUrl: '',
  },
  {
    id: 'team-7',
    name: 'Camelia Cucolea',
    desc: 'Brand Visual Designer',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/camelia-cucolea-a33836220/',
      },
      { type: 'twitter', url: '' },
    ],
    imageUrl: '',
  },

  {
    id: 'team-2',
    name: 'Mohan',
    desc: 'FrontEnd Engineer',
    socials: [
      // { type: 'linkedin', url: 'https://www.linkedin.com/in/mohandast52/' },
      { type: 'twitter', url: 'https://twitter.com/Mohan_das_' },
    ],
    imageUrl: '',
  },
];

export const getSocials = socials => (
  <div className="socials">
    {socials.map(social => {
      if (!social.url) return null;
      const src = `/images/common/${social.type}${
        social.iconSize ? `-${social.iconSize}` : ''
      }.svg`;

      return (
        <a
          href={social.url}
          className={social.type}
          target="_blank"
          rel="noopener noreferrer"
          key={`social-${social.type}`}
        >
          <img src={src} alt="" />
        </a>
      );
    })}
  </div>
);

const About = () => (
  <SectionTen className="section section-10" id="about">
    <Header className="header" title="About" />
    <div className="row row-1 founders">
      {founders.map(({
        name, desc, socials, id,
      }) => (
        <div key={id} className="founder">
          <div className="name">{name}</div>
          <ul className="what-they-do">
            {desc.map(e => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          {getSocials(socials)}
        </div>
      ))}
    </div>

    <div className="row-2 founding-team">
      <div className="found-team-desc name">
        <p>Founding Team</p>
        <p>Overflowing with talent</p>
      </div>

      {foundingTeam.map(({ name, desc, socials }, index) => {
        const getId = i => `founding-team-${i}`;
        return (
          <div key={getId(index)} className="each-member">
            <div className="member-image" />
            <div className="name">{name}</div>
            <ul className="what-they-do">
              <li>{desc}</li>
            </ul>
            {getSocials(socials)}
          </div>
        );
      })}
    </div>

    <div className="row-3 investors">
      <div className="found-team-desc name">
        <p>Selected Investors</p>
      </div>

      <div className="investors-banner">
        <img src="/images/about/image-1.png" alt="About - Investor - 1" />
        <img src="/images/about/image-2.png" alt="About - Investor - 2" />
        <img src="/images/about/image-3.png" alt="About - Investor - 3" />
      </div>
    </div>
  </SectionTen>
);

export default About;
