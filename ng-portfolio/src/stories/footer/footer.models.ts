export interface SocialMedia {
  icon_url: string;
  href_url: string;
  altText: string;
  description?: string;
}
export interface Logo {
  icon_url: string;
  altText: string;
}
export interface FooterContent {
  logo: Logo;
  heading: string;
  linkedIn: SocialMedia;
  gitHub: SocialMedia;
}
