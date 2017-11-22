export class DetailDto {
  routerUrl: string;
  content: DetailContentDto;
}

export class DetailContentDto {
  title: string;
  details: Array<string>;
  images: Array<ImageDto>;
  mainImage: ImageDto;
}

export class ImageDto {
  url: string;
  alt: string;
  title: string;
  desc: string;
  link: string;
}
