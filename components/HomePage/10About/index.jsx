import React from 'react';
import Header from 'common-util/Header';
import { SectionTen } from './styles';

const founders = [
  {
    id: 'founder-1',
    name: 'David Galindo',
    intro: 'CRYPTOGRAPHY & RESEARCH',
    desc: [
      'Ex-Professor of Cybersecurity, University of Birmingham. Extensively published.',
    ],
    socials: [
      { type: 'linkedin', url: 'https://uk.linkedin.com/in/dgcrypto' },
      { type: 'twitter', url: '' },
    ],
    imageUrl: '/images/about/team/david-g.png',
  },
  {
    id: 'founder-2',
    name: 'David Minarsch',
    intro: 'ENGINEERING & MULTI-AGENT SYSTEMS',
    desc: [
      'Creator of first multi-agent systems framework for crypto. PhD Applied Game Theory, University of Cambridge.',
    ],
    socials: [
      { type: 'linkedin', url: 'https://uk.linkedin.com/in/davidminarsch' },
      { type: 'twitter', url: 'https://twitter.com/david_enim' },
    ],
    imageUrl: '/images/about/team/david-m.png',
  },
  {
    id: 'founder-3',
    name: 'Oaksprout the Tan',
    intro: 'GROWTH',
    desc: [
      'Established DeFi community contributor and investor. Prev 10+ years in web2 product development.',
    ],
    socials: [
      { type: 'linkedin', url: '' },
      { type: 'twitter', url: 'https://twitter.com/tannedoaksprout' },
    ],
    imageUrl: '/images/about/team/oak.png',
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
    imageUrl: '/images/about/team/gemma.png',
  },
  {
    id: 'team-2',
    name: 'David Vilela',
    desc: 'Senior Python Engineer',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/dvilela/' },
      { type: 'twitter', url: 'https://twitter.com/dvilelaf' },
    ],
    imageUrl: '/images/about/team/david-v.png',
  },
  {
    id: 'team-3',
    name: 'Viraj Patel',
    desc: 'Junior Backend Engineer',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/angrybayblade/' },
      { type: 'twitter', url: 'https://twitter.com/angrybayblade' },
    ],
    imageUrl: '/images/about/team/engineering-no-image.png',
  },
  {
    id: 'team-4',
    name: 'Adamantios Zaras',
    desc: 'ML & Data Engineer',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/adamantios/' },
      { type: 'twitter', url: '' },
    ],
    imageUrl: '/images/about/team/adamantios.png',
  },
  {
    id: 'team-5',
    name: 'Adriano',
    desc: 'Ecosystem Associate',
    socials: [
      { type: 'linkedin', url: '' },
      { type: 'twitter', url: 'https://twitter.com/bradrian_0x' },
    ],
    imageUrl: '/images/about/team/adriano.png',
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
    imageUrl: '/images/about/team/research-no-image.png',
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
    imageUrl: '/images/about/team/camelia.png',
  },
  {
    id: 'team-7',
    name: 'Thomas Maybrier',
    desc: 'Community Manager',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/tommaybrier/',
      },
      { type: 'twitter', url: 'https://twitter.com/thomasmaybrier' },
    ],
    imageUrl: '/images/about/team/community-and-ecosystem-no-image.png',
  },
  {
    id: 'team-9',
    name: 'Mohan',
    desc: 'FrontEnd Engineer',
    socials: [
      // { type: 'linkedin', url: 'https://www.linkedin.com/in/mohandast52/' },
      { type: 'twitter', url: 'https://twitter.com/Mohan_das_' },
    ],
    imageUrl: '/images/about/team/engineering-no-image.png',
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

const About = () => {
  const sortedTeamList = foundingTeam.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <SectionTen className="section section-10" id="about">
      <Header className="header" title="About" />
      <div className="row row-1 founders">
        {founders.map(({
          name, desc, socials, id, intro, imageUrl,
        }) => (
          <div key={id} className="founder">
            <img className="member-image" src={imageUrl} alt={`${name}`} />
            <div className="name">{name}</div>
            <div className="description-l-4">{intro}</div>
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
        <div className="found-team-desc">
          <p>Founding team,</p>
          <p>overflowing with talent</p>
        </div>

        <div className="founding-team-members">
          {sortedTeamList.map(({
            name, desc, socials, imageUrl,
          }, index) => {
            const getId = () => `founding-team-${index}`;
            return (
              <div key={getId()} className="each-member">
                <img className="member-image" src={imageUrl} alt={`${name}`} />
                <div className="name">{name}</div>
                <ul className="what-they-do">
                  <li>{desc}</li>
                </ul>
                {getSocials(socials)}
              </div>
            );
          })}
        </div>
      </div>
    </SectionTen>
  );
};

export default About;
