import Image from 'next/image';
import Twitter from '../../public/images/common/twitter.svg';
import Linkedin from '../../public/images/common/linkedin.svg';
import Discord from '../../public/images/common/discord.svg';

export const handleJoinDiscord = () => {
  window.open('https://discord.com/invite/z2PT65jKqQ');
};

export const getSocials = (socials, renderFormat = 'img') => (
  <div className="socials">
    {socials.map(({
      url, type, iconSize, size,
    }) => {
      if (!url) return null;

      const src = `/images/common/${type}${
        iconSize ? `-${iconSize}` : ''
      }.svg`;

      return (
        <a
          href={url}
          className={type}
          target="_blank"
          rel="noopener noreferrer"
          key={`social-${type}`}
          aria-label={`social-${type}`}
        >
          {renderFormat === 'svg' ? (
            <>
              {type === 'twitter' && <Twitter width={24} height={24} />}
              {type === 'linkedin' && (
                <Linkedin width={24} height={24} />
              )}
              {type === 'discord' && <Discord width={24} height={24} />}
            </>
          ) : (
            <>
              {size ? (
                <Image
                  src={src}
                  alt=""
                  width={size.width}
                  height={size.height}
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
