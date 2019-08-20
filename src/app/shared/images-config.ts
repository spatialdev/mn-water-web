import { ImageComparison } from './image-comparison';

/**
 * Default list of image comparisons
 * This isolated file allows for easily updating is files change
 */
export class ImagesConfig {

  images: ImageComparison[];

  constructor() {
    this.images = [
      {
        id: 1,
        title: 'Test 1',
        desc: 'This is a description',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug1.jpg',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug2.jpeg',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 2,
        title: 'Test 2',
        desc: 'This is a description',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug1.jpg',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug2.jpeg',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 3,
        title: 'Test 3',
        desc: 'This is a description',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug1.jpg',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug2.jpeg',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 4,
        title: 'Test 4',
        desc: 'This is a description',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug1.jpg',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug2.jpeg',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 5,
        title: 'Test 5',
        desc: 'This is a description',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug1.jpg',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug2.jpeg',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 6,
        title: 'Test 6',
        desc: 'This is a description',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug1.jpg',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/pug2.jpeg',
            alt: '',
            year: '2019'
          }
        ]
      },
    ];
  } 


  /**
   * For fetching a list of all image comparisons
   */
  fetchImageComparisons() {
    return this.images;
  }

  fetchImageComparison(id: number) {
    console.log(id);
    return this.images.find((comparison) => {
      return comparison.id == id;
    });
  }

}


