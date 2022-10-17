import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'signup',component:SignupComponent},
  {path: 'analyst',
    loadChildren: () => import('../Modules/analyst/analyst.module').then(m => m.AnalystModule)
   },
//   {path: 'Admin',
//    // loadChildren: () => import('../layout/adminlayout/adminlayout.module').then(m => m.AdminlayoutModule)
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
