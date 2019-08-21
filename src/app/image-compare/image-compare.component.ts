import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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

  @ViewChild('juxtapose', {static: false}) $juxtapose;
  @ViewChild('juxtHolder', {static: false}) $juxtapose_container;

  ngOnInit() {
    this.imagesConfig = new ImagesConfig();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.compare = this.imagesConfig.fetchImageComparison(this.id);
    });
  }

  ngAfterViewInit() {
    juxtapose.scanPage();
    let self = this;

    window.onresize = function() {
      let juxtapose_ratio = self.$juxtapose.nativeElement.offsetHeight / self.$juxtapose.nativeElement.offsetWidth;
      let new_width = self.$juxtapose_container.nativeElement.offsetWidth;
      let new_height = new_width * juxtapose_ratio;

      self.$juxtapose.nativeElement.style.width = new_width + "px";
      self.$juxtapose.nativeElement.style.height = new_height + "px";
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
