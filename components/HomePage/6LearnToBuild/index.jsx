import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { SectionSix, DevAcademyLogo } from './styles';

const AcceleratedLearning = () => (
  <SectionSix className="section section-6" id="developers">
    <DevAcademyLogo>
      <Image
        src="/images/accelerated-learning/agent-dev-academy.png"
        alt="Accelerated learning logo"
        width={140}
        height={190}
      />
    </DevAcademyLogo>

    <Header className="header" title="Learn to build autonomous services" />

    <div className="row row-1">
      <Description
        type={4}
        title=" Complete our video course and apply to build alongside other developers"
      />
    </div>

    <div className="row row-2">
      <div className="start-learning">
        <Link href="/learn-to-build-autonomous-services">
          <a
            rel="noopener noreferrer"
            href="/learn-to-build-autonomous-services"
          >
            <Image
              src="/images/accelerated-learning/play-video.svg"
              alt="Accelerated learning logo"
              width={96}
              height={108}
            />
            START VIDEO COURSE
          </a>
        </Link>
      </div>
    </div>
  </SectionSix>
);

export default AcceleratedLearning;
