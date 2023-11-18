import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    apiData = [
        { id: 1, "url": "/assets/job1.png", "title": "Best Place to find jobs" },
        { id: 2, "url": "/assets/job2.png", "title": "Follow your passion" },
        { id: 3, "url": "/assets/job3.jpeg", "title": "Register and Enjoy" },
        { id: 3, "url": "/assets/job4.jpg", "title": "Unlimited benefits" }
    ]

    limit: number = 10;
    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        center: true,
        dots: false,
        autoHeight: false,
        autoWidth: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    }

    searchForm!: FormGroup;

    hotJobs: { id: number; company: string; role: string; experience: string; location: string; }[] = [];
    companyList: { id: number; url: string; }[] = [];    
    ourServices: { id: number; title: string; details: string; }[]= [];
    careerTips: { id: number; title: string; date: string; moreContent: string; }[] = [];
    homepageDetails: { heading: string; options: { value: string; url: string; }[]; }[] = [];

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {

        this.searchForm = this.fb.group({
            searchCriteria: new FormControl(''),
            region: new FormControl(''),
            employmentType: new FormControl(''),
        });

        this.hotJobs = [
            { id: 1, "company": "LAD Software Solutions", "role": "VP of Marketing", "experience": "8-13", "location": "Jaipur/Cochin/Kochi/Ernakulam" },
            { id: 2, "company": "AG Solutions", "role": "Project Manager", "experience": "10", "location": "Bangalore/Hyderabad" },
            { id: 3, "company": "CAD Software", "role": "Inside Sales", "experience": "2-5", "location": "Jaipur/Chennai" },
            { id: 4, "company": "BIDULA IT Solutions Private Limited", "role": "VP of Marketing", "experience": "3-8", "location": "Mysore/Madurai" }
        ];

        this.companyList = [
            { id: 1, "url": "/assets/companies/amazon.png" },
            { id: 2, "url": "/assets/companies/google.png" },
            { id: 3, "url": "/assets/companies/cognizant.jpg" },
            { id: 4, "url": "/assets/companies/ibm.png" },
            { id: 5, "url": "/assets/companies/dell.jpg" },
            { id: 6, "url": "/assets/companies/facebook.png" },
            { id: 7, "url": "/assets/companies/apple.png" },
            { id: 8, "url": "/assets/companies/microsoft.png" },
            { id: 9, "url": "/assets/companies/samsung.png" },
            { id: 10, "url": "/assets/companies/pwc.png" },
            { id: 11, "url": "/assets/companies/sap.png" },
            { id: 12, "url": "/assets/companies/intel.png" },
            { id: 13, "url": "/assets/companies/cisco.png" },
            { id: 14, "url": "/assets/companies/netflix.png" },
            { id: 15, "url": "/assets/companies/accenture.png" },
            { id: 16, "url": "/assets/companies/walmart.png" },
            { id: 17, "url": "/assets/companies/oracle.png" },
            { id: 18, "url": "/assets/companies/toyota.png" },
            { id: 19, "url": "/assets/companies/adidas.png" },
            { id: 20, "url": "/assets/companies/att.png" },
            { id: 21, "url": "/assets/companies/deloitte.png" },
            { id: 22, "url": "/assets/companies/mcdonalds.png" },
        ];

        this.ourServices = [
            { id: 1, "title": "World-class partners", "details": "Connect with Linkedln, Google and 70+ other apps and tools to get more done." },
            { id: 2, "title": "Fast, global support", "details": "Reach our award-winning support team in about 25 seconds by phone or chat." },
            { id: 3, "title": "Trusted security", "details": "Sleep soundly knowing your data is always safe and always accessible. We're ISO-certified." },
            { id: 4, "title": "Anywhere recruiting", "details": "Keep things moving from anywhere with our top-rated mobile hiring app." },
            { id: 5, "title": "Expert advice", "details": "Make the right moves with help from 1000s of hiring templates and tutorials." },
            { id: 6, "title": "Assisted onboarding", "details": "Get up and running in days, not months - Workable is just that easy to use." }
        ]

        this.careerTips = [
            { id: 1, "title": "Ready to Work From Home?Here's How to keep Calm and be Productive", "date": "May 2023", "moreContent": "lfhiuwgefuhuwehlw" },
            { id: 2, "title": "These Best Part Time Jobs Do Not Require You to be a Topper", "date": "June 2023", "moreContent": "lfhiuwgefuhuwehlw" },
            { id: 3, "title": "8 Most Popular Part Time Jobs for Students", "date": "Jan 2022", "moreContent": "lfhiuwgefuhuwehlw" },
            { id: 4, "title": "10 Best Teams Interview Tips for Job Seekers Who Want to Succeed", "date": "July 2023", "moreContent": "lfhiuwgefuhuwehlw" },
            { id: 5, "title": "5 Work From Home Tips for Those Who Genuinely Want to 'Work' and 'Contribute'", "date": "Feb 2021", "moreContent": "lfhiuwgefuhuwehlw" },
            { id: 6, "title": "Top Tips and Resources to Manage Your Career Amid Coronavirus", "date": "Dec 2023", "moreContent": "lfhiuwgefuhuwehlw" }
        ]

        this.homepageDetails = [
            {
                "heading": "Product",
                "options": [
                    { value: "Source & Attract", "url": "" },
                    { value: "Evaluate & Collaborate", "url": "" },
                    { value: "Automate & Hire", "url": "" },
                    { value: "Language Option", "url": "" }
                ]
            },
            {
                "heading": "Platform",
                "options": [
                    { value: "Why JobPortal.Co", "url": "" },
                    { value: "Security", "url": "" },
                    { value: "Customers", "url": "" },
                    { value: "Partners", "url": "" },
                    { value: "Pricing", "url": "" }
                ]
            },
            {
                "heading": "Resources",
                "options": [
                    { value: "Applicant Tracking", "url": "" },
                    { value: "Recruiting Resources", "url": "" },
                    { value: "Stories & Insights", "url": "" },
                    { value: "HR Tutorials", "url": "" },
                    { value: "Job Descriptions", "url": "" }
                ]
            },
            {
                "heading": "Company",
                "options": [
                    { value: "Contact", "url": "" },
                    { value: "Backstage", "url": "" },
                    { value: "Careers", "url": "" },
                    { value: "Press", "url": "" },
                    { value: "About", "url": "" }
                ]
            },
        ];
    }

    searchJobs() {
        console.log("searchData", this.searchForm.value)
    }
}