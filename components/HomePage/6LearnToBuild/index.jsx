import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { SectionSix } from './styles';

const AcceleratedLearning = () => (
  <SectionSix
    className="section section-6"
    id="developers"
  >
    <div className="dev-academy-logo">
      <Image
        src="/images/accelerated-learning/agent-dev-academy.png"
        alt="Accelerated learning logo"
        width={140}
        height={190}
      />
    </div>

    <Header className="header" title="Learn to build autonomous services" />

    <div className="row row-1">
      <Description
        type={4}
        title=" Complete our video course and apply to build alongside other developers"
      />
    </div>

    <div className="row row-2">
      <Link href="/learn-to-build-autonomous-services">
        <a rel="noopener noreferrer" href="/learn-to-build-autonomous-services">
          Start video course
        </a>
      </Link>
    </div>
  </SectionSix>
);

export default AcceleratedLearning;
