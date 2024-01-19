import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FooterComponent } from '../footer/footer.component';




@NgModule({
  declarations: [
    HomeComponent,
    FeedbackComponent,
    LoginComponent,
    AboutUsComponent,
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
