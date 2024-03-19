
import { Component } from '@angular/core';
import { accounts } from '../../environments/accounts';
import { Router } from '@angular/router';

@Component({
  selector: 'IMS__inventory_items',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
    errorMessage: string = '';
    username: string = '';
    password: string = '';

    constructor(
        private router: Router
    ) {}

    signIn(): void {
        const user = matchUsername(this.username);
        console.log(user, this.username);
        if(user && user.password === this.password) {
            localStorage.setItem('username', user.username);
            localStorage.setItem('role', user.role);
            this.router.navigate(['/inventory_items']);
        } else {
            this.errorMessage = 'Invalid username or password';
        }
    }
}

const matchUsername = (username: string) => {
    return accounts.find(account => account.username === username);
}


