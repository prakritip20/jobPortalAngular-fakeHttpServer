import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    @ViewChild('customSidenav') customSidenav!: MatSidenav;

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    selectedTab: string = 'Job Seeker';

    openSlider() {
        this.customSidenav.toggle();
    }

    closeSlider() {
        this.customSidenav.close();
    }

    tabChange(event: MatTabChangeEvent) {
        this.selectedTab = (event.index == 0) ? 'Job Seeker' : 'Recruiter';
    }
}