import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private _loggedInUser = new Subject<boolean>();
    loggedInUser$ = this._loggedInUser.asObservable();

    constructor() { }

    setUser(user:any) {
        this._loggedInUser.next(user);
    }
}