import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AnalystComponent } from './analyst.component';
import { ReportsComponent } from './reports/reports.component';
import { AnalystRoutingModule } from './analyst-routing.module';
import { HeaderComponent } from 'src/app/header/header.component';
import { MyWorkComponent } from './my-work/my-work.component';



@NgModule({
  declarations: [
    AnalystComponent,
    ReportsComponent,HeaderComponent, MyWorkComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    AnalystRoutingModule
  ]
})
export class AnalystModule { }
