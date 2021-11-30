import Image from 'next/image';
import GithubS from '../../public/images/common/github-small.svg';
import Twitter from '../../public/images/common/twitter.svg';
import Linkedin from '../../public/images/common/linkedin.svg';
import Discord from '../../public/images/common/discord.svg';

export const handleJoinDiscord = () => {
  window.open('https://discord.com/invite/z2PT65jKqQ');
};

export const getSocials = (socials, renderFormat = 'img') => (
  <div className="socials">
    {socials.map(social => {
      if (!social.url) return null;

      const src = `/images/common/${social.type}${
        social.iconSize ? `-${social.iconSize}` : ''
      }.svg`;

      return (
        <a
          href={social.url}
          className={social.type}
          target="_blank"
          rel="noopener noreferrer"
          key={`social-${social.type}`}
          aria-label={`social-${social.type}`}
        >
          {renderFormat === 'svg' ? (
            <>
              {social.type === 'twitter' && <Twitter width={24} height={24} />}
              {social.type === 'linkedin' && (
                <Linkedin width={24} height={24} />
              )}
              {social.type === 'discord' && <Discord width={24} height={24} />}
              {social.type === 'github' && (
                <>
                  {social.iconSize === 'small' ? (
                    <GithubS width={24} height={24} />
                  ) : (
                    <GithubS width={24} height={24} />
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {social.size ? (
                <Image
                  src={src}
                  alt=""
                  width={social.size.width}
                  height={social.size.height}
                />
              ) : (
                <>
                  <img src={src} alt="" />
                </>
              )}
            </>
          )}
        </a>
      );
    })}
  </div>
);
