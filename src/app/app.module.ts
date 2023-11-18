import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RdashboardComponent } from './recruiter/rdashboard/rdashboard.component';
import { RprofileComponent } from './recruiter/rprofile/rprofile.component';
import { PostjobComponent } from './recruiter/postjob/postjob.component';
import { PostedjobsComponent } from './recruiter/rdashboard/postedjobs/postedjobs.component';
import { EmployeesAppliedComponent } from './recruiter/rdashboard/employees-applied/employees-applied.component';
import { RloginComponent } from './login/rlogin/rlogin.component';
import { SloginComponent } from './login/slogin/slogin.component';
import { provideToastr } from 'ngx-toastr';
import { SregisterComponent } from './registration/sregister/sregister.component';
import { RRegisterComponent } from './registration/r-register/r-register.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LandingPageComponent,
        RdashboardComponent,
        RprofileComponent,
        PostjobComponent,
        PostedjobsComponent,
        EmployeesAppliedComponent,
        RloginComponent,
        SloginComponent,
        SregisterComponent,
        RRegisterComponent,
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CarouselModule,
        IvyCarouselModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        provideAnimations(), // required animations providers
        provideToastr(), // Toastr providers
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
