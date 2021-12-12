import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { GalleryTwoRoutingModule } from './gallery-two-routing.module';
import { GalleryTwoComponent } from './gallery-two.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [GalleryTwoComponent, ContentComponent],
  imports: [
    CommonModule,
    GalleryTwoRoutingModule,
    SharedModule,
    NgxPaginationModule,
    MatTabsModule
  ]
})
export class GalleryTwoModule { }
