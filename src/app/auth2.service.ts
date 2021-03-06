import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class AuthService1 {
    BASE_URL = 'http://localhost:1234/auth2';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';
    constructor(private http: Http, private router: Router) {}

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    login(loginData) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(res =>{
            this.authenticate(res);
            console.log(res.json);
        });

    }
    register(user) {
        delete user.confirmPassword;
       this.http.post(this.BASE_URL + '/signupDep', user)
        .subscribe(res => {
           this.authenticate(res);
       });
    }
    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }

    authenticate(res) {
        const authResponse = res.json();
        if (!authResponse.token) {
          return; 
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/']);
    }
}
