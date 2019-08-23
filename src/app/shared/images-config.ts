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
        title: 'Addition of Water Bodies',
        desc: 'Numerous features have been added to represent ponds near Detroit Lakes, MN.',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_a/a_2011.png',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_a/a_2019.png',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 2,
        title: 'Shifting Riverine Features',
        desc: 'This feature, representing a stretch of the Minnesota River has been altered to better reflect the true  watercourse.',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_b/b_2011.png',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_b/b_2019.png',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 3,
        title: 'Alteration of Numerous Water Features',
        desc: 'These features’ geometries have been altered within the Minnesota Valley National Wildlife Refuge.',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_c/c_2011.png',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_c/c_2019.png',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 4,
        title: 'Expansion of Wetlands',
        desc: 'Wetland features have been added to in this area outside Ortonville, MN.',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_d/d_2011.png',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_d/d_2019.png',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 5,
        title: 'Realignment of Linear Riverine Features',
        desc: 'Linear riverine features representing the Cottonwood River have been adjusted to aerial imagery near Marshall, MN.',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_e/e_2011.png',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_e/e_2019.png',
            alt: '',
            year: '2019'
          }
        ]
      },
      {
        id: 6,
        title: 'Realignment of Linear Riverine Features',
        desc: 'Linear riverine features have been adjusted to aerial imagery near Currie, MN.',
        images: [
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_f/f_2011.png',
            alt: '',
            year: '2011'
          },
          {
            url: 'https://mn-water-images.s3-us-west-2.amazonaws.com/comparison_f/f_2019.png',
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


