import FunnelLandingPage from './index';

const generator = (FUNNELS, funnelId) => {
  const funnel = FUNNELS.find(tempFunnel => tempFunnel.id === funnelId);
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
