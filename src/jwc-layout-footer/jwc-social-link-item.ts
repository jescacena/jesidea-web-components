export type JwcSocialLinkItem = {
  type: SocialLinkType;
  url: string;
};

export enum SocialLinkType {
  Github = "github",
  Linkedin = "linkedin",
  Twitter = "twitter",
}
