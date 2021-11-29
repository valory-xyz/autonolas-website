import Image from 'next/image';

export const handleJoinDiscord = () => {
  window.open('https://discord.com/invite/z2PT65jKqQ');
};

export const getSocials = socials => (
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
        </a>
      );
    })}
  </div>
);
