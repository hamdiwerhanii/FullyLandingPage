export type FooterLink = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type FooterNavColumn = {
  heading: string;
  links: FooterLink[];
};
