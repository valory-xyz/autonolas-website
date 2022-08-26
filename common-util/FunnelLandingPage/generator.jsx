import FunnelLandingPage from './index';

const generator = (FUNNELS, funnelId) => {
  const funnel = FUNNELS.filter(tempFunnel => tempFunnel.id === funnelId)[0];
  const { tagline, lead, cta } = funnel;

  return (
    <FunnelLandingPage
      title={tagline}
      subtitle={lead}
      href={cta?.href}
      btnText={cta?.btnText}
    />
  );
};

export default generator;
