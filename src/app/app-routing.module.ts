import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';

const routes: Routes = [
  {
  path: 'analyst',
  loadChildren: () =>
    import('./analyst/analyst.module').then(m => m.AnalystModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
