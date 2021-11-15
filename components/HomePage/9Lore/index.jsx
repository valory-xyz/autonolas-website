import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { SectionNine } from '../styles';

const PhaseShiftInDapp = () => (
  <SectionNine className="section section-9" id="lore">
    <Header className="header" title="Lore" />

    <div className="row-2">
      <div className="content">
        <img
          src="/images/lore/logo.png"
          alt="Lore logo"
          className="full-width"
        />
        <div className="text-container text-container-1">
          <div className="text-row">
            <div className="column-1">
              <p className="text">
                HUMANS AND MEKS HAVE BEEN ENSLAVED FOR CENTURIES BY THE UNIFISTS
              </p>
            </div>

            <div className="column-2">
              <p className="text">
                THIS HAS LED ALTER ORBIS TO RUN DANGEROUSLY LOW ON OLA, THE
                WORLD’S ENERGY RESOURCE
              </p>
            </div>
          </div>
        </div>

        <div className="text-container text-container-2">
          <div className="text-row">
            <div className="column-1">
              <p className="text">
                ONLY AN ELITE FORCE WITHIN OLAS TRIBE CAN RESTORE BALANCE TO OLA
                FLOWS BEFORE IT’S TOO LATE...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row-3">
      <div className="column column-1 description-l-4">
        <div>Want to help follow the story?</div>
        <Button type="outline" title="follow the story in #lore" />
      </div>

      <div className="column column-2 description-l-4">
        <div>Want to help develop the story?</div>
        <Button type="outline" title="join #world-builders" />
      </div>
    </div>
  </SectionNine>
);

export default PhaseShiftInDapp;
