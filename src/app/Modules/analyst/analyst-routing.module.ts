import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalystComponent } from './analyst.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
    { path: '', component: AnalystComponent ,
     children: [{ path: 'analyst', component: AnalystComponent },
                { path: 'reports', component: ReportsComponent }]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystRoutingModule { }