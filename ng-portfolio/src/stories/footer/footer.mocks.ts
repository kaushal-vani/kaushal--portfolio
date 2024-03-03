import type { FooterContent, Logo, SocialMedia } from './footer.models';
const LinkedInMocks: SocialMedia = {
  icon_url: 'https://img.icons8.com/fluency/48/linkedin.png',
  href_url: 'https://www.linkedin.com/in/kaushal-vani/',
  altText: 'LinkedIn',
  description: 'Professional network',
};
const GitHubMocks: SocialMedia = {
  icon_url: 'https://img.icons8.com/fluency/48/github.png',
  href_url: 'https://github.com/kaushal-vani',
  altText: 'GitHub',
  description: 'Professional network',
};
const LogoMocks: Logo = {
  icon_url: 'https://img.icons8.com/ios/50/program.png',
  altText: 'PortFolio Logo',
};
const FooterContentMock: FooterContent = {
  logo: LogoMocks,
  heading: "© 2024 Kaushal's Portfolio",
  linkedIn: LinkedInMocks,
  gitHub: GitHubMocks,
};

export { FooterContentMock };
