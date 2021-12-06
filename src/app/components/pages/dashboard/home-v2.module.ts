import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { AppsComponent } from './apps/apps.component';
import { ContactComponent } from './contact/contact.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [HomeV2Component, BannerComponent, AboutComponent, TeamComponent, AppsComponent, ContactComponent, BlogpostComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

  ]
})
export class HomeV2Module { }
