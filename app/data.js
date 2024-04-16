import { FaBehance, FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiShoppingBag3Fill } from 'react-icons/ri';
const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/services',
    text: 'Services',
  },
  {
    id: 4,
    url: '/portfolio',
    text: 'Portfolio',
  },
  {
    id: 5,
    url: '/blog',
    text: 'Blog',
  },
  {
    id: 6,
    url: '/contact',
    text: 'Contact',
  },
];

const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.behance.com',
    icon: <FaBehance />,
},
{
    id: 4,
    url: 'https://www.twitter.com',
    icon: <RiShoppingBag3Fill />,
  },
];

export {links, social}