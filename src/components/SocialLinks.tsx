import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import insta from '../images/social-media-icons/instagram.png';
import koFi from '../images/social-media-icons/ko-fi.png';
import facebook from '../images/social-media-icons/facebook.png';
import redbubble from '../images/social-media-icons/redbubble.png';

const SocialLinks = ({ linkIsText }: { linkIsText?: boolean }) => {
  const socials = [
    {
      href: 'https://www.facebook.com/piperstrangeart/',
      name: 'Facebook',
      icon: facebook.src,
    },
    {
      href: 'https://instagram.com/piperstrangeart',
      name: 'Instagram',
      icon: insta.src,
    },
    {
      href: 'https://ko-fi.com/piperstrangeart',
      name: 'Ko-fi',
      icon: koFi.src,
    },
    {
      href: 'https://www.redbubble.com/people/piperstrange',
      name: 'Redbubble Shop',
      icon: redbubble.src,
    },
  ];

  return <ul>
    {
      socials.map((item, index) => {
        const linkDisplay = linkIsText ? <span key={index}>{item.name}</span>
          : <Image src={item.icon} alt={item.name} width="25" height="25" key={index} />;
        return (
          <li key={index}>
            <Link href={item.href} target='_blank' key={index}>
              {linkDisplay}
            </Link>
          </li>
        );
      })
    }
  </ul>;
};

export default SocialLinks;
