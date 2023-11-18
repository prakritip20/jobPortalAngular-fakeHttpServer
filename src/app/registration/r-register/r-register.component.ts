import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiEndpointService } from 'src/app/shared/services/api-endpoint.service';

@Component({
    selector: 'app-r-register',
    templateUrl: './r-register.component.html',
    styleUrls: ['./r-register.component.scss']
})
export class RRegisterComponent {

    recruiterSignupForm!: FormGroup;

    constructor(private fb: FormBuilder, private apiService: ApiEndpointService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.recruiterSignupForm = this.fb.group({
            userName: new FormControl('', [Validators.required]),
            companyName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            industry: new FormControl('', [Validators.required]),
            experience: new FormControl('', [Validators.required]),
            aboutCompany: new FormControl(''),
        });
    }

    recruiterSignup() {
        if (this.recruiterSignupForm.valid) {
            this.apiService.recruiterRegister(this.recruiterSignupForm.value).subscribe(() => {
                console.log("Data Saved", this.recruiterSignupForm.value);
                this.toastr.success("Congrats, you're now a job giver!", "Registration Success!", {
                    timeOut: 3000,
                });
                this.recruiterSignupForm.reset();
                this.recruiterSignupForm.updateValueAndValidity();
            })
        }
    }
}