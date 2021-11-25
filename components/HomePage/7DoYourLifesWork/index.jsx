import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { handleJoinDiscord } from 'common-util/functions';
import { SectionSeven } from './styles';

const LIST = [
  {
    desc: 'Do foundational work in early community development',
  },
  {
    desc: 'Get recognised for your impact',
  },
  {
    desc: 'Work on your own terms and help set the rules',
  },
];

const DoYourLifesWork = () => (
  <SectionSeven className="section section-7" id="community">
    <div className="description-l-3">COMMUNITY - OLAS TRIBE</div>

    <Header className="header" title="Do your life’s work" />

    <div className="section-7-desc">
      We’re pulling in and enabling one of the most talented and passionate
      communities on the internet.
    </div>

    <img
      src="/images/do-your-lifes-work/line.png"
      alt="Do your life’s work line"
      loading="lazy"
    />

    <div className="row row-1">
      {LIST.map(({ desc }, index) => {
        const getId = () => `your-head-start-in-${index}`;
        return (
          <div key={getId()} className={`column column-${index + 1}`}>
            <p className="content description-l-4">{desc}</p>
          </div>
        );
      })}
    </div>
    <Button
      type="primary"
      title="Join Discord"
      className="btn-center"
      onClick={handleJoinDiscord}
    />

    <div className="row-2">
      <div className="column column-1">
        <div className="content">
          <div className="description-l-4 bold">PREFER TO DIVE RIGHT IN?</div>
          <div className="time description-l-4">
            <p>Calls run every Friday </p>
            <p>
              at&nbsp;
              <span>12.30pm UTC</span>
            </p>
          </div>
        </div>
      </div>

      <div className="column column-2">
        <Button
          type="outline"
          title="Sign up for the call"
          onClick={() => window.open(
            'https://calendar.google.com/event?action=TEMPLATE&tmeid=NDdkY2R2M29qdjZmM20xNjMwdWhtbnFyN2JfMjAyMTExMjZUMTMzMDAwWiBjXzBqMDFqbDFkcDcwcDljNWJnajQ3a2pubm80QGc&tmsrc=c_0j01jl1dp70p9c5bgj47kjnno4%40group.calendar.google.com&scp=ALL',
          )}
        />
      </div>

      <div className="column column-3">
        <div className="content description-l-4">
          <p>What happens at a Welcoming Call?</p>
          <p>
            We orient you around the project and community, answer any questions
            you have and look for ways to get you involved!
          </p>
          <p>Only good vibes.</p>
        </div>
      </div>
    </div>
  </SectionSeven>
);

export default DoYourLifesWork;
