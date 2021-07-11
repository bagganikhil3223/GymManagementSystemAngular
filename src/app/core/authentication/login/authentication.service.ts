import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { API_CONSTANTS } from 'src/app/constants/API_CONSTANTS';
import { LoginResponseModel } from 'src/app/models/LoginResponseModal';
import { UserLoginData } from 'src/app/models/UserLoginData';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private router: Router) {}
    apiConstants = API_CONSTANTS;
    isUserAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    isAuthenticated(): boolean {
       const item = sessionStorage.getItem('access_token');
       if (item && item === 'is Authenticated') {
           this.isUserAuthenticated.next(true);
           return true;
       }
       return false;
    }
    // tslint:disable-next-line:typedef
    async login(userData: UserLoginData){
        const url = this.apiConstants.authenticate;
        const result = await this.http.post<LoginResponseModel>(url, userData, {observe: 'response'}).toPromise();
        if (result && result.status === 200 && result.body) {
            sessionStorage.setItem('access_token', result.body.token);
            this.router.navigate(['/home']);
        }
    }
    logOut(): void{
        const token = sessionStorage.getItem('access_token');
        if (token) {
        this.isUserAuthenticated.next(false);
        sessionStorage.removeItem('access_token');
        this.router.navigate(['/login']);
        }
    }
}
