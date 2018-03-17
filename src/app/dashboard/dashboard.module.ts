import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoute} from './dashboard.routing';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {FusionChartsModule} from 'angular4-fusioncharts';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    ChartsModule,
    RouterModule.forChild(DashboardRoute)
  ],
})
export class DashboardModule {
  constructor() {
    console.log('in dashboard module');
  }
}
