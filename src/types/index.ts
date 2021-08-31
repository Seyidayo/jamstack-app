export type UrlType = {
  url: string;
};

export type ImageType = {
  file: UrlType;
};

export type ProductType = {
  contentful_id: string;
  name: string;
  description: object;
  image: ImageType;
  starrating: number;
  price: number;
  link: string;
  reviews: number;
};

export type CalendlyEventType = {
  event?: string;
  payload?: object;
};
