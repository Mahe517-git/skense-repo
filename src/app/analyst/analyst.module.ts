import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AnalystComponent } from './analyst.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    AnalystComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    RouterModule.forChild([{ path: '', component: AnalystComponent }]),
    RouterModule.forChild([{ path: 'reports', component: ReportsComponent }]),
  ]
})
export class AnalystModule { }
