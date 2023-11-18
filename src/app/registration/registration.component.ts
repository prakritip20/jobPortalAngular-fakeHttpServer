import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
    selectedTab: string = 'Job Seeker';
    
    tabChange(event: MatTabChangeEvent) {
        this.selectedTab = (event.index == 0) ? 'Job Seeker' : 'Recruiter';
    }
}
