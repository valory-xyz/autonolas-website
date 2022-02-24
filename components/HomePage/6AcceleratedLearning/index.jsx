import React from 'react';
import Image from 'next/image';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { SectionSix } from './styles';

const LIST = [
  {
    desc: 'Get guided training from crypto/agent engineering experts.',
    imageUrl: '/images/accelerated-learning/image-1.png',
  },
  {
    desc: 'Become a founding member of the developer community.',
    imageUrl: '/images/accelerated-learning/image-2.png',
  },
  {
    desc: 'Get compounding benefits from building critical early network components.',
    imageUrl: '/images/accelerated-learning/image-3.png',
  },
];

export const PROGRAM_DETAILS = [
  '4 week course, 8-10 hours per week',
  'Cohorts run approximately once a month',
  'Combination of guided lessons, 1:1 mentorship, exercises and project work',
  'Small groups (<10 people)',
];

export const REQUIREMENTS = [
  'Strong coding ability in Python',
  'Bonus: crypto/DeFi knowledge',
  'Bonus: AI/ML experience',
];

const AcceleratedLearning = () => (
  <SectionSix className="section section-6 border-boxes" id="developers">
    <div className="dev-academy-logo">
      <Image
        src="/images/accelerated-learning/agent-dev-academy.png"
        alt="Accelerated learning logo"
        width={140}
        height={190}
      />
    </div>

    <Header
      className="header"
      title="Accelerated Learning for the most Committed Devs"
    />

    <div className="row row-1">
      {LIST.map(({ imageUrl, desc }, index) => {
        const getId = () => `accelerated-learning-${index}`;

        return (
          <div className={`column column-${index + 1}`} key={getId()}>
            <div className="content">
              <div
                className="bg-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <Description className="text" type={4} title={desc} />
            </div>
          </div>
        );
      })}
    </div>

    <div className="row row-2">
      <div className="column column-1">
        <div className="title">Program details</div>
        <div className="text description-l-4">
          {PROGRAM_DETAILS.map((program, index) => {
            const getId = () => `program-details-${index}`;
            return <div key={getId()}>{program}</div>;
          })}
        </div>
      </div>

      <div className="column column-2">
        <div className="title">Requirements</div>
        <div className="text description-l-4">
          {REQUIREMENTS.map((requirement, index) => {
            const getId = () => `requirement-${index}`;
            return <div key={getId()}>{requirement}</div>;
          })}
        </div>
      </div>

      <div className="column column-3">
        <div className="bg-image title-logo" />
        <Button
          title="Apply for Feb '22 Cohort"
          className="btn-center"
          onClick={() => window.open(
            'https://xyz.us5.list-manage.com/subscribe?u=b0e788d1c8b599737210d65cb&id=ace2f55dfa',
          )}
        />
      </div>
    </div>
  </SectionSix>
);

export default AcceleratedLearning;
