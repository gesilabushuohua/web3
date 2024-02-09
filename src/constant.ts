
export const navlist = [
 
  {
    text: 'AGENDA',
    path: '/agenda',
  },
  {
    text: 'ARCHIVE',
    path: '/archive',
  },
]

export const Twitter = 'https://twitter.com/U_HackWeb3';
export const Telegram = 'https://t.me/uhackweb3';
export const Email = 'mailto:business@uhack.xyz';
export const Link = 'https://u-hack.devfolio.co';

export const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    "iphone",
    "ipod",
    "ipad",
    "android",
    "webos",
    "blackberry",
    "windows phone",
  ];

  return mobileKeywords.some((keyword) => userAgent.includes(keyword));
};
