import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiEndpointService {
    private baseUrl = "http://localhost:3000/";
    private authSecretKey = 'Bearer Token';

    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const authToken = localStorage.getItem(this.authSecretKey);
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        });
    }

    recruiterRegister(data: any): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + 'recruiters', body, { headers: headers });
    }

    getAllRecruiter(): Observable<any> {
        const headers = this.getHeaders();
        return this.http.get(this.baseUrl + 'recruiters', { headers });
    }
}