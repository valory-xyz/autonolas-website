import React from 'react';
import Header from 'common-util/Header';
import { getSocials } from 'common-util/functions';
import { FOUNDERS, FOUNDING_TEAM } from './constants';
import { SectionTen } from './styles';

const About = () => {
  const sortedTeamList = FOUNDING_TEAM.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <SectionTen className="section section-10" id="about">
      <Header className="header" title="About" />
      <div className="row row-1 founders">
        {FOUNDERS.map(({
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
