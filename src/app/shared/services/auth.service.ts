import { Injectable } from '@angular/core';
import { ApiEndpointService } from './api-endpoint.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    private authSecretKey = 'Bearer Token';

    constructor(private apiService: ApiEndpointService,
        private router: Router,
        private toastr: ToastrService,
        private loginService: LoginService) {
        this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
    }

    recruiterLogin(username: string, password: string) {
        this.apiService.getAllRecruiter().subscribe((data) => {
            let recruiters = data;
            let value = recruiters.filter((data: any) => data.email === username && data.password === password);

            if (value.length == 0) {
                this.toastr.error('Invalid User-email or Password!', 'Login UnSuccessful!', {
                    timeOut: 3000,
                });
            }
            else {
                const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA'; // Generate or receive the token from your server
                localStorage.setItem(this.authSecretKey, authToken);
                this.isAuthenticated = true;
                this.toastr.success('Going to Dashboard!', 'Login Success!', {
                    timeOut: 3000,
                });
                localStorage.setItem("currentUser", value[0]);
                this.loginService.setUser(value[0])
                this.router.navigate(['rdashboard']);
            }
        })

    }

    isAuthenticatedRecruiter(): boolean {
        return this.isAuthenticated;
    }

    recruiterLogout(): void {
        localStorage.removeItem(this.authSecretKey);
        localStorage.removeItem("currentUser");
        this.isAuthenticated = false;
    }
}