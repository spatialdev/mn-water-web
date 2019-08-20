import { Component, OnInit } from '@angular/core';
import { ImageComparison } from '../shared/image-comparison';
import { ImagesConfig } from '../shared/images-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: ImageComparison[];

  constructor(private router: Router) { }

  ngOnInit() {
    const imagesConfig = new ImagesConfig();
    this.images = imagesConfig.fetchImageComparisons();
  }

  handleImageItemTap(id: number) {
    this.router.navigateByUrl("/image/" + id);
  }

}
