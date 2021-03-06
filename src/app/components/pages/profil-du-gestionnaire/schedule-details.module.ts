import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleDetailsRoutingModule } from './schedule-details-routing.module';
import { ScheduleDetailsComponent } from './schedule-details.component';
import { SharedModule } from '../../shared/shared.module';
import { AbouttextComponent } from './abouttext/abouttext.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ScheduleDetailsComponent, AbouttextComponent],
  imports: [
    CommonModule,
    ScheduleDetailsRoutingModule,
    SharedModule,NgbModule
  ]
})
export class ScheduleDetailsModule { }
