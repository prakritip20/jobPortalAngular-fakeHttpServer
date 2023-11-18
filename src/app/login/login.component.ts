import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    selectedTab: string = 'Job Seeker';

    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    tabChange(event: MatTabChangeEvent) {
        this.selectedTab = (event.index == 0) ? 'Job Seeker' : 'Recruiter';
    }

    closeDialog() {
        this.dialogRef.close();
    }

}
