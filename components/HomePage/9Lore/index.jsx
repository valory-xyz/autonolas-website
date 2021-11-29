import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
// import Description from 'common-util/Description';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionNine, RowTwo, RowThree } from './styles';

const PhaseShiftInDapp = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <SectionNine className="section section-9" id="lore">
      <Header className="header" title="Lore" />

      <RowTwo>
        <div className="content">
          <img
            src={`/images/lore/logo${isMobile ? '-mobile' : ''}.png`}
            alt="Lore logo"
            className="full-width"
            loading="lazy"
          />
          <div className="text-container text-container-1">
            <div className="text-row">
              <div className="text-column column-1">
                <p className="text">
                  Humans and Meks have been enslaved for centuries by the
                  Unifists
                </p>
              </div>

              <div className="text-column  column-2">
                <p className="text">
                  This has led Alter Orbis to run dangerously low on Ola, the
                  world’s energy resource
                </p>
              </div>
            </div>
          </div>

          <div className="text-container text-container-2">
            <div className="text-row">
              <div className="text-column column-1">
                <p className="text">
                  Only an elite force within Olas Tribe can restore balance to
                  Ola flows before it’s too late...
                </p>
              </div>
            </div>
          </div>
        </div>
      </RowTwo>

      <RowThree>
        <div className="column column-2 description-l-4">
          <div>Want to help develop the story?</div>
          <Button
            type="outline"
            title="Join #world-builders"
            onClick={() => window.open('https://discord.gg/VWGVs5kGkX')}
          />
        </div>
      </RowThree>
    </SectionNine>
  );
};

export default PhaseShiftInDapp;
