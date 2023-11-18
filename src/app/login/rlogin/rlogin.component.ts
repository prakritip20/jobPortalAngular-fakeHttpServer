import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-rlogin',
    templateUrl: './rlogin.component.html',
    styleUrls: ['./rlogin.component.scss']
})
export class RloginComponent {
    recruiterLoginForm!: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {

        this.recruiterLoginForm = this.fb.group({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    recruiterLogin() {
        if (this.recruiterLoginForm.valid) {
            this.authService.recruiterLogin(this.recruiterLoginForm.value.email, this.recruiterLoginForm.value.password);
        }
    }
}