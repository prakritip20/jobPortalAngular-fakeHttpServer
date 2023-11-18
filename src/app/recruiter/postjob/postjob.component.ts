import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-postjob',
    templateUrl: './postjob.component.html',
    styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {

    postJobForm!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.postJobForm = this.fb.group({
            jobId: new FormControl(''),
            jobTitle: new FormControl(''),
            jobPostedDate: new FormControl(''),
            role: new FormControl(''),
            responsibility: new FormControl(''),
            companyName: new FormControl(''),
            experience: new FormControl(''),
            salaryRange: new FormControl(''),
            noOfPositions: new FormControl(''),
            location: new FormControl(''),
            skillsQualifications: new FormControl(''),
            degree: new FormControl(''),
            companyInfo: new FormControl(''),
            empType: new FormControl(''),
            industryType: new FormControl(''),
            searchKeyword: new FormControl(''),
            jobDescription: new FormControl('')
        });
    }

    postJob() {
        console.log(this.postJobForm.value);
    }
}
