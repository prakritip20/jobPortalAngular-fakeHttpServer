import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RdashboardComponent } from './recruiter/rdashboard/rdashboard.component';
import { PostedjobsComponent } from './recruiter/rdashboard/postedjobs/postedjobs.component';
import { EmployeesAppliedComponent } from './recruiter/rdashboard/employees-applied/employees-applied.component';
import { RprofileComponent } from './recruiter/rprofile/rprofile.component';
import { PostjobComponent } from './recruiter/postjob/postjob.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'signup', component: RegistrationComponent },
    {
        path: 'rdashboard', component: RdashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'postedjobs', component: PostedjobsComponent },
            { path: 'seekers-applied', component: EmployeesAppliedComponent },
            { path: 'post-job', component: PostjobComponent },
            { path: 'profile', component: RprofileComponent },
        ]
    },
    { path: 'recruiter/rprofile', component: RprofileComponent },
    { path: 'recruiter/postjob', component: PostjobComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }