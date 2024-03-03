export interface SocialMedia {
  icon_url: string;
  href_url: string;
  alt_text: string;
  description?: string;
}
export interface Logo {
  icon_url: string;
  alt_text: string;
}
export interface FooterContent {
  logo: Logo;
  heading: string;
  linkedIn: SocialMedia;
  gitHub: SocialMedia;
}
