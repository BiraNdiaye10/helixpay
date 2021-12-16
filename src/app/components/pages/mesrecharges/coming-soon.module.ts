import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from "ng2-countdown-timer";

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './coming-soon.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ComingSoonComponent, ContentComponent],
  imports: [
    CommonModule,
    ComingSoonRoutingModule,
    SharedModule,
    CountdownModule, NgbModule,
  ]
})
export class ComingSoonModule { }
