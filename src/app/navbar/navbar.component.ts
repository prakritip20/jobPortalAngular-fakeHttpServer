import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../shared/services/auth.service';
import { LoginService } from '../shared/services/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isNavbarFixed: boolean = false;
    selectedLang: string = 'en';
    currentPage: string = 'landingPage';
    loggedInUser: any;

    @HostListener('window:scroll', ['$event']) onScroll() {
        if (window.scrollY > 60) {
            this.isNavbarFixed = true;
        } else {
            this.isNavbarFixed = false;
        }
    }

    constructor(private router: Router,
        public dialog: MatDialog,
        private translate: TranslateService,
        private authService: AuthService,
        private loginService: LoginService) {

        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                console.log('Route change detected');
            }

            if (event instanceof NavigationEnd) {
                console.log(event.url);
                this.currentPage = (event.url == '/') ? 'landingPage' : 'notLandingPage';

                if (event.url.includes('rdashboard')) {
                    this.currentPage = 'recruiterPage';
                }
            }
        });
    }

    ngOnInit(): void {
        this.loginService.loggedInUser$.subscribe((user) => {
            this.loggedInUser = user;
        });

        this.loggedInUser = localStorage.getItem("currentUser");
    }


    goToHomepage() {
        this.router.navigate(['']);
    }

    openLoginDialog() {
        const dialogRef = this.dialog.open(LoginComponent, {

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    goToRegistration() {
        this.router.navigate(['signup']);
    }

    logout() {
        this.authService.recruiterLogout();
        this.router.navigate(['']);
    }

    changeLan(language: string) {
        this.translate.use(language);
        this.selectedLang = language;
    }
}