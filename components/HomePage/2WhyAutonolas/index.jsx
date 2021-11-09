import React from 'react';
import Header from 'common-util/Header';
import { SectionTwo } from '../styles';

const WhyAutonolas = () => (
  <SectionTwo className="section section-2">
    <Header className="header" title="Why Autonolas" />
    <div className="row row-1">
      <div className="column column-1">
        <div className="content">
          <img src="/images/why-autonolas/image-1.png" alt="Why Autonolas 1" />
          <div className="text">
            Crypto promised the world autonomous applications which deliver
            fundamental services without human input. Mega factories in the sky.
          </div>
        </div>
      </div>

      <div className="column column-2">
        <div className="content">
          <img src="/images/why-autonolas/image-2.png" alt="Why Autonolas 2" />
          <div className="text">
            But instead, industrial age processes with dapps which have heavy
            human (DAO) and trustful (bot) elements to keep them running.
          </div>
        </div>
      </div>

      <div className="column column-3">
        <div className="content">
          <img src="/images/why-autonolas/image-3.png" alt="Why Autonolas 3" />
          <div className="text">
            Why? Smart contracts are limited – they can’t do things which are:
            <ul>
              <li>arbitrarily complex</li>
              <li>involve talking to the off-chain world</li>
              <li>involve long-running processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="row row-2">
      <div className="column column-1">
        <div className="content">
          <img src="/images/why-autonolas/image-4.png" alt="Why Autonolas 4" />
        </div>
      </div>

      <div className="column column-2">
        <div className="content">
          <img src="/images/why-autonolas/image-5.png" alt="Why Autonolas 5" />
          <div className="text">
            This unlocks a path to smart contracts applications which are entirely
            self-owned and self-operating. Economic machines which live and thrive
            without direct human input.
          </div>
        </div>
      </div>

      <div className="column column-3">
        <div className="content">
          <img src="/images/why-autonolas/image-6.png" alt="Why Autonolas 6" />
        </div>
      </div>
    </div>
  </SectionTwo>
);

export default WhyAutonolas;
