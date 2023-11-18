import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sregister',
    templateUrl: './sregister.component.html',
    styleUrls: ['./sregister.component.scss']
})
export class SregisterComponent implements OnInit {

    seekerLoginForm!: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.seekerLoginForm = this.fb.group({
            type: new FormControl('fresher'),
            name: new FormControl(''),
            email: new FormControl(''),
            password: new FormControl(''),
            mobileNum: new FormControl(''),
            addressLine1: new FormControl(''),
            addressLine2: new FormControl(''),
            addressCity: new FormControl(''),
            addressPcode: new FormControl(''),
            addressState: new FormControl(''),
            addressCountry: new FormControl(''),
            skills: new FormControl(''),
            expYear: new FormControl(''),
            expMonth: new FormControl(''),
            resume: new FormControl(''),

            currEmployer: new FormControl(''),
            designation: new FormControl(''),
            cDescription: new FormControl(''),
            expeMonth: new FormControl(''),
            prevEmployer: new FormControl(''),
            pDescription: new FormControl(''),
            pExpMonth: new FormControl(''),

            college: new FormControl(''),
            passYear: new FormControl(''),
            graduated: new FormControl(''),
            school: new FormControl(''),
            yearAttend: new FormControl(''),
            certificate: new FormControl('')
        });
    }

    onFileSelect(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.seekerLoginForm.controls['resume'].setValue(file);
        }
    }

    seekerSignup() {
        console.log(this.seekerLoginForm.value)
    }
}
