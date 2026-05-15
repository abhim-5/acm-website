// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Navigation links
const navLinks = [
  { label: 'About Us', url: '#services' },
  { label: 'Events', url: '#works' },
  { label: 'Team', url: '#team-section' },
  { label: 'Contact', url: '#contact-us-button' },
];

const navbarLinks = [
  { label: 'Home', url: '#hero' },

  ...navLinks,
];

// ACM NIT Surat social media
const socialLinks = [
  { label: 'Twitter', url: 'https://twitter.com/acmnitsurat' },
  { label: 'Facebook', url: 'https://www.facebook.com/acmnitsurat' },
  { label: 'GitHub', url: 'https://github.com/acm-svnit' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/acmnitsurat' },
];

export { socialLinks, navLinks, navbarLinks };
