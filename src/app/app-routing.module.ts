import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageCompareComponent } from './image-compare/image-compare.component';
import { HomeComponent } from './home/home.component';
import { ImageListComponent } from './image-list/image-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      state: ''
    }
  },
  {
    path: 'images',
    component: ImageListComponent,
    data: {
      state: 'imageList'
    }
  },
  {
    path: 'image/:id',
    component: ImageCompareComponent,
    data: {
      state: 'imageCompare'
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
