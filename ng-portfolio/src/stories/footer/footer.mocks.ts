import type { FooterContent, Logo, SocialMedia } from './footer.models';
const LinkedInMocks: SocialMedia = {
  icon_url: '../../assets/tech-stack/linkedin.svg',
  href_url: 'https://www.linkedin.com/in/kaushal-vani/',
  alt_text: 'LinkedIn',
  description: 'Professional network',
};
const GitHubMocks: SocialMedia = {
  icon_url: '../../assets/tech-stack/github.svg',
  href_url: 'https://github.com/kaushal-vani',
  alt_text: 'GitHub',
  description: 'Professional network',
};
const LogoMocks: Logo = {
  icon_url: 'https://img.icons8.com/ios/50/program.png',
  alt_text: 'PortFolio Logo',
};
const FooterContentMock: FooterContent = {
  logo: LogoMocks,
  heading: "© 2024 Kaushal's Portfolio",
  linkedIn: LinkedInMocks,
  gitHub: GitHubMocks,
};

export { FooterContentMock };
