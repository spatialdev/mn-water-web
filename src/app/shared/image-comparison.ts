
export class ImageComparison {
  id: number;
  title: string;
  desc: string;
  images: { url: string, alt: string, year: string }[];

  constructor(id: number,
              title: string,
              desc: string,
              images: { url: string, alt: string, year: string }[],
              forSaleUrl?: string) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.images = images;
  }
}
