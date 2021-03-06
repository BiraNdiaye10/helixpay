import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { SharedModule } from '../../shared/shared.module';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SchedulesComponent, VideoComponent, ContactComponent],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    SharedModule,NgbModule
  ]
})
export class SchedulesModule { }
