import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageComparison } from '../shared/image-comparison';
import { ImagesConfig } from '../shared/images-config';
//import '../../../node_modules/juxtaposejs/build/js/juxtapose.js';

declare const juxtapose: any;

@Component({
  selector: 'app-image-compare',
  templateUrl: './image-compare.component.html',
  styleUrls: ['./image-compare.component.scss']
})
export class ImageCompareComponent implements OnInit, AfterViewInit, OnDestroy {
  appRouter: Router;
  imagesConfig: ImagesConfig;
  compare: ImageComparison;
  id: number;
  private sub: any;

  constructor(private router: Router,
              private route: ActivatedRoute) { 
    this.appRouter = router;
  }

  ngOnInit() {
    this.imagesConfig = new ImagesConfig();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.compare = this.imagesConfig.fetchImageComparison(this.id);
    });
  }

  ngAfterViewInit() {
    juxtapose.scanPage();

    const $juxtapose = document.querySelectorAll('.juxtapose');
    const $juxtapose_container = document.querySelectorAll('#juxtHolder');

    window.onresize = function() {
      let juxtapose_ratio = $juxtapose[0].offsetHeight / $juxtapose[0].offsetWidth;
      let new_width = $juxtapose_container[0].offsetWidth;
      let new_height = new_width * juxtapose_ratio;

      $juxtapose[0].style.width = new_width + "px";
      $juxtapose[0].style.height = new_height + "px";
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
