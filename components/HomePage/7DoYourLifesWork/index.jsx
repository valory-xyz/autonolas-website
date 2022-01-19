import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
// import Description from 'common-util/Description';
import { handleJoinDiscord } from 'common-util/functions';
import { SectionSeven, RowOne, RowTwo } from './styles';

const LIST = [
  {
    desc: 'Do foundational work in early community development',
  },
  {
    desc: 'Get recognized for your impact',
  },
  {
    desc: 'Work on your own terms and help set the rules',
  },
];

const DoYourLifesWork = () => (
  <SectionSeven className="section section-7" id="community">
    <div className="description-l-3">THE AUTONOLAS COMMUNITY</div>

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

    <RowOne>
      {LIST.map(({ desc }, index) => {
        const getId = () => `your-head-start-in-${index}`;
        return (
          <div key={getId()} className={`column column-${index + 1}`}>
            <p className="content description-l-4">{desc}</p>
          </div>
        );
      })}
    </RowOne>
    <Button
      type="primary"
      title="Join Discord"
      className="btn-center"
      onClick={handleJoinDiscord}
    />

    <RowTwo>
      <div className="column column-1">
        <div className="content">
          <div className="description-l-4 bold">PREFER TO DIVE RIGHT IN?</div>
          <div className="time description-l-4">
            <p>Community Office Hours are every Friday</p>
            <p>
              at&nbsp;
              <span>14:00 UTC</span>
            </p>
          </div>
        </div>
      </div>

      <div className="column column-2">
        <Button
          type="outline"
          title="Join Voice Channel"
          onClick={() => window.open('https://discord.gg/rHkmAXm8YV')}
        />
      </div>

      <div className="column column-3">
        <div className="content description-l-4">
          <p>What happens during Community Office Hours?</p>
          <p>
            Anything! This is an open-ended opportunity to connect with us.
            It&apos;s a great way to get an intro to the project and community,
            ask questions and find out how you can get involved.
          </p>
          <p>Good vibes only.</p>
        </div>
      </div>
    </RowTwo>
  </SectionSeven>
);

export default DoYourLifesWork;
