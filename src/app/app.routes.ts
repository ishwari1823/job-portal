import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';

export const routes: Routes = [

    {
        path: '', component: HomeComponent, pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'jobs', component: JobsComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'login',component: LoginComponent
    },
    {
        path: 'signup',component: SignupComponent
    },
    {
        path: 'view-details/:id',component: ViewDetailsComponent
    },
    {
        path: 'apply-now/:id', component: ApplyNowComponent
    },


];