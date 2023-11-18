import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-slogin',
    templateUrl: './slogin.component.html',
    styleUrls: ['./slogin.component.scss']
})
export class SloginComponent implements OnInit {
    seekerLoginForm!: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {

        this.seekerLoginForm = this.fb.group({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    recruiterLogin() {
        if (this.seekerLoginForm.valid) {
            this.authService.recruiterLogin(this.seekerLoginForm.value.email, this.seekerLoginForm.value.password);
        }
    }
}

