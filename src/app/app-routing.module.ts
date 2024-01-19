import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { AboutUsComponent } from './home/about-us/about-us.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:UserLoginComponent},
  // {path:'user/dashboard',component:UserDashboardComponent,canActivate:[AuthGuard]},
  {path:'user/dashboard',component:UserDashboardComponent},
  {path:'register',component:UserRegisterComponent},
     
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {path:'feedback',component:FeedbackComponent},
  {path:'aboutus',component:AboutUsComponent},
   {path:'**',component:ErrorHandleComponent},
   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
