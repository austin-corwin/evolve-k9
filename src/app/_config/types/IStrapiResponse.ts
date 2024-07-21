interface NavItem {
  id: number;
  label: string;
  url: string;
}
export interface IRichTextBody {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}

interface Logo {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null; // You can specify the formats interface if needed
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null; // You can specify the provider metadata interface if needed
    createdAt: string;
    updatedAt: string;
  };
}

interface Nav {
  id: number;
  phoneNumber: string;
  logo: {
    data: Logo;
  };
  NavItems: NavItem[];
}

interface Button {
  id: number;
  label: string;
  link: string;
}

interface Image {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string | null;
      width: number;
      height: number;
      formats: any; // You can specify the formats interface if needed
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null; // You can specify the provider metadata interface if needed
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface Hero {
  id: number;
  subtitle: string;
  title: string;
  button: Button;
  bgImage: Image;
}

export interface IAbout {
  title: {
    darkTitle: string;
    colorTitle: string;
  };
  body: IRichTextBody[];
  image: Image;
}

export interface IPrograms {
  title: {
    darkTitle: string;
    colorTitle: string;
  };
  subtitle: string;
  titledParagraphs: {
    title: string;
    body: string;
  }[];
  titledParagraphsBorder: {
    title: string;
    body: string;
  }[];
  cta: {
    label: string;
    link: string;
  };
}

export interface IAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  navigation: Nav;
  hero: Hero;
  about: IAbout;
  programs: IPrograms;
}

export interface IStrapiResponse {
  id: number;
  attributes: IAttributes;
}
