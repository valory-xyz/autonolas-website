import Image from 'next/image';
import get from 'lodash/get';
import Link from 'next/link';
import { SITE_URL } from 'util/constants/site';
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

      const src = `/images/common/${type}${iconSize ? `-${iconSize}` : ''}.svg`;

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
              {type === 'linkedin' && <Linkedin width={24} height={24} />}
              {type === 'discord' && <Discord width={24} height={24} />}
            </>
          ) : (
            <>
              {size ? (
                <Image
                  src={src}
                  alt={`${type} icon`}
                  width={size.width}
                  height={size.height}
                />
              ) : (
                <img src={src} alt=" " />
              )}
            </>
          )}
        </a>
      );
    })}
  </div>
);

export const getFormattedDate = date => date;

export const serverRedirectToError = () => ({
  redirect: {
    destination: '/_error',
    permanent: false,
  },
});

export const getHostName = () => {
  if (typeof window === 'undefined') return SITE_URL;
  return get(window, 'location.host');
};

export const getAnchor = (title, href, otherProps) => {
  const { isLink, isExternal = true } = otherProps || {};

  return isLink ? (
    <Link href={href} passHref>
      <a>{title}</a>
    </Link>
  ) : (
    <a
      href={href}
      target={isExternal ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

/**
 * if autonolas.network is present in the URL, open in the same tab
 *
 * URLs that will be opened in the SAME tab
 *  - docs.autonolas.network
 *  - protocol.autonolas.network
 *  - autonolas.network/blog
 *
 * URLs that will be opened in the different tab
 * - elcollectooorr.art
 */
export const openUrl = url => {
  window.open(
    url,
    (url || '').includes('autonolas.network') ? '_self' : '_blank',
  );
};

/**
 * filter products by category
 */
export const getProducts = (products, c) => products.filter(product => product.category === c);

export const getProduct = (products, id) => products.find(product => product.id === id);
